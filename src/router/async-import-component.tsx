import React from 'react'
import {} from '@/pages/user/user-add/user-add'

export interface AsyncImportComponentProps extends Omit<RouterConfig, 'element'> {
  element?: () => Promise<any> | null
}

const AsyncImportComponent = (props: AsyncImportComponentProps) => {
  const [LazyElement, setLazyElement] = React.useState<React.ReactElement | null>(null)

  React.useEffect(() => {
    if (typeof props.element === 'function') {
      props?.element?.()?.then(async ({ default: Element }) => {
        let res: Awaited<ReturnType<typeof Element.beforeEnter>>

        if (Element?.beforeEnter) {
          res = await Element?.beforeEnter()
        }

        setLazyElement(<Element {...props} {...res} />)
      })
    }
  }, [])

  return LazyElement
}

export default AsyncImportComponent
