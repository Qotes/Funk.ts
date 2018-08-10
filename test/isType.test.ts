import { isArray, isBoolean, isFunction, isNumber, isObject, isString } from 'src/impl/isType'

const [l, o, f, s, s2] = [[], {}, () => {},  '', '1']
const [sl, so, sf, ss, ss2] = ['[]', '{}', '() => {}', '""', '"1"']
const IS = (_f: F, p: any, _s: string) => test(`${_s} ${_f.name}`, () => expect(_f(p)).toBe(true))
const NOT = (_f: F, p: any, _s: string) => test(`${_s} not ${_f.name}`, () => expect(_f(p)).toBe(false))

describe('isArray', () => {
    test(sl + ' is array', () => expect(isArray(l)).toBe(true))
    test(so + ' is not array', () => expect(isArray(o)).toBe(false))
    test(sf + ' is not array', () => expect(isArray(f)).toBe(false))
    test(ss + ' is not array', () => expect(isArray(s)).toBe(false))
    test(ss2 + ' is not array', () => expect(isArray(s2)).toBe(false))
})

describe('isBoolean', () => {
    IS(isBoolean, true, 'true')
    IS(isBoolean, false, 'fasle')
    NOT(isBoolean, l, sl)
    NOT(isBoolean, o, so)
    NOT(isBoolean, f, sf)
    NOT(isBoolean, s, ss)
})

describe('isFunction', () => {
    IS(isFunction, f, sf)
    NOT(isFunction, l, sl)
    NOT(isFunction, o, so)
    NOT(isFunction, s, ss)
})

describe(isNumber.name, () => {
    IS(isNumber, 0, '0')
    IS(isNumber, 1, '1')
    IS(isNumber, Infinity, 'Infinity')
    NOT(isNumber, l, sl)
    NOT(isNumber, o, so)
    NOT(isNumber, f, sf)
    NOT(isNumber, s, ss)
})

describe(isObject.name, () => {
    IS(isObject, o, so)
    IS(isObject, f, sf)
    IS(isObject, l, sl)
    NOT(isObject, 0, '0')
    NOT(isObject, 1, '1')
    NOT(isObject, s, ss)
})

describe(isString.name, () => {
    IS(isString, s, ss)
    NOT(isString, l, sl)
    NOT(isString, o, so)
    NOT(isString, f, sf)
    NOT(isString, 0, '0')
    NOT(isString, 1, '1')
})
