import { eq, head, last, tail, init } from 'src/porter'


export const _ = Symbol('F.PLA4H0LD2')


export function replace<R> (f: FN<R>) {
    return function replaced (...args: any[]) {
        if (eq(head(args), _)) return (__: any) => f(__, ...tail(args))
        if (eq(last(args), _)) return (__: any) => f(...init(args), __)
        return f(...args)
    }
}