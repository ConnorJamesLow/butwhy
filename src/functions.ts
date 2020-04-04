export const decouple = <T, K extends keyof T>(anything: T, ...props: K[]): { [p in K]?: T[K] } => props.reduce((acc, p) => {
    let t = anything[p];
    if (t instanceof Function) {
        t = t.bind(anything);
    }
    return {
        ...acc,
        [p]: t
    };
}, {});
