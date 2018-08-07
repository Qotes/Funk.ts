import { checkN } from 'src/porter'
import { IOp } from './operator'

// trace

// logger


/**
 * @internal
 * @impure
 */
export function checkArgsN (f: F, n: number = 1, op: IOp) {
    const tagMap = {
        '===': 'absolutely',
        '>': 'more than',
        '<': 'less than',
        '>=': 'at least',
        '<=': 'at most'
    }
    assert(
        checkN(f.length, op, n),
        `${f.name} expects ${tagMap[op.optag] || ''} ${n} argument${n > 1 ? 's' : ''}, found ${f.length}.`
    )
}


/**
 * @internal
 * @impure
 */
export function assert (cond: boolean, msg: string) {
    if (!cond) throw Error(msg)
}
