import { curry, curry3, isArray } from 'src/porter'


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
 * @desc Change the name of an object forcely
 *       It could be used to keep the trace of callstack or check identities
 * @warn it's used by curry, so don't curry it with curry or functions curried
 *       like `const named = proped('name')` as `proped` is curried
 */
export const named = ((value: string, o?: object) => o === undefined
  ? (oo: object) => Object.defineProperty(oo, 'name', { value })
  : Object.defineProperty(o, 'name', { value })
) as /** @interface */ {
    <T>(value: string, o: T): T
    (value: string): <T>(o: T) => T
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
export const _prop = curry(function prop (attr: string, obj: object) {
    return obj[attr]
}) as /** @interface */ {
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
    return (...values: any[]) => (isArray(keys) ? keys : Object.keys(keys)).reduce((obj, key, i) => Object.assign(obj, {[key]: values[i]}), {})
}
