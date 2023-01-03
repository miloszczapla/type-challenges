type TupleToUnion<T extends Array<any>> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never
//   ? A | G
//   :

type ab = TupleToUnion<[string, '222', 2]>
type cf = TupleToUnion<[string]>

type ag = TupleToUnion<['a']>
