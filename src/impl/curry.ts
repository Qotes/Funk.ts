/**
 * @file curry function
 * @warnning be careful with the imported modules in this file
 * @desc Declare the interface if you want a solid check for curried function with generic types or monads
 *       It just works in most circumstances, hope that you don't need the interface
 *       Most functions in this lib are curried with it
 *       Just wander around and you will find some useful examples
 * @see array.ts for examples
 * @example
 *   // briefly, constant type function
 *   const add = curry((a: number, b: number) => a + b)
 *
 *   // specific the interface if generic type are vital
 *   interface ICurriedAdd {
 *        <T, R> (t1: T, t2: T): R
 *        <T, R> (t1: T): (t2: T) => R
 *   }
 *   const add = <T>(a: T, b: T) => a as any + b as any
 *   const curriedAdd = curry(add) as ICurriedAdd
 *   curriedAdd(2)(3) // ok
 *   curriedAdd('2')('3') // ok
 *   curriedAdd(2)('3') // error
 */

import { named } from '../porter'

type Curried0<R> = R

type Curried1<T1, R> = (t1: T1) => Curried0<R>

interface Curried2<T1, T2, R> {
    (t1: T1): Curried1<T2, R>
    (t1: T1, t2: T2): Curried0<R>
}

interface Curried3<T1, T2, T3, R> {
    (t1: T1): Curried2<T2, T3, R>
    (t1: T1, t2: T2): Curried1<T3, R>
    (t1: T1, t2: T2, t3: T3): Curried0<R>
}

const ArgsError = (name: string) => `The curried ${name} expects at leat 1 arguments, found 0.`


function curry0<R> (r: R): Curried0<R> {
    return r
}


function curry1 <T1, R> (f: (t1: T1) => R): Curried1<T1, R> {
    function curried (t1: T1): Curried0<R> {
        switch (arguments.length) {
            case 0: throw Error(ArgsError(f.name))
            default: return curry0(f(t1))
        }
    }
    return named(curried, f.name)
}


export function curry2 <T1, T2, R> (f: (t1: T1, t2: T2) => R): Curried2<T1, T2, R> {
    function curried (t1: T1): Curried1<T2, R>
    function curried (t1: T1, t2: T2): Curried0<R>
    function curried (t1: T1, t2?: T2) {
        switch (arguments.length) {
            case 0: throw Error(ArgsError(f.name))
            case 1: return curry1((t22: T2): R => f(t1, t22))
            default: return curry0(f(t1, t2 as T2))
        }
    }
    return named(curried, f.name)
}


export function curry3 <T1, T2, T3, R> (f: (t1: T1, t2: T2, t3: T3) => R): Curried3<T1, T2, T3, R> {
    function curried (t1: T1): Curried2<T2, T3, R>
    function curried (t1: T1, t2: T2): Curried1<T3, R>
    function curried (t1: T1, t2: T2, t3: T3): Curried0<R>
    function curried (t1: T1, t2?: T2, t3?: T3) {
        switch (arguments.length) {
            case 0: throw Error(ArgsError(f.name))
            case 1: return curry2((t22: T2, t32: T3) => f(t1, t22, t32))
            case 2: return curry1((t32: T3) => f(t1, t2 as T2, t32))
            default: return curry0(f(t1, t2 as T2, t3 as T3))
        }
    }
    return named(curried, f.name)
}


// function curryN <T1, R> (f: (t1: T1) => R): Curried1<T1, R>
// function curryN <T1, T2, R> (f: (t1: T1, t2: T2) => R): Curried2<T1, T2, R>
// function curryN <T1, T2, T3, R> (f: (t1: T1, t2: T2, t3: T3) => R): Curried3<T1, T2, T3, R>
// function curryN <R> (f: (...args: any[]) => R) {
//     const arity = f.length
//     const curried: FN<R> = (...args: any[]) => {
//         curried.partially = this && this.partially

//         return args.length < arity
//           ? named(f.name, curried.bind({ partially: true }, ...args))
//           : f.call(this || { partially: false }, ...args)
//     }
//     return named(curried, f.name)
// }


// export const curry = curryN

export const curry = curry2
