/**
 * @file array methods
 */

import { curry, isString, named } from '../porter'


export const index = named('index')(curry((n: number, l: any[]) => n < 0 ? l.slice(n)[0] : l[n])) as /** @interface */ {
    <T> (n: number, l: T[]): T
    <T> (n: number): (l: T[]) => T
}


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
 */
export function init<T> (l: T[]) {
    return l.slice(0, -1)
}


export const map = named('map')(curry((fn: (a: any) => any, l: any[]) => l.map(fn))) as /** @interface */ {
    <T, R> (fn: (a: T) => R, l: T[]): R[]
    <T, R> (fn: (a: T) => R): (l: T[]) => R[]
}


/**
 * @sig nums :: n -> [n]
 */
export function nums (len: number) {
    return [...Array(len).keys()]
}


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


// TODO: filter

// const map = fn => rFn => (r, i) => rFn(r, fn(i))


// TODO: transduce

// TODO: take
