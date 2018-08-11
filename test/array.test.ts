import { index, head, tail, last, init, map, nums, reverse, append } from 'src/impl/array'
import { l } from './util'

describe('index', () => {
    test('index 0', () => expect(index(0)(l)).toBe(l[0]))
    test('index 1', () => expect(index(1)(l)).toBe(l[1]))
})

describe('head', () => {
    test('head', () => expect(head(l)).toBe(l[0]))
})

describe('tail', () => {
    test('tail', () => expect(tail(l)[0]).toBe(l[1]))
    test('tail', () => expect(tail(l)[1]).toBe(l[2]))
})

describe('last', () => {
    test('last', () => expect(last(l)).toBe(l[2]))
})

describe('init', () => {
    test('init', () => expect(init(l)[0]).toBe(l[0]))
    test('init', () => expect(init(l).length).toBe(l.length - 1))
})

describe('map', () => {
    test('map', () => expect(map(_ => 'm')(l)[0]).toBe('m'))
})

describe('nums', () => {
    test('nums', () => expect(nums(3)[0]).toBe(0))
    test('nums', () => expect(nums(3)[2]).toBe(2))
    test('nums', () => expect(nums(3).length).toBe(3))
})

describe('reverse', () => {
    test('reverse', () => expect(reverse(l)[0]).toBe(l[l.length - 1]))
    test('reverse', () => expect(reverse(l)[l.length - 1]).toBe(l[0]))
    test('reverse', () => expect(reverse(l).length).toBe(l.length))
})

describe('append', () => {
    test('append', () => expect(append(3)(l as any)[l.length]).toBe(3))
})
