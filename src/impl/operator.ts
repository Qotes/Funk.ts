/**
 * specific functions for basic arithmetic calculation
 * or small logic things
 */

import { curry, curry3, named, proped } from 'src/porter'

export interface IOp {
    optag: string
    <T> (m: T): FN1<T, boolean>
    <T> (m: T, n: T): boolean
}

const optaged = proped('optag')

const OP = (name: string, optag: string, impl: FN) => named(name)(optaged(optag)(curry(impl))) as IOp


export const eq = OP('eq', '===', (m: any, n: any) => m === n)


export const ne = OP('ne', '!==', (m: any, n: any) => m !== n)


export const gt = OP('gt', '>', (m: any, n: any) => m > n)


export const lt = OP('lt', '<', (m: any, n: any) => m < n)


export const ge = OP('ge', '>=', (m: any, n: any) => m >= n)


export const le = OP('le', '<=', (m: any, n: any) => m <= n)


/**
 * @internal
 * @sig :: IOp: o => a -> o -> a -> bool
 */
export const checkN = named('checkN')(curry3((m: any, o: IOp, n: any) => o(m, n)))


/**
 * @desc we are in ts world, so the added two params should be the same type, right ?
 * @sig add :: a -> a -> a
 */
export const add = named('add')(curry((a: any, b: any) => a + b)) as /** @interface */ {
    <T>(a: T, b: T): T
    <T>(a: T): (b: T) => T
}


/**
 * @sig add :: a -> a -> a
 */
export const mul = named('add')(curry((a: number, b: number) => a * b))


/**
 * @sig incr: a -> a
 */
export const incr = named('incr')(add(1))


/**
 * @sig incr: a -> a
 */
export const decr = named('decr')(add(-1))


/**
 * @sig trunc :: n -> n
 */
export const trunc = named('trunc')((n: number) => n | 0)


/**
 * @sig xor :: a -> a -> n
 */
export const xor = named('xor')(curry((l: any, r: any) => l ^ r))


/**
 * @sig whether :: a -> bool
 */
export const whether = named('whether')((x: any) => !!x)


/**
 * @sig ternary :: bool -> a -> a -> a
 * @monad
 */
export const ternary = named('ternary')(curry3((b: boolean, l: any, r: any) => b ? l : r)) as /** @interface */ {
    (b: boolean): <T>(l: T) => (r: T) => T
    (b: boolean): <T>(l: T, r: T) => T
    <T>(b: boolean, l: T): (r: T) => T
    <T>(b: boolean, l: T, r: T): T
}


/**
 * @sig clamp :: n -> n -> n -> n
 */
export const clamp = named('clamp')(curry3((min: number, max: number, v: number) => v < min ? min : v > max ? max : v))


/**
 * @sig between :: n -> n -> n -> bool
 */
export const between = named('between')(curry3((min: number, max: number, v: number) => min < v && v < max))


/**
 * @sig betweenEq :: n -> n -> n -> bool
 */
export const betweenEq = named('betweenEq')(curry3((min: number, max: number, v: number) => min <= v && v <= max))
