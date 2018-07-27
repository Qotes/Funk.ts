/**
 * @file array methods
 */

import { curry, isString } from '../porter'


export const _index = curry(function index (n: number, l: any[]) {
    return n < 0 ? l.slice(n)[0] : l[n]
}) as /** @interface */ {
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
    return _index(-1, l)
}


export function init<T> (l: T[]) {
    return l.slice(0, -1)
}


export const _map = curry(function map (fn: (a: any) => any, l: any[]){
    return l.map(fn)
}) as /** @interface */ {
    <T, R> (fn: (a: T) => R, l: T[]): R[]
    <T, R> (fn: (a: T) => R): (l: T[]) => R[]
}


export function nums (len: number) {
    return [...Array(len).keys()]
}


export function reverse (it: string): string
export function reverse<T> (it: T[]): T[]
export function reverse<T> (it: T[] | string) {
    return isString(it) ? it.split('').reverse().join('') : it.slice().reverse()
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
