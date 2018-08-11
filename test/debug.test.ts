import { assert, checkArgsN } from 'src/impl/debug'
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
