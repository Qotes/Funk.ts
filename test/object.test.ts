import { prop, props, proped, alias, template } from 'src/impl/object'
import { o } from './util'

describe('prop', () => {
    test('prop attr', () => expect(prop('attr', o)).toBe(o.attr))
    test('prop attr curried', () => expect(prop('attr')(o)).toBe(o.attr))
})

describe('props', () => {
    test('props attr', () => expect(props(['a', 'b', 'd'], {a: 2}).a).toBe(2))
    test('props attr curried', () => expect(props(['a', 'b', 'd'])({a: 2}).a).toBe(2))
    test('props attr curried', () => expect(props(['b', 'd'])({a: 2}).a).toBe(undefined))
})

describe('proped', () => {
    test('proped', () => expect(proped('attr')('rttA')({...o}).attr).toBe('rttA'))
})

describe('alias', () => {
    const f = () => {}
    test('aliased new function name', () => expect(alias('f2')(f).name).toBe('f2'))
    test('aliased old function name', () => expect((() => alias('f2')(f) && f)().name).toBe('f'))
    test('alias full', () => expect(alias('f2', () => {}).name).toBe('f2'))
    test('alias full', () => expect(alias('f2', {name: ''}).name).toBe('f2'))
    test('alias error', () => expect(() => alias('f2', true)).toThrow())
})

describe('template', () => {
    test('template with attrs', () => expect((template('attr2')('Attr2') as any).attr2).toBe('Attr2'))
    test('template with object', () => expect((template(o)('Name2')).name).toBe('Name2'))
})
