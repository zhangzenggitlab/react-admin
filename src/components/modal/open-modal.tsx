import { Modal, OptionsType } from '@/components'
import React from 'react'

type OpenModalType<T> = {
  /** modal标题 */
  title?: string
  options: OptionsType
  render: (...args: T[]) => React.ReactNode
  renderProps?: T
}

export function OpenModal<T>(props: OpenModalType<T>) {
  return <Modal {...props.options}>
    <div style={{ padding: 20 }}>
      {props.render(props.renderProps)}
    </div>
  </Modal>
}