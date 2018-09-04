import { cons, car, cdr } from 'src/impl/list'

describe('cons', () => {
    test('car(cons(1, 2)) = 1',  () => expect(car(cons(1, 2 ))).toBe(1))
    test('cdr(cons(1, 2)) = 2',  () => expect(cdr(cons(1, 2 ))).toBe(2))
    test('car(cdr(cons(0, cons(1, 2))) = 1', () => expect(car(cdr(cons(0, cons(1, 2))))).toBe(1))
})
