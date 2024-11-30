import { Modal, OptionsType } from '@/components'
import React from 'react'

type OpenModalType<T> = {
  /** modal标题 */
  title?: string
  options: OptionsType
  render: (...args: T[]) => React.ReactNode
  renderProps?: T
  resolve?: (...args: any) => any
}

export function OpenModal<T>(props: OpenModalType<T>) {
  const {
    resolve = () => {
    },
  } = props

  return <Modal {...props.options} resolve={resolve}>
    <div style={{ padding: 20 }}>
      {props.render(props.renderProps!)}
    </div>
  </Modal>
}