/**
 * @desc Change the name of an object forcely
 * Might be used to keep the clean trace of callstack after composed or curried
 */
export const named = (o: object, value: string) => Object.defineProperty(o, 'name', { value })


/**
 * @desc Set the property of an object forcely
 * @see prop
 * @todo
 */
export const proped = () => {}


/**
 * @desc Get the property of an object forcely
 * @see proped
 * @todo
 */
export const prop = () => {}


export function template (...keys: string[]) {
    return (...values: any[]) => keys.reduce((obj, key, i) => Object.assign(obj, {[key]: values[i]}), {})
}
