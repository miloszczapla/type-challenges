type TupleToObject<T extends readonly (number | string)[]> = {
  [K in T[number]]: K
}
const y = ['a', 2] as const
type C = typeof y
type U = C[number]

type F = TupleToObject<typeof y>
