import { isArray, isBoolean, isFunction, isNumber, isObject, isString } from 'src/impl/isType'
import { assert } from 'src/impl/debug'
import { failed } from './util'

// function assert (cond: boolean, msg: string) {
//     if (!cond) throw Error(msg)
// }

export default function TisType () {
    const [l, o, f] = [[], {}, () => {}]
    const s = ''

    const _T = (fn: F, p: any) => assert(fn(p), failed(f, p))
    const _F = (fn: F, p: any) => assert(!fn(p), failed(f, p))

    _T(isArray, l)
    _F(isArray, o)
    _F(isArray, f)
    _F(isArray, s)

    _T(isBoolean, true)
    _T(isBoolean, false)
    _F(isBoolean, l)
    _F(isBoolean, o)
    _F(isBoolean, f)
    _F(isBoolean, s)

    _T(isFunction, f)
    _F(isFunction, l)
    _F(isFunction, o)
    _F(isFunction, s)

    _T(isNumber, 0)
    _T(isNumber, 1)
    _T(isNumber, Infinity)
    _F(isNumber, l)
    _F(isNumber, o)
    _F(isNumber, f)
    _F(isNumber, s)

    _T(isObject, o)
    _T(isObject, f)
    _T(isObject, l)
    _F(isObject, 0)
    _F(isObject, 1)
    _F(isObject, s)

    _T(isString, s)
    _F(isString, l)
    _F(isString, o)
    _F(isString, f)
    _F(isString, 0)
    _F(isString, 1)
}
