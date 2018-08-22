import { index, head, tail, last, init, map, nums, reverse, append, filter, without } from 'src/impl/array'
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
    test('map array', () => expect(map(_ => 'm')(l)[0]).toBe('m'))
    class Mappable {
        public constructor (public v: any) {}
        public map (f: F) {
            this.v = f(this.v)
            return this
        }
    }
    const m = (a: N) => a + 1
    const mappable = new Mappable(1)
    test('map mappable', () => expect(map(m)(mappable).v).toBe(2))
    const ooo = {a: 1}
    test('map object', () => expect(map(m)(ooo).a).toBe(2))
    test('map function', () => expect(map(m)(m)(0)).toBe(2))
    test('map unmappable', () => expect(map(m)(true)).toBe(true))
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
    test('reverse string', () => expect(reverse('abc')).toBe('cba'))
})

describe('append', () => {
    test('append', () => expect(append(3)(l as any)[l.length]).toBe(3))
})

describe('filter', () => {
    test('filter', () => expect(filter((a: N) => a > 1)([1, 2, 3])).toEqual([2, 3]))
})

describe('without', () => {
    test('without', () => expect(without((a: N) => a > 1)([1, 2, 3])).toEqual([1]))
})
