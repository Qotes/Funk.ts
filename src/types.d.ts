declare interface IF {
    callees?: string[] // composed
    partially?: boolean // curried
    optag?: string // Operator
}

declare type FN<R = any> = ((...args: any[]) => R) & IF
declare type FN1<T, R> = ((t: T) => R) & IF
declare type FN2<T1, T2, R> = ((t1: T1, t2: T2) => R) & IF
declare type FN3<T1, T2, T3, R> = ((t1: T1, t2: T2, t3: T3) => R) & IF

declare type valueof<T> = T[keyof T]

declare type N = number

declare type S = string

declare type L<T> = Array<T>
