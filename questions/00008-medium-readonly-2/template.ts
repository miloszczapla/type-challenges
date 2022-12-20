type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
} & {
  [key in Exclude<keyof T, K>]: T[key]
}
