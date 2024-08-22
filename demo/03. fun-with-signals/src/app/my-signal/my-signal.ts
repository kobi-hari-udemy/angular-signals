export type MySignal<T> = {
    (): T;
}

export type MyWriteableSignal<T> = MySignal<T> & {
    set: (value: T) => void;
    update: (updater: (value: T) => T) => void;
};


export function mySignal<T>(value: T): MyWriteableSignal<T> {
    const signal = () => value;
    signal.set = (newValue: T) => {
        value = newValue;
    }

    signal.update = (updater: (value: T) => T) => {
        value = updater(value);
    }

    return signal;
}

export function myComputed<T>(compute: () => T): MySignal<T> {
    return () => compute();
}