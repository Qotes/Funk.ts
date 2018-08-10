import { prop } from 'src/impl/object'
import { o } from './util'

describe('prop', () => {
    test('prop attr', () => expect(prop('attr', o)).toBe(o.attr))
    test('prop attr curried', () => expect(prop('attr')(o)).toBe(o.attr))
})
