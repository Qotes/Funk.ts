declare interface IF {
    callees?: string[] // composed
    partially?: boolean // curried
    optag?: string // Operator
}

declare type valueof<T> = T[keyof T]

// n-ary
declare interface F<R = any> extends IF { (...args: any[]): R }
// 0
declare type F0<R> = (() => R) & IF
// unary
declare type F1<T, R> = ((t: T) => R) & IF
// binary
declare type F2<T1, T2, R> = ((t1: T1, t2: T2) => R) & IF
// ternary
declare type F3<T1, T2, T3, R> = ((t1: T1, t2: T2, t3: T3) => R) & IF

declare type N = number

declare type S = string

declare type L<T = any> = Array<T>

declare type O = object

declare type A = any


