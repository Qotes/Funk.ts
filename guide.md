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
// or as named arrow function
export const f2 = named('f2')((...t2) => /* trick */ )
```

### name

Could the function be written in a single line, I advise you use named to decorate a anonymous arrow function.

In other circumstances, normal named functions would be better.

As if you are sure about the function curried or composed, the call stack of the anonymous functions are not so vital as long as you named the result function.

### length of arguments

Function with more than 3 arguments are all __deprecated__. Though beside supported `F1`, `F2`, `F3` for unary, binary, ternary functions, there is a common `F` in `types.d.ts` for all other functions, remember that it's __deprecated__.

## comments

Write comments for developers in `impl/` which focus on signatures, warnings and testcases.

Write comments for users in `funk.ts` as user interface which cares more about description and examples.

## internal

Internal functions marked `@raw` are __forbidden__ to import other functions.

Even not marked as raw, internal functions may only import functions that's quite focus and persistent. e.g. you may import `curry` because whatever we do to it, it just do what it's suppoed to do, but use proped is deprecated as the param orders might be changed in future.

## generics

I sincerely do believe that using more than 3 params is a bad practice. So I'm not going to write generic overloads for functions more than 3 params, they will just go as rests. I even considered to forcely accept not more than 3 params for every functions of this library, but gaved up as somehow I think it's not a library but looks like a weird dialect of Typescript.

## TODO

NOTE: There's no need to hurry to implement some of the methods, focus more on reusable tools than common helpers.d

params number check

arity

refactor with named and proped

logger

__TEST!!!__
