/**
 * @desc there's no need to write something like describe
 *       we have to write the testcase handly to check the type lints
 * @warn don't change the structure or data of existed testcases
 */
// toString
export const failed = (f: F, ...ps: any[]) => `${f.name || f} failed with params ${ps}`

export const o = {
    name: 'Name',
    attr: 'Attr'
}

const fFixed = [
    () => {},
    (a: N) => a + 1,
    (a: N, b: N) => a + b,
    (a: N, b: N, c: N) => a + b + c,
]

export {
    fFixed as f
}

export const l = [o, '1', 2]
