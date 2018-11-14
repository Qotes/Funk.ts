import { cons, car, cdr, list } from 'src/impl/list'

describe('cons', () => {
    test('car(cons(1, 2)) = 1', () => expect(car(cons(1, 2 ))).toBe(1))
    test('cdr(cons(1, 2)) = 2', () => expect(cdr(cons(1, 2 ))).toBe(2))
    test('car(cdr(cons(0, cons(1, 2))) = 1', () => expect(car(cdr(cons(0, cons(1, 2))))).toBe(1))
})

describe('list', () => {
    test('car(list(1) = 1', () => expect(car(list(1))).toBe(1))
    test('cdr(list(1) = null', () => expect(cdr(list(1))).toBeNull())
    test('car(cdr(list(1, 2))) = 2', () => expect(car(cdr(list(1, 2)))).toBe(2))
    test('cdr(cdr(list(1, 2))) = null', () => expect(cdr(cdr(list(1, 2)))).toBeNull())
    test('car(cdr(list(1))) should throw', () => expect(() => car(cdr(list(1)))).toThrowError(TypeError))
})
