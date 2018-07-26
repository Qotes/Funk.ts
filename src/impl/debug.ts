
// trace

// logger

// entag

// export function checkArgsN(f: FN, n: number = 1, op: valueof<typeof F.op> = F.op.eq) {
//     const tagMap = {
//         '===': 'absolutely',
//         '>': 'more than',
//         '<': 'less than',
//         '>=': 'at least',
//         '<=': 'at most'
//     }
//     if (!F.checkN(f.length, op)(n)) throw new Error(`${f.name} expects ${tagMap[(op as FN).optag] || ''} ${n} argument${n > 1 ? 's' : ''}, found ${f.length}.`)
// }