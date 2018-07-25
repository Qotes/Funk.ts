export function isString (x: any): x is string {
    return Object.prototype.toString.call(x) === '[object String]'
}

export function isFunction<T extends FN<any>> (fn: any): fn is T {
    return fn && {}.toString.call(fn) === '[object Function]'
}

export function isArray (array: any): array is any[] {
    return Array.isArray(array)
}

export function isNumber (n: any): n is number {
    return !isNaN(n)
}
