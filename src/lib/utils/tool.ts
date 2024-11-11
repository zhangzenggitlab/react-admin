/** 判断函数是否是异步函数 */
export function isAsyncFunction(func: any) {
  return func[Symbol.toStringTag] === 'AsyncFunction'
}

/**
 * 枚举转为 label->value 类型
 * @param enumData
 */
export function enumToOptions(enumData: Record<string, any>): OptionsValueType[] {
  const options: OptionsValueType[] = []

  for (const option in enumData) {
    options.push({
      label: option,
      value: enumData[option],
    })
  }

  return options
}


/**
 * 日期格式化
 * @param dateStr
 * @param format
 */
export const formatDate = (dateStr: number | Date, format: string = 'YYYY-MM-dd hh:mm:ss') => {
  // 10位数时间戳需要转为13位
  if (typeof dateStr === 'number' && dateStr.toString().length === 10){
    dateStr = dateStr * 1000
  }

  const date = new Date(dateStr)

  const map:Record<string, any> = {
    Y: date.getFullYear(), // 月份
    M: date.getMonth() + 1, // 月份
    d: date.getDate(), // 日
    h: date.getHours(), // 小时
    m: date.getMinutes(), // 分钟
    s: date.getSeconds(), // 秒
    q: Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  }

  format = format.replace(/([YMdhmsqS])+/g, (all, t) => {
    let v = map[t]
    if (v !== undefined) {
      if (all.length > 1) {
        v = '0' + v
        v = v.substring(v.length - all.length)
      }
      return v
    } else if (t === 'y') {
      return (date.getFullYear() + '').substring(4 - all.length)
    }
    return all
  })
  return format
}
