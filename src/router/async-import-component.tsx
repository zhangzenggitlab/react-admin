import React from 'react'

interface AsyncImportComponentProps extends Omit<RouterConfig, 'element'> {
  element: () => Promise<any>
}

const AsyncImportComponent: PageProps<AsyncImportComponentProps> = (props) => {
  const [LazyElement, setLazyElement] = React.useState<React.ReactElement | null>(null)

  React.useEffect(() => {
    if (typeof props.element === 'function') {
      props?.element?.()?.then(({ default: Element }) => {
        setLazyElement(<Element {...props} />)
      })
    }
  }, [])

  return LazyElement
}

export default AsyncImportComponent
