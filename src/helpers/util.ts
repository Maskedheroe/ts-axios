const toString = Object.prototype.toString

// 如何判断是否是一个日期对象
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
// 如何判断是否是一个对象
// 学会使用类型谓词保护
// 这是一个判断函数，当判断成功时，后续代码并不会知道val是object，所以很适合用谓词保护
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
