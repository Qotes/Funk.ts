import { curry } from 'src/porter'

/**
 * @desc Change the name of an object forcely
 * Might be used to keep the clean trace of callstack after composed or curried
 */
export const named = <T>(o: T, value: string): T => Object.defineProperty(o, 'name', { value })


/**
 * @desc Set the property of an object forcely
 * @see prop
 * @todo
 */
export const proped = () => {}


/**
 * @sig prop :: a -> b -> c
 * @desc Get the property of an object
 *       The lookup types are not campable of getting a never-like property
 *       So you may give the expected type
 *       It's not so safe so we need monad here
 * @see proped
 * @todo monad: Maybe
 */
export const _prop = curry(function prop (attr: string, obj: object) {
    return obj[attr]
}) as /** @interface */ {
    <T, K extends keyof T>(attr: K, obj: T): T[K]
    <R>(attr: string): (obj: any) => R | undefined
}


export function template (...keys: string[]) {
    return (...values: any[]) => keys.reduce((obj, key, i) => Object.assign(obj, {[key]: values[i]}), {})
}
