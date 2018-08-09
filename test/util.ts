/**
 * @desc there's no need to write something like describe
 *       we have to write the testcase handly to check the type lints
 */
// toString
export const failed = (f: F, ...ps: any[]) => `${f.name || f} failed with params ${ps}`
