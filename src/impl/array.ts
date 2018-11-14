/**
 * @file array methods
 */

import { curry } from 'src/impl/curry'
import { isString, isObject, isFunction } from 'src/impl/isType'
import { named } from 'src/impl/named'
import { not } from 'src/impl/operator'
import { Mappable } from 'src/impl/monad'


export const index = named('index')(curry((n: number, l: any[]) => n < 0 ? l.slice(n)[0] : l[n])) as /** @interface */ {
    <T> (n: number, l: T[]): T
    <T> (n: number): (l: T[]) => T
}


// TODO: take, elem/includes,


export function head<T> (l: T[]) {
    return l[0]
}

export function tail<T> (l: T[]) {
    return l.slice(1)
}


export function last<T> (l: T[]) {
    return index(-1, l)
}


/**
 * @sig init :: [a] -> [a]
 * @example
 *   const l = [1, 2, 3]
 *   const l01 = init(l) // [0, 1]
 */
export function init<T> (l: T[]) {
    return l.slice(0, -1)
}


/**
 * @sig nums :: n -> [n]
 * @example
 *   const a0 = nums(0) // []
 *   const a1 = nums(1) // [0]
 *   const a3 = nums(3) // [0, 1, 2]
 */
export function nums (len: number) {
    return [...Array(len).keys()]
}


/**
 * @sig reverse :: ([] -> []) | s -> s
 */
export function reverse (it: string): string
export function reverse<T> (it: T[]): T[]
export function reverse<T> (it: T[] | string) {
    return isString(it) ? it.split('').reverse().join('') : it.slice().reverse()
}


/**
 * @sig append :: a -> [a] -> [a]
 */
export const append = named('append')(curry((v: any, l: any[]) => l.concat(v))) as /** @interface */ {
    <T>(v: T, l: T[]): T[]
    <T>(v: T): (l: T[]) => T[]
}


// TODO: reduce
// function reduce<R, T> (fn: (v: R, c: T, i?: number) => R): (l: T[]) => R
// function reduce<R, T> (fn: (v: R, c: T, i?: number) => R, l: T[], iV?: R): R
// function reduce<R, T> (fn: (v: R, c: T, i?: number) => R, l?: T[], iV?: R) {
//   return arguments.length > 1
//     ? (arguments.length === 3 ? l.reduce<R>(fn, iV) : l.reduce(fn as any)) as R
//     : (l2: T[]) => l2.reduce(fn as any)
// }


/**
 * @sig filter :: f -> [a] -> [a]
 */
export const filter = named('filter')(curry((f: F<boolean>, l: L) => l.filter(f))) as /** @interface */ {
    <T>(f: F<boolean>, l: T[]): T[]
    (f: F<boolean>): <T>(l: T[]) => T[]
}


/**
 * @sig without :: f -> [a] -> [a]
 */
export const without = named('without')(curry((f: F<boolean>, l: L) => l.filter(not(f)))) as /** @interface */ {
    <T>(f: F<boolean>, l: T[]): T[]
    (f: F<boolean>): <T>(l: T[]) => T[]
}


/**
 * @needtest
 * @todo type, composed processing
 * @sig map :: f -> [a] -> [a]
 * @see monad.fmap
 */
export const map = named('map')(curry((f: F, x: any) => isObject(x) && isFunction((x as Mappable).map) ? (x as Mappable).map(f) : f(x))) as /** @interface */ {
    (f: F): (a: A) => A
    (f: F, a: A): A
    <T, R> (f: F1<T, R>, m: Mappable<T>): Mappable<R>
    <T, R> (f: F1<T, R>): (m: Mappable<T>) => Mappable<R>
    // TODO: functor
}


/**
 * @needtest
 * @todo
 */
// export const find = named('find')(curry())

// TODO: transduce

// TODO: take


/**
 * @deprecated maybe uncessary in typescript
 * @sig unary :: f -> f
 */
// export function unary <T, R> (f: F1<T, R> | F2<T, A, R>| F3<T, A, A, R> | F<R>) {
//     return named(f.name)((arg: T) => f(arg))
// }
