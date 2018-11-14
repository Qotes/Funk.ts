import { isString, isFunction, isObject } from 'src/impl/isType'
import { curry, curry3 } from 'src/impl/curry'
import { named } from 'src/impl/named'


/**
 * @file object read/write
 * @desc the read should silently return undefined
 *       but write properties should raise TypeError on non-object
 */

/**
 * @desc Set the property of an object forcely
 * @see prop
 */
export const proped = curry3((attr: PropertyKey, value: any, o: object) =>
    Object.defineProperty(o, attr, { value })) as /** @interface */ {
        (attr: PropertyKey): {
            <T>(value: any, o: T): T
            (value: any): <T>(o: T) => T
        }
        (attr: PropertyKey, value: any): <T>(o: T) => T
        <T>(attr: PropertyKey, value: any, o: T): T
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
 * @see proped
 * @example
 *     const o = {a: 1, b: '2'}
 *     // not curried will be looked up
 *     prop('a', o) // number
 *     prop('c', o) // error
 *     // curried
 *     const propa = prop<number>('a')
 *     propa(o)
 */
export const prop = named('prop')(curry((attr: string, obj: object) => obj[attr])) as /** @interface */ {
    <T, K extends keyof T>(attr: K, obj: T): T[K]
    <R>(attr: string): (obj: any) => R | undefined
}


/**
 * @desc Reflect.set will internally raise a TypeError if it returns false
 * @sig props :: a -> s -> b
 * @see prop
 */
export const props = named('props')(curry((attrs: S[], obj: O) => attrs.reduce((o: O, s: string) => Reflect.has(obj, s) ? Reflect.set(o, s, obj[s]) && o : o, {}))) as /** @interface */ {
    <T>(attr: S[], obj: T): Partial<T>
    (attr: S[]): <T>(obj: T) => Partial<T> | never
}

/**
 * @desc I don't think object.assign has anything to do with solid
 * @deprecated it's too implicit
 * @desc literal object template
 *       It just supports a light way to compose objects, nothing more.
 *       But it may help when you don't want to implement an interface with a class.
 * @example
 *    const person = template(['name', 'hobbies'])
 *    const john = person('John', ['cycling', 'reading', 'coding'])
 *    // it turns out {
 *    //   name: 'John',
 *    //   hobbies: ['cycling', 'reading', 'coding']
 *    // }
 *    const johnJunior = template(john)('John.Jr', ['anime'])
 *    // though you can use an object as template, but it's unsafe and deprecated
 */
export function template (...keys: string[]): (...values: any[]) => object
export function template <T extends object> (parent: T): (...values: any[]) => T
export function template (...keys: L<S | O>) {
    return (...values: any[]) => keys
        .reduce((r: L, key: S | O) => isString(key) ? r.concat(key) : r.concat(Object.keys(key)), [])
        .reduce((o: O, key: S, i) => Object.assign(o, { [key]: values[i] }), {})
}
