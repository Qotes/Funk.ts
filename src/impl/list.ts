/**
 * cons from SICP
 */


// type List <T = any> = T[]

// interface IList <T = any> {
//     //
// }

interface ICons <T1, T2> {
    (pick: ICarPick): T1
    (pick: ICdrPick): T2
}

interface ICarPick { <T1, T2> (car: T1, cdr: T2): T1 }
interface ICdrPick { <T1, T2> (car: T1, cdr: T2): T2 }


export const cons = <T1, T2> (car: T1, cdr: T2) => ((pick: ICarPick | ICdrPick) => pick(car, cdr)) as ICons<T1, T2>

export const car = <T1, T2> (cons: ICons<T1, T2> | null) => cons!(<T1, T2> (car: T1, _: T2) => car)

export const cdr = <T1, T2> (cons: ICons<T1, T2> | null) => cons!(<T1, T2> (_: T1, cdr: T2) => cdr)


export function list (...args: L<A>) {
    return args.length ? cons(args.shift(), list.apply(null, args)) : null
}
