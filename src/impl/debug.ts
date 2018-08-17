import { isFunction, isString, isObject, isArray } from 'src/impl/isType'
import { checkN, IOp, ge } from './operator'

// trace

// logger


/**
 * @internal
 * @impure
 */
export function checkArgsN (f: F | ({length: N} & any), op: IOp = ge, n: number = 1) {
    const tagMap = {
        '===': 'absolutely',
        '>': 'more than',
        '<': 'less than',
        '>=': 'at least',
        '<=': 'at most'
    }
    assert(
        checkN(f.length, op, n),
        `${f.name || 'anonymous'} expects ${tagMap[op.optag] || ''} ${n} argument${n > 1 ? 's' : ''}, found ${f.length}.`
    )
}


/**
 * @internal
 * @impure
 */
export function assert (cond: boolean, msg: string): void | never {
    if (!cond) throw Error(msg)
}


/**
 * @needtest
 * @internal
 * @sig :: a -> s
 */
export function inspect (x: any): string {
    if (x && isFunction(x.inspect)) return x.inspect()

    function inspectFn (f: F) {
        return f.name ? f.name : f.toString()
    }

    function inspectTerm (t: any): string {
        if (isString(t)) return `'${t}'`
        if (isObject(t)) return `{${Object.keys(t).map(k => [k, inspect(t[k])]).map(kv => kv.join(': ')).join(', ')}}`
        return String(t)
    }

    function inspectArgs (args: L | S | O) {
      return isArray(args) ? `[${args.map(inspect).join(', ')}]` : inspectTerm(args)
    }

    return isFunction(x) ? inspectFn(x) : inspectArgs(x)
}
