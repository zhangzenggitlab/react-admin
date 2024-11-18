import React from 'react'

export const useHttp = <T extends (...args: any[]) => Promise<any>>(
  request: T,
  defaultData: Partial<Awaited<ReturnType<T>>>,
  defaultLoading: boolean = false
) => {
  const [data, setData] = React.useState(defaultData)
  const [loading, setLoading] = React.useState(defaultLoading)
  const [err, setErr] = React.useState()

  async function fn(...args: Parameters<T>[]) {
    setLoading(true)

    return request(...args)
      .then((res) => {
        setData(res)
        return res
      })
      .finally(() => {
        setLoading(false)
      })
      .catch((err) => {
        setErr(err)
        return err
      })
  }

  return {
    getData: (...args: Parameters<T>[]) => fn(...args),
    data,
    loading,
    err,
  }
}
