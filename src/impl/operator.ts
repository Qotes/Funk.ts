import { curry, curry3 } from 'src/impl/curry'
import { proped } from 'src/impl/object'
import { named } from 'src/impl/named'
import { isFunction } from 'src/impl/isType'

/**
 * @needtest
 * @notclear: considering change the order
 * specific functions for basic arithmetic calculation
 * or small logic things
 */


export interface IOp {
    optag: string
    <T> (m: T): F1<T, boolean>
    <T> (m: T, n: T): boolean
}

const optaged = proped('optag')

const OP = (name: string, optag: string, impl: F) => named(name)(optaged(optag)(curry(impl))) as IOp


/**
 * @desc Equality is based on the "SameValueZero" algorithm: NaN is considered the
 *       same as NaN (even though NaN !== NaN) and all other values are considered
 *       equal according to the semantics of the === operator. In the current
 *       ECMAScript specification -0 and +0 are considered equal, although this was
 *       not so in earlier drafts.
 *       @ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 *       But this function just applies the semantics of the === operator.
 */
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
 * @sig subtract :: a -> a -> a
 * @deprecated use add(a, -b) instead
 */
export const subtract = named('subtract')(curry((a: any, b: any) => a - b)) as /** @interface */ {
    <T>(a: T, b: T): T
    <T>(a: T): (b: T) => T
}


/**
 * @sig add :: n -> n -> n
 */
export const mul = named('add')(curry((a: number, b: number) => a * b))


/**
 * @sig add :: n -> n -> n
 * @deprecated use mul(a, 1 / b) instead
 */
export const division = named('division')(curry((a: number, b: number) => a / b))

/**
 * @sig incr: n -> n
 */
export const incr = named('incr')(add(1))


/**
 * @sig incr: n -> n
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


// TODO: and / or


/**
 * @sig whether :: a -> bool
 */
export const whether = named('whether')((x: any) => !!x)


/**
 * @sig not :: a -> bool
 *             a -> bool -> a -> bool
 */
// export const not = named('not')((x: any) => !x)
export function not <T extends F<boolean> | boolean> (xf: T): T
export function not (xf: boolean | F<boolean>) {
    if (isFunction(xf)) return named(xf.name)((...args: any[]) => not((xf)(...args)))
    return !xf
}


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


/**
 * @sig identity :: a -> a
 */
export const identity = named('identity')(<T>(a: T): T => a)


/**
 * @sig constant :: () -> a
 */
export const constant = named('constant')(<R>(a: R): F0<R> => () => a)
