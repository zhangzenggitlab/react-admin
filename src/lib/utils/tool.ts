function isAsyncFunction(func: any) {
  return func[Symbol.toStringTag] === 'AsyncFunction'
}
