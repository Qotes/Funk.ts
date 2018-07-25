import { curry } from './curry'

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
