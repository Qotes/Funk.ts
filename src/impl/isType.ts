/**
 * @file interal type check
 * @desc use x is Type to support branches
 * @warn this is the most basic functions, don't quote other files
 */


const toString = (a: A): S => Reflect.apply(Object.prototype.toString, a, [])


/**
 * @raw
 * @internal
 * @sig isString :: a -> boolean
 */
export function isString (x: any): x is string {
    return toString(x) === '[object String]'
}


/**
 * @raw
 * @internal
 * @sig isFunction :: a -> boolean
 */
export function isFunction<T extends F<any>> (fn: any): fn is T {
    return !!fn && toString(fn) === '[object Function]'
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
 * @attention isNaN([]) === false
 *            Number([]) === 0
 *            Number([1]) === 1
 *            Number([0, 1]) === NaN
 *            Number({}) === NaN
 *            Number('') === 0
 *            Number('1') === 1
 *            Number(true) === 1
 *            Number(false) === 0
 *            typeof NaN === 'number'
 *            isNaN(NaN) === true
 *            !!(NaN == NaN) == false
 *            !!(NaN === NaN) === false
 *            !!(0 === fasle) === fasle
 *            !!(1 === true) === fasle
 */
export function isNumber (n: any): n is number {
    return toString(n) === '[object Number]'
}


/**
 * @raw
 * @internal
 * @sig isBoolean :: a -> boolean
 */
export function isBoolean (b: any): b is boolean {
    return b === true || b === false || toString(b) === '[object Boolean]'
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
