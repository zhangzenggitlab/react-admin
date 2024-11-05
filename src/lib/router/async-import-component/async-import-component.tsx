import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'

import { Skeleton, Spin } from '@/components'

export interface AsyncImportComponentProps extends Omit<RouterConfig, 'element' | 'children'> {
  element?: () => Promise<any> | null
}

export const AsyncImportComponent = (props: AsyncImportComponentProps) => {
  const [LazyElement, setLazyElement] = React.useState<React.ReactElement | null>(null)

  // 获取params,query,state等数据
  const location = useLocation()
  const params = useParams()

  React.useEffect(() => {
    if (typeof props.element === 'function') {
      props?.element?.()?.then(async ({ default: Element }) => {
        let res: Awaited<ReturnType<typeof Element.beforeEnter>>

        if (props?.meta?.loading === 'skeleton') {
          setLazyElement(<Skeleton />)
        }

        if (props?.meta?.loading === 'spin') {
          setLazyElement(<Spin spinning={true} indicator={<LoadingOutlined spin />} />)
        }

        if (Element?.beforeEnter) {
          res = await Element?.beforeEnter({ ...params })
        }

        setLazyElement(<Element {...props} {...res} location={location} title={props.title} route={props}/>)
      })
    }
  }, [props, params, location])

  return LazyElement
}

