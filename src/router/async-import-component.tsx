import React from 'react'

interface AsyncImportComponentProps extends Omit<RouterConfig, 'element'> {
  element: () => Promise<any>
}

const AsyncImportComponent: React.FC<AsyncImportComponentProps> = (props) => {
  const [LazyElement, setLazyElement] = React.useState<React.ReactElement | null>(null)

  React.useEffect(() => {
    if (typeof props.element === 'function') {
      props?.element?.()?.then(({ default: Element }) => {
        setLazyElement(<Element />)
      })
    }
  }, [])

  return LazyElement
}

export default AsyncImportComponent
