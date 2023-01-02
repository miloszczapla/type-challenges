type DeepReadonly<T> = {
  readonly [key in keyof T]: T[key] extends object
    ? T[key] extends Function
      ? T[key]
      : DeepReadonly<T[key]>
    : T[key]
}
// type X = {
//   d: boolean
//   e: {
//     g: {
//       h: {
//         i: true
//         j: 'string'
//       }
//       k: 'hello'
//     }
//     l: [
//       'hi',
//       {
//         m: ['hey']
//       }
//     ]
//   }
// }

// type Expected = {
//   readonly a: () => 22
//   readonly b: string
//   readonly c: {
//     readonly d: boolean
//     readonly e: {
//       readonly g: {
//         readonly h: {
//           readonly i: true
//           readonly j: 'string'
//         }
//         readonly k: 'hello'
//       }
//       readonly l: readonly [
//         'hi',
//         {
//           readonly m: readonly ['hey']
//         }
//       ]
//     }
//   }
// }

// type Todo = DeepReadonly<X> // should be same as `Expected`

// const F: Todo = {
//   d: true,
//   e: {
//     g: {
//       h: {
//         i: true,
//         j: 'string',
//       },
//       k: 'hello',
//     },
//     l: [
//       'hi',
//       {
//         m: ['hey'],
//       },
//     ],
//   },
//   // {
//   //   a: () => 22,
//   //   b: 'string',
//   //   c: {
//   //     d: false,
//   //     e: {
//   //       g: {
//   //         h: {
//   //           i: true,
//   //           j: 'string',
//   //         },
//   //         k: 'hello',
//   //       },
//   //       l: [
//   //         'hi',
//   //         {
//   //           m: ['hey'],
//   //         },
//   //       ],
//   //     },
//   //   },
// }

// F.e.l[1].m[0] = ['s']

// check in typescript if somethin is an object or an array
