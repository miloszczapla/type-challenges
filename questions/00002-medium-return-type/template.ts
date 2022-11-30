type MyReturnType<T> = T extends (...args: any) => infer A
  ? A
  : 'not a function'
