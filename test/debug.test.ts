import { assert, checkArgsN, inspect } from 'src/impl/debug'
import { eq, ge } from 'src/impl/operator'
import { f } from './util'

describe('assert',  () => {
    test('proper', () => expect(assert(true, 'Not to throw')).toBeUndefined())
    test('wrong', () => expect(() => assert(false, 'To throw')).toThrow())
})

describe('check arguments length', () => {
    test('proper length 0', () => expect(checkArgsN(f[0], eq, 0)).toBeUndefined())
    test('proper length 1', () => expect(checkArgsN(f[1], eq, 1)).toBeUndefined())
    test('wrong length', () => expect(() => checkArgsN(f[0], ge, 1)).toThrow())
})

describe('inspect', () => {
    test('inspect x.inspect', () => expect(inspect({inspect () {return 1}})).toBe(1))
    test('inspect function', () => expect(inspect(function name () {})).toBe('name'))
    test('inspect anonymous', () => expect(inspect(() => {})).toBe('function () {}'))
    test('inspect args', () => expect(inspect([])).toBe('[]'))
    test('inspect args', () => expect(inspect({})).toBe('{}'))
    test('inspect args', () => expect(inspect(true)).toBe('true'))
    test('inspect args', () => expect(inspect('')).toBe(`''`))
})
