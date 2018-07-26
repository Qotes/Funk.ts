import { curry, curry3 } from './curry'

interface IOp extends FN<boolean> {
    optag: string
    <T> (m: T): FN<boolean>
    <T> (m: T, n: T): boolean
}


export const _eq = curry(function eq (m: any, n: any) {
    (eq as any).optag = '==='
    return m === n
}) as IOp


export const _gt = curry(function gt (m: any, n: any) {
    (gt as any).optag = '>'
    return m > n
}) as IOp


export const _lt = curry(function lt (m: any, n: any) {
    (lt as any).optag = '<'
    return m < n
}) as IOp


export const _ge = curry(function ge (m: any, n: any) {
    (ge as any).optag = '>='
    return m >= n
}) as IOp


export const _le = curry(function le (m: any, n: any) {
    (le as any).optag = '<='
    return m <= n
}) as IOp


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
