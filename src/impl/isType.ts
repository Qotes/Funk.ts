/**
 * @file interal type check
 * @desc use x is Type to support branches
 * @warn this is the most basic functions, don't quote other files
 */


const toString = Object.prototype.toString


/**
 * @raw
 * @internal
 * @sig isString :: a -> boolean
 */
export function isString (x: any): x is string {
    return toString.call(x) === '[object String]'
}


/**
 * @raw
 * @internal
 * @sig isFunction :: a -> boolean
 */
export function isFunction<T extends F<any>> (fn: any): fn is T {
    return fn && toString.call(fn) === '[object Function]'
}


/**
 * @raw
 * @internal
 * @sig isArray :: a -> boolean
 */
export function isArray (array: any): array is any[] {
    return Array.isArray(array)
}


/**
 * @raw
 * @internal
 * @sig isNumber :: a -> boolean
 */
export function isNumber (n: any): n is number {
    return !isNaN(n)
}


/**
 * @raw
 * @internal
 * @sig isBoolean :: a -> boolean
 */
export function isBoolean (b: any): b is boolean {
    return b === true || b === false || toString.call(b) === '[object Boolean]'
}


/**
 * @raw
 * @internal
 * @from underscore.js v1.9.1
 * @sig isObject :: a -> boolean
 */
export function isObject (o: any): o is object {
    const t = typeof o
    return t === 'function' || t === 'object' && !!o
}
