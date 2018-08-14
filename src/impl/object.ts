import { isString, isFunction, isObject } from 'src/impl/isType'
import { curry, curry3 } from 'src/impl/curry'
import { named } from 'src/impl/named'


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
 * @sig alias :: b -> a -> a
 * @internal
 * @see named
 * @desc Produce a new object of an object with an alias
 *       The returned object is a whole new object, which differs from named
 *       It could be used to keep the trace of callstack or check identities
 */
export function alias (value: string): <T>(o: T) => T
export function alias <T> (value: string, o: T): T
export function alias (value: string, o?: any) {
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
 * @deprecated it's too implicit
 * @sig template :: [s|o] -> [a] -> c
 */
export function template (...keys: string[]): (...values: any[]) => object
export function template <T extends object> (parent: T): (...values: any[]) => T
export function template (...keys: L<S | O>) {
    return (...values: any[]) => keys
        .reduce((r: L, key: S | O) => isString(key) ? r.concat(key) : r.concat(Object.keys(key)), [])
        .reduce((o: O, key: S, i) => Object.assign(o, { [key]: values[i] }), {})
}
