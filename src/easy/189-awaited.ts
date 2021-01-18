{
  type Awaited<T> = T extends Promise<infer U> ? U : never;
  type test = Awaited<Promise<string>>;
}
