import React from 'react'

type ConfigType = {
  /** 自动删除假值 */
  deleteNull?: boolean
}

export const useHttp = <T extends (...args: any) => Promise<any>>(
  request: T,
  defaultData: Partial<Awaited<ReturnType<T>>>,
  defaultLoading: boolean = false,
  config?: ConfigType,
) => {
  const [data, setData] = React.useState<typeof defaultData>(defaultData)
  const [loading, setLoading] = React.useState(defaultLoading)
  const [err, setErr] = React.useState()

  async function fn(...args: Parameters<T>) {
    setLoading(true)

    const params = config?.deleteNull ? $.utils.tool.deleteObjNull(args) : args

    return request(...params)
      .then((res) => {
        setData(res)
        return res
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        setErr(err)
        return Promise.reject()
      })
  }

  return {
    getData: (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => fn(...args),
    data: data as Awaited<ReturnType<T>>,
    loading,
    err,
  }
}
