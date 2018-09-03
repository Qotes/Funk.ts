import { curry, compose } from 'src/porter'

interface IMappable<T> {
    __value__: T | F<T>
    map <R> (f: F1<T, R>): IMappable<R> | IO<R>
}
export type Mappable <T = any> = IMappable<T>


/**
 * @internal
 * fmap :: Functor f => (a -> b) -> f a -> f b
 */
export const fmap = curry(<T, R>(f: F1<T, R>, mappable: IMappable<T>) => mappable.map(f)) as /** @interface */ {
    <T, R>(f: F1<T, R>): (mappable: IMappable<T>) => IMappable<R>
    <T, R>(f: F1<T, R>, mappable: IMappable<T>): IMappable<R>
}


/**
 * @monad
 */
export class Monad {
    public constructor () {
    }

    public static bind (f: F) {
        //
    }
}

// TODO: resolvable


/**
 * @monad
 */
export class IO<T = any> implements IMappable<T> {
    public constructor (
        public __value__: F0<T> // tslint:disable-line
    ) {
    }

    public static of <T> (v: T) {
        return new IO(() => v)
    }

    public map <R> (f: F1<T, R>) {
        return new IO(compose(f, this.__value__))
    }
}
