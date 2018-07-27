import { reverse } from 'src/porter'


/**
 * @desc Composes a function runs from right to left and keep the callees
 *       Takes params from the rightest function and return from the leftest function
 * @record itself is not nocorded in callees stack
 * @see pipe
 * @alias pipeR
 * @todo: pipe
 *        not sure whether to put into monads
 *        checkArgsN(1)
 * @example
 *   const f1 = (a: number) => a + 1
 *   const f2 = (a: number) => a + '2'
 *   const f3 = (a: string) => parseInt(a, 10) - 2
 *   const fc1 = compose(f2, f1) // number -> string
 *   const fc2 = compose(f3, fc1) // number -> number
 *   const fc3 = compose(f3, f2, f1) // number -> number
 *   // actually fc3 is same to fc2
 */
export function compose<T1, R1, R>         (fn2: FN1<R1, R>, fn1: FN1<T1, R1>): FN1<T1, R>
export function compose<T1, T2, R1, R>     (fn2: FN1<R1, R>, fn1: FN2<T1, T2, R1>): FN2<T1, T2, R>
export function compose<T1, T2, T3, R1, R> (fn2: FN1<R1, R>, fn1: FN3<T1, T2, T3, R1>): FN3<T1, T2, T3, R>
export function compose<T1, R1, R2, R>         (fn3: FN1<R2, R>, fn2: FN1<R1, R2>, fn1: FN1<T1, R1>): FN1<T1, R>
export function compose<T1, T2, R1, R2, R>     (fn3: FN1<R2, R>, fn2: FN1<R1, R2>, fn1: FN2<T1, T2, R1>): FN2<T1, T2, R>
export function compose<T1, T2, T3, R2, R1, R> (fn3: FN1<R2, R>, fn2: FN1<R1, R2>, fn1: FN3<T1, T2, T3, R1>): FN3<T1, T2, T3, R>
export function compose<R> (fn: FN<R>, ...fns: FN[]): FN<R>
export function compose <R> (...fns: FN[]) {
    // TODO: checkArgsN 1
    const composed = fns.reduce((c, fn) => (...args: any[]) => fn(c(...args))) as FN<R>
    composed.callees = reverse(fns).map(fn => fn.name)

    return composed
}
