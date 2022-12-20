type MyOmit<T, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[Key]
}

type MyObj = { a: 'b'; b: 'b'; c: 'c' }
type MyObjKeys = keyof MyObj

type MyExclude2<Union, Keys> = Union extends Keys ? never : Union

type Y = MyExclude2<keyof MyObj, 'a' | 'b'>

type Identity<T> = T

type MyRecord<OurObject, ToExcludeUnion> = {
  [Key in MyExclude2<keyof OurObject, ToExcludeUnion>]: OurObject[Key]
}

type MR1 = MyRecord<{ foo: string; bar: number }, 'foo'>
