declare interface IF {
    callees?: string[] // composed
    partially?: boolean // curried
    optag?: string // Operator
}

declare type valueof<T> = T[keyof T]

// n-ary
declare interface F<R = any> extends IF { (...args: any[]): R }
// 0
declare interface F0<R> extends F<R> { (): R }
// unary
declare interface F1<T, R> extends F<R> { (t: T): R }
// binary
declare interface F2<T1, T2, R> extends F<R> { (t1: T1, t2: T2): R }
// ternary
declare interface F3<T1, T2, T3, R> extends F<R> { (t1: T1, t2: T2, t3: T3): R }

declare type N = number

declare type S = string

declare type L<T = any> = Array<T>

declare type O = object

declare type A = any


