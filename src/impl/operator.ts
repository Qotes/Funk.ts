import { curry, curry3, named, proped } from 'src/porter'

interface IOp {
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
 * @example
 *   const n2 = 10
 *   const eq10 = checkN(n2, eq)
 *   const r = eq10(7) // boolean
 */
export const _checkN = curry3(function checkN (n: number, op: IOp, m: number) {
    return op(n, m)
})

// TODO: Math...
// + - * /
// incr, decr
// whether, ternary
export const trunc = named('trunc')((n: number) => n | 0)


export const whether = named('whether')((x: any) => !!x)

/**
 * @todo
 */
export const _ternary = curry3(function ternary (x: any, l: any, r: any) {
    return !!x ? l : r
})
