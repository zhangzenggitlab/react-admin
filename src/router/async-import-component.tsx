import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export interface AsyncImportComponentProps extends Omit<RouterConfig, 'element' | 'children'> {
  element?: () => Promise<unknown> | null
}

const AsyncImportComponent = (props: AsyncImportComponentProps) => {
  const [LazyElement, setLazyElement] = React.useState<React.ReactElement | null>(null)

  // 获取params,query,state等数据
  const { state } = useLocation()
  const params = useParams()

  React.useEffect(() => {
    if (typeof props.element === 'function') {
      props?.element?.()?.then(async ({ default: Element }) => {
        let res: Awaited<ReturnType<typeof Element.beforeEnter>>

        if (Element?.beforeEnter) {
          res = await Element?.beforeEnter({ ...params })
        }

        setLazyElement(<Element {...props} {...res} {...state} />)
      })
    }
  }, [props, location, params])

  return LazyElement
}

export default AsyncImportComponent
