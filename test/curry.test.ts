import { curry, curry3 } from 'src/impl/curry'
// import { f } from './util'

const f = (a: N, b: N, c: N) => a + b + c

/**
 * there's no need to test curry2 curry1 curry0 as they are called in curry3
 */
describe('curry0123', () => {
    test('curry3-(_, _, _)', () => expect(curry3(f)(1, 2, 3)).toBe(f(1, 2, 3)))
    test('curry3-(_, _)(_)', () => expect(curry3(f)(1, 2)(3)).toBe(f(1, 2, 3)))
    test('curry3-(_)(_, _)', () => expect(curry3(f)(1)(2, 3)).toBe(f(1, 2, 3)))
    test('curry3-(_)(_)(_)', () => expect(curry3(f)(1)(2)(3)).toBe(f(1, 2, 3)))
})

describe('common curry', () => {
    test('curry-(_, _, _)', () => expect(curry(f)(1, 2, 3)).toBe(f(1, 2, 3)))
    test('curry-(_, _)(_)', () => expect(curry(f)(1, 2)(3)).toBe(f(1, 2, 3)))
    test('curry-(_)(_, _)', () => expect(curry(f)(1)(2, 3)).toBe(f(1, 2, 3)))
    test('curry-(_)(_)(_)', () => expect(curry(f)(1)(2)(3)).toBe(f(1, 2, 3)))
})
