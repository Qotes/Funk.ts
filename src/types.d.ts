declare type FN<R = any> = ((...args: any[]) => R) & {
    callees?: string[] // composed
    optag?: string // Operator
}

declare type valueof<T> = T[keyof T]

declare type N = number

declare type S = string

declare type L<T> = Array<T>
