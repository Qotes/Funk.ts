import { curry, curry3, isArray, isFunction, isObject } from 'src/porter'


/**
 * @desc Set the property of an object forcely
 * @see prop
 */
export const proped = curry3((attr: string, value: any, o: object) =>
    Object.defineProperty(o, attr, { value })) as /** @interface */ {
        (attr: string): {
            <T>(value: any, o: T): T
            (value: any): <T>(o: T) => T
        }
        (attr: string, value: any): <T>(o: T) => T
        <T>(attr: string, value: any, o: T): T
    }


/**
 * @raw
 * @sig named :: b -> a -> a
 * @internal
 * @impure / actually pure
 * @warn it's used by curry, so don't curry it with curry or functions curried
 *       like `const named = proped('name')` as `proped` is curried
 * @desc Change the name of an object forcely
 *       Be care that the named object is the same object inserted
 *       It could be used to keep the trace of callstack or check identities
 *       It's useful for composed or curried functions as anonymous functions
 *       are processed before implictly named
 * @example
 *       const f1 = x => x                      // f1.name = 'f1'
 *       const f2 = f1(x => x)                  // f2.name = ''
 *       const f3 = named('f3')(f2(f1(x => x))) // f3.name = 'f3'
 */
export const named = ((value: string, o?: object) => o === undefined
    ? (oo: object) => Object.defineProperty(oo, 'name', { value })
    : Object.defineProperty(o, 'name', { value })
) as /** @interface */ {
    <T>(value: string, o: T): T
    (value: string): <T>(o: T) => T
}


/**
 * @raw
 * @sig alias :: b -> a -> a
 * @internal
 * @see named
 * @desc Produce a new object of an object with an alias
 *       The returned object is a whole new object, which differs from named
 *       It could be used to keep the trace of callstack or check identities
 * @warn it's used by curry, so don't curry it with curry or functions curried
 *       like `const named = proped('name')` as `proped` is curried
 */
export function alias (value: string): <T>(o: T) => T
export function alias <T> (value: string, o: T): T
export function alias (value: string, o?: any) {
    // TODO: check zero params
    const _alias = (oo: any) => {
        if (!isObject(oo)) throw Error(`[alias]: no proper way to give an alias for non-object ${oo}`)
        if (isFunction(oo)) return named(value)(oo.bind({}))
        return named(value)(oo)
    }

    if (arguments.length === 1) return named('alias')(_alias)
    return _alias(o)
}


/**
 * @sig prop :: a -> b -> c
 * @desc Get the property of an object
 *       The lookup types are not campable of getting a never-like property
 *       So you may give the expected type
 *       It's not so safe so we need monad here
 * @see proped
 * @todo monad: Maybe
 */
export const prop = named('prop')(curry((attr: string, obj: object) => obj[attr])) as /** @interface */ {
    <T, K extends keyof T>(attr: K, obj: T): T[K]
    <R>(attr: string): (obj: any) => R | undefined
}

/**
 * @desc I don't think object.assign has anything to do with solid
 * @sig template :: [a] -> [b] -> c
 *                  a -> [b] -> a
 */
export function template (keys: string[]): (...values: any[]) => object
export function template<T = object> (parent: T): (...values: any[]) => T
export function template (keys: string[] | object) {
    return (...values: any[]) => (isArray(keys) ? keys : Object.keys(keys)).reduce((obj, key, i) => Object.assign(obj, { [key]: values[i] }), {})
}
