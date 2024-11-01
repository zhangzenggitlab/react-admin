/** 判断函数是否是异步函数 */
export function isAsyncFunction(func: any) {
  return func[Symbol.toStringTag] === 'AsyncFunction'
}
