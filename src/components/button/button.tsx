import React from 'react'
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd'

import { isAsyncFunction } from '@/lib'
export interface ButtonProps extends AntButtonProps {
  onClick?: () => Promise<any> | any
}

export const Button = (props: ButtonProps) => {
  const [loading, setLoading] = React.useState<boolean>(false)

  return (
    <AntButton
      loading={loading}
      {...props}
      onClick={() => {
        if (props?.onClick && isAsyncFunction(props?.onClick)) {
          setLoading(true)

          props?.onClick?.()?.finally(() => {
            setLoading(false)
          })
        } else {
          props?.onClick?.()
        }
      }}
    />
  )
}