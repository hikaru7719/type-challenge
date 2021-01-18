type MyExclude<T, U extends T> = T extends U ? never : T;
type test = MyExclude<string | number, number>;
