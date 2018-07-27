// operator
import { eq, gt, lt, ge, le } from './porter'
// compose
import { compose } from 'src/porter'
// curry
// import { curry } from 'src/porter'
// isType
import { isArray, isFunction, isNumber, isString } from './porter'
// array
import { head, tail, init, index, map, nums, last, reverse } from './porter'
// object
import { named, prop, template } from './porter'
// placepholer
import { _, replace } from './porter'


export class F {
    public static _ = _
    /**
     * @sig eq :: a -> a -> boolean
     * @alias is
     */
    public static eq = eq
    /** @alias eq */
    public static is = eq

    /**
     * @sig gt :: a -> a -> boolean
     */
    public static gt = gt

    /**
     * @sig lt :: a -> a -> boolean
     */
    public static lt = lt

    /**
     * @sig ge :: a -> a -> boolean
     */
    public static ge = ge

    /**
     * @sig le :: a -> a -> boolean
     */
    public static le = le

    public static op = { eq, gt, lt, ge, le }

    /**
     * @sig index :: [a] -> a
     */
    public static index = index

    /**
     * @sig head :: [a] -> a
     * @alias car
     */
    public static head = head
    /** @alias head */
    public static car = head

    /**
     * @sig tail :: [a] -> [a]
     * @alias cdr
     */
    public static tail = tail
    /** @alias tail */
    public static cdr = tail

    /**
     * @sig last :: [a] -> a
     */
    public static last = last

    /**
     * @sig init :: [a] -> [a]
     */
    public static init = init

    /**
     * @sig nums :: n -> [n]
     * @example
     *   const a0 = nums(0) // []
     *   const a1 = nums(1) // [0]
     *   const a3 = nums(3) // [0, 1, 2]
     */
    public static nums = nums

    /**
     * @sig map :: (a -> b) -> [a] -> [b]
     */
    public static map = map

    /**
     * @sig reverse :: (s -> s) | ([a] -> [a])
     */
    public static reverse = reverse

    /** reduce :: (b -> a -> b) -> a -> b */
    // public static reduce = reduce

    /**
     * @sig isString :: a -> boolean
     * @alias isS
     */
    public static isString = isString
    /** @alias isString */
    public static isS = isString

    /**
     * @sig isFunction :: (a -> b) -> boolean
     * @alias isFN
     */
    public static isFunction = isFunction
    /** @alias isFunction */
    public static isFN = isFunction

    /**
     * @sig isArray :: [a] -> boolean
     * @alias isL
     */
    public static isArray = isArray
    /** @alias isArray */
    public static isL = isArray

    /**
     * @sig isN :: n -> boolean
     * @alias isN
     */
    public static isNumber = isNumber
    /** @alias isNumber */
    public static isN = isNumber


    /**
     * @desc Forcely set the name of an object
     * @impure
     * @deprecated You may don't need it
     * @example
     *    const namedJunky = named('junky')
     *    const fnJunky = namedJunky((a) => a + 1)
     *    const arrJunky = namedJunky([1, 2, 3])
     */
    public static named = named


    /**
     * @desc literal object template
     *       It just supports a light way to compose objects, nothing more.
     *       But it may help when you don't want to implement an interface with a class.
     * @example
     *    const person = template(['name', 'hobbies'])
     *    const john = person('John', ['cycling', 'reading', 'coding'])
     *    // it turns out {
     *    //   name: 'John',
     *    //   hobbies: ['cycling', 'reading', 'coding']
     *    // }
     *    const johnJunior = template(john)('John.Jr', ['anime'])
     *    // though you can use an object as template, but it's unsafe and deprecated
     */
    public static template = template


    /**
     * @example
     *     const o = {a: 1, b: '2'}
     *     // not curried will be looked up
     *     prop('a', o) // number
     *     prop('c', o) // error
     *     // curried
     *     const propa = prop<number>('a')
     *     propa(o)
     */
    public static prop = prop


    /**
     * placeholder replacer, reverser for function params
     * the placeholder has to be the first or last param of the function
     * @example
     *     const f = F.gt(_, 2) // (n) => F.gt(n, 2)
     *     f(5) // true
     */
    public static replace = replace


    /**
     * @example n = 2, o = F.op.lt
     *          f = F.checkN(1)
     *          f(n) // 1 === 2  false
     *          f(o)(n) // 1 < 2 true
     *          F.checkN(n, 2) // 2 === 2 true
     */
    // public static checkN = checkN

    // public static checkArgsN = checkArgsN


    /**
     * @desc Composes a function runs from right to left and keep the callees
     * @example
     *   const f1 = (a: number) => a + 1
     *   const f2 = (a: number) => a + '2'
     *   const f3 = (a: string) => parseInt(a, 10) - 2
     *   const fc1 = compose(f2, f1) // number -> string
     *   const fc2 = compose(f3, fc1) // number -> number
     *   const fc3 = compose(f3, f2, f1) // number -> number
     *   // actually fc3 is same to fc2
     */
    public static compose = compose
}
