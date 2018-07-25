import { eq, gt, lt, ge, le } from './porter'

/**
 * @todo [x] placeholder
 *           [ ] auto replaced functions
 *       [ ] list
 *           [x] car cdr
 *           [x] init last
 *           [x] nums
 *           [x] reverse
 *           [x] map
 *           [ ] filter
 *           [x] reduce
 *       [ ] operator
 *           [x] === > < >= <=
 *           [x] prop
 *           [x] template
 *       [x] tracer
 *       [x] assert
 *           [x] isString
 *           [x] isFunction
 *           [x] isArray
 *           [x] isN
 *       [ ] curry
 *       [x] compose
 *           [ ] params type
 *       [ ] monad
 *       [ ] comonad @deprecated
 * @test object method composing
 */
export class F {
    public static _ = 'F.PLA4HOLD2'
    /** eq :: n -> n -> boolean */
    public static eq = eq
    public static gt = gt
    public static lt = lt
    public static ge = ge
    public static le = le
    public static op = { eq, gt, lt, ge, le }
    public static is = F.eq
    /** index :: [a] -> a */
    // public static index = index
    /** head :: [a] -> a */
    // public static head = head
    // public static car = head
    /** tail :: [a] -> [a] */
    // public static tail = tail
    // public static cdr = tail
    /** last :: [a] -> a */
    // public static last = last
    // public static init = init
    /** nums :: n -> [n] @return [0, 1 .. n - 1] */
    // public static nums = nums
    /** map :: (a -> b) -> [a] -> [b] */
    // public static map = map
    /** reduce :: (b -> a -> b) -> a -> b */
    // public static reduce = reduce
    /** isString :: a -> boolean */
    // public static isString = isString
    /** isFunction :: (a -> b) -> boolean */
    // public static isFunction = isFunction
    /** isArray :: [a] -> boolean */
    // public static isArray = isArray
    /** isN :: n -> boolean */
    // public static isN = isN
    /** reverse :: (s -> s) | ([a] -> [a]) */
    // public static reverse = reverse
    /** template :: [a] -> [b] -> c */
    // public static template = template
    /** prop :: a -> b -> c */
    // public static prop = prop

    /**
     * placeholder replacer, reverser for function params
     * the placeholder has to be the first or last param of the function
     * @example
     *     const f = F.gt(_, 2) // (n) => F.gt(n, 2)
     *     f(5) // true
     */
    // public static replace<R>(f: FN<R>) {
    //     return function replaced(...args: any[]) {
    //         if (F.eq(F.head(args), F._)) return (_: any) => f(_, ...F.tail(args))
    //         if (F.eq(F.last(args), F._)) return (_: any) => f(...F.init(args), _)
    //         return f(...args)
    //     }
    // }
    /**
     * @example n = 2, o = F.op.lt
     *          f = F.checkN(1)
     *          f(n) // 1 === 2  false
     *          f(o)(n) // 1 < 2 true
     *          F.checkN(n, 2) // 2 === 2 true
     */
    // public static checkN(n: number): FN<FN<boolean>>
    // public static checkN(n: number, op: number): boolean
    // public static checkN(n: number, op: valueof<typeof F.op>): FN<boolean>
    // public static checkN(n: number, op: valueof<typeof F.op> | number = F.eq) {
    //     if (arguments.length === 1) {
    //         return (mOrOp: number | valueof<typeof F.op>) => (isNaN(mOrOp as any)) ? (mOrOp as valueof<typeof F.op>)(n) : F.eq(n, mOrOp)
    //     }
    //     return isNaN(op as any) ? (op as valueof<typeof F.op>)(n) : F.eq(n, op)
    // }

    // public static checkArgsN(f: FN, n: number = 1, op: valueof<typeof F.op> = F.op.eq) {
    //     const tagMap = {
    //         '===': 'absolutely',
    //         '>': 'more than',
    //         '<': 'less than',
    //         '>=': 'at least',
    //         '<=': 'at most'
    //     }
    //     if (!F.checkN(f.length, op)(n)) throw new Error(`${f.name} expects ${tagMap[(op as FN).optag] || ''} ${n} argument${n > 1 ? 's' : ''}, found ${f.length}.`)
    // }

    /**
     * @record not nocorded in callees stack
     * @example
     *     f1 = a => a + 1
     *     f2 = a => a + '2'
     *     f3: FN<number> = a => a.length
     *     f = F.compose(f3, f1) // auto linted as FN<number>
     *     f = F.compose<ReturnType<typeof f2>>(f2, f1) // able to manully give it generic type for linting
     *     f(2) // '32'
     *     f = F.compose<void>(console.log, f)
     *     f(2) // ('32') undefined
     */
    // public static compose<R>(fn: FN<R>, ...fns: FN[]): FN<R>
    // public static compose<R>(...fns: FN[]) {
    //     F.checkArgsN({ length: fns.length, name: 'compose' } as any, 1, F.op.ge)

    //     return function __compose(...args) {
    //         const fnsR = F.reverse(fns);
    //         (__compose as FN).callees = fnsR.map(fn => fn.name)

    //         // return F.reduce((__args: R[], fn: FN) => [fn.call(null, ...__args)])(fnsR, args)[0]
    //         return fnsR.reduce((__args, fn) => [fn.call(null, ...__args)], args)[0]
    //     } as FN<R>
    // }
}
