# Guide

## funtion formats

### not curried function are in "defun"

```ts
export function f (...t) {
    // tricks ....
}
```

### curried/composed function are exported as const

```ts
import { curry } from 'src/porter'
export const f = curry(function f (...t) {
    // tricks ...
})
```

## comments

Write comments for developers in `impl/` which focus on signatures, warnings and testcases.

Write comments for users in `funk.ts` as user interface which cares more about description and examples.

## TODO

arity

refactor with named and proped

logger
