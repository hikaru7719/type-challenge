type If<T extends boolean, U, K> = T extends true ? U : K;
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
