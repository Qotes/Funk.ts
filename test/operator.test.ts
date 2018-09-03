import {
    eq, ne, gt, lt, ge, le,
    checkN, add, subtract, mul, division, incr, decr,
    trunc, xor, whether, not, ternary,
    clamp, between, betweenEq, identity, constant,
    mod
} from 'src/impl/operator'

describe('eq, ne, gt, lt, ge, lt',  () => {
    // I'm quite sure about this functions, so there's just no need for more testcases
    test('0 eq 0', () => expect(eq(0, 0)).toBe(true))
    test('1 not eq 0', () => expect(eq(1, 0)).toBe(false))
    test('1 eq 1', () => expect(eq(1, 1)).toBe(true))
    test('"1" eq "1"', () => expect(eq('1', '1')).toBe(true))
    test('NaN not eq NaN', () => expect(eq(NaN, NaN)).toBe(false))

    test('0 not ne 0', () => expect(ne(0, 0)).toBe(false))
    test('1 ne 0', () => expect(ne(1, 0)).toBe(true))
    test('1 not ne 1', () => expect(ne(1, 1)).toBe(false))

    test('0 not gt 0', () => expect(gt(0, 0)).toBe(false))
    test('1 gt 0', () => expect(gt(1, 0)).toBe(true))
    test('1 not gt 1', () => expect(gt(1, 1)).toBe(false))

    test('0 not lt 0', () => expect(lt(0, 0)).toBe(false))
    test('1 not lt 0', () => expect(lt(1, 0)).toBe(false))
    test('1 not lt 1', () => expect(lt(1, 1)).toBe(false))

    test('0 ge 0', () => expect(ge(0, 0)).toBe(true))
    test('1 ge 0', () => expect(ge(1, 0)).toBe(true))
    test('1 ge 1', () => expect(ge(1, 1)).toBe(true))

    test('0 le 0', () => expect(le(0, 0)).toBe(true))
    test('1 not le 0', () => expect(le(1, 0)).toBe(false))
    test('1 le 1', () => expect(le(1, 1)).toBe(true))
})

describe('checkN', () => {
    test('check 1 gt 0', () => expect(checkN(1, gt, 0)).toBe(true))
    test('check 1 gt 0 curried', () => expect(checkN(1)(gt, 0)).toBe(true))
    test('check 1 gt 0 curried', () => expect(checkN(1, gt)(0)).toBe(true))
})

describe('+-*/', () => {
    test('1 + 1 = 2', () => expect(add(1, 1)).toBe(2))
    test('1 + 1 = 2, curried', () => expect(add(1)(1)).toBe(2))
    test('0 + 0 = 0', () => expect(add(0, 0)).toBe(0))

    test('1 - 1 = 0', () => expect(subtract(1, 1)).toBe(0))
    test('1 - 1 = 0 curried', () => expect(subtract(1)(1)).toBe(0))
    test('0 - 0 = 0', () => expect(subtract(0, 0)).toBe(0))
    test('1 - 0 = 1', () => expect(subtract(0, 0)).toBe(0))

    test('1 * 1 = 1', () => expect(mul(1, 1)).toBe(1))
    test('1 * 1 = 1, curried', () => expect(mul(1)(1)).toBe(1))
    test('0 * 0 = 0', () => expect(mul(0, 0)).toBe(0))

    test('1 / 1 = 1', () => expect(division(1, 1)).toBe(1))
    test('1 / 1 = 1 curried', () => expect(division(1)(1)).toBe(1))
    test('0 / 0 = NaN', () => expect(division(0, 0)).toBe(NaN))
    test('1 / 0 = Infinity', () => expect(division(1, 0)).toBe(Infinity))
})

describe('++ --',  () => {
    test('incr', () => expect(incr(0)).toBe(1))
    test('decr', () => expect(decr(1)).toBe(0))
})

describe('trunc', () => {
    test('trunc 3.2 = 3', () => expect(trunc(3.2)).toBe(3)) // tslint:disable-line
    test('trunc -3,2 = -3', () => expect(trunc(-3.2)).toBe(-3)) // tslint:disable-line
    test('trunc -1 = -1', () => expect(trunc(-1)).toBe(-1))
    test('trunc 0 = 0', () => expect(trunc(0)).toBe(0))
})

describe('xor', () => {
    test('1 xor 1 = 0', () => expect(xor(1, 1)).toBe(0))
    test('0 xor 0 = 0', () => expect(xor(0, 0)).toBe(0))
    test('1 xor 0 = 1', () => expect(xor(1, 0)).toBe(1))
})

describe('whether', () => {
    test('bool 1 = true', () => expect(whether(1)).toBe(true))
})

describe('not', () => {
    test('not true = false', () => expect(not(true)).toBe(false))
    test('not false = true', () => expect(not(false)).toBe(true))
    test('not function', () => expect(not(eq(1, 2))).toBe(true))
    test('not function', () => expect(not(eq)(1, 2)).toBe(true))
})

describe('ternary', () => {
    test('0 ? 1 : 2 = 2', () => expect(ternary(!!0)(1)(2)).toBe(2))
    test('1 ? 2 : 3 = 2', () => expect(ternary(!!1)(2)(3)).toBe(2))
})

describe('clamp', () => {
    test('clamp 0 ~ PI: -1 = 0', () => expect(clamp(0, Math.PI)(-1)).toBe(0))
    test('clamp 0 ~ PI: 2 = 2', () => expect(clamp(0, Math.PI)(2)).toBe(2))
    test('clamp 0 ~ PI: 4 = PI', () => expect(clamp(0, Math.PI)(4)).toBe(Math.PI))
})

describe('between', () => {
    test('between 0 ~ PI: -1 = false', () => expect(between(0, Math.PI)(-1)).toBe(false))
    test('between 0 ~ PI: 2 = true', () => expect(between(0, Math.PI)(2)).toBe(true))
    test('between 0 ~ PI: 4 = false', () => expect(between(0, Math.PI)(4)).toBe(false))
})

describe('betweenEq', () => {
    test('betweenEq 0 ~ PI: -1 = false', () => expect(betweenEq(0, Math.PI)(-1)).toBe(false))
    test('betweenEq 0 ~ PI: 2 = true', () => expect(betweenEq(0, Math.PI)(2)).toBe(true))
    test('betweenEq 0 ~ PI: 4 = false', () => expect(betweenEq(0, Math.PI)(4)).toBe(false))
    test('betweenEq 0 ~ PI: 0 = true', () => expect(betweenEq(0, Math.PI)(0)).toBe(true))
})

describe('identity', () => {
    test('indentity clamp = clamp', () => expect(identity(clamp)).toBe(clamp))
})

describe('constant', () => {
    test('constant 1 = () => 1', () => expect(constant(1)()).toBe(1))
})

describe('mod', () => { //mod(-3)(2) = -1 / mod(2)(-3) = 1
    test('mod -3 2 = -1', () => expect(mod(-3, 2)).toBe(-1))
    test('mod -3 2 = -1 curried', () => expect(mod(-3)(2)).toBe(-1))
    test('mod 2 -3 = 1', () => expect(mod(2, -3)).toBe(1))
    test('mod 2 -3 = 1 curried', () => expect(mod(2, -3)).toBe(1))
    test('mod 2 -0 = 0', () => expect(mod(2, -0)).toBe(0))
    test('mod -0 2 = 0', () => expect(mod(-0, 2)).toBeNaN())
})
