
/**
 * //
 */
export function map<T, T2 = any> (fn: (a: T) => T2, l?: T[]) {
    return l ? l.map(fn) : (l2: T[]) => l2.map(fn)
}

/**
 * @example
 *   const a0 = nums(0) // []
 *   const a1 = nums(1) // [0]
 *   const a3 = nums(3) // [0, 1, 2]
 */
export function nums (len: number) {
    return [...Array(len).keys()]
}
