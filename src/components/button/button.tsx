import React from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

export interface ButtonProps extends Partial<AntButtonProps> {
  onClick?: () => Promise<any> | any
}

export const Button = (props: ButtonProps) => {
  const { children, ...prop } = props

  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <AntButton
      loading={loading}
      {...prop}
      onClick={() => {
        if (props?.onClick && $.utils.tool.isAsyncFunction(props?.onClick)) {
          setLoading(true)

          props?.onClick?.()?.finally(() => {
            setLoading(false)
          })
        } else {
          props?.onClick?.()
        }
      }}
    >
      {children}
    </AntButton>
  )
}
