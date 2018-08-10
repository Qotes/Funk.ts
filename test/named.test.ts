import { named } from 'src/impl/named'
import { o } from './util'

describe('named', () => {
    test('named', () => expect(named('O', o).name).toBe('O'))
    test('named curried', () => expect(named('O')(o).name).toBe('O'))
    test('named anonymous function', () => expect(named('F', () => {}).name).toBe('F'))
    test('named named function', () => expect(named('F', function ff () {}).name).toBe('F'))
})