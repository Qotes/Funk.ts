import { compose } from 'src/impl/compose'

const hexToRgbL = compose(
    (n: N) => [1, 2, 3].map(c => n << (c * 8) >>> 24), // tslint:disable-line: no-magic-numbers
    (s: S) => Number(s.replace('#', '0x'))
)
const hexToRgbS = compose(
    (s: S) => 'rgb(' + s + ')',
    (l: N[]) => l.join(', '),
    hexToRgbL
)

describe('compose', () => {
    test('hex transfer function', () => expect(hexToRgbS('#00eb2c')).toBe('rgb(0, 235, 44)'))
})
// TODO: to throw