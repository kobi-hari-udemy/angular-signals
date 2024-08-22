export type MySignal<T> = () => T;

export function mySignal<T>(value: T): MySignal<T> {
    return () => value;
}