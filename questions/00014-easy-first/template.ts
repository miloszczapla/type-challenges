// type First<T extends any[]> = T extends [infer FirstType, ...any]
//   ? FirstType
//   : never

type First<T extends any[]> = 0 extends T['length'] ? never : T[0]
