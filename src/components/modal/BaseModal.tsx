import React from 'react'

import { Modal, ModalProps } from '@/components'
import { createPopup } from '@/lib'

/**
 * modal配置（与ant-design配置一致）
 */
export interface OptionsType extends ModalProps {
  title?: string
}

type OpenModalType<T> = {
  /** modal标题 */
  title?: string
  options: OptionsType
  render: (...args: T[]) => React.ReactNode
  renderProps?: T
}

function OpenModal<T>(props: OpenModalType<T>) {
  return <Modal {...props.options}>
    <div style={{ padding: 20 }}>
      {props.render(props.renderProps)}
    </div>
  </Modal>
}

export abstract class BaseModal<T extends Record<string, any>> {
  abstract options: OptionsType

  abstract render(props: T): React.ReactNode

  props? = {} as T

  open(options?: OptionsType & T) {
    this.props = options

    createPopup({
      children: <OpenModal<T> render={this.render.bind(this)} title={this.options.title} options={this.options}
                              renderProps={options}
      />,
    })
  }
}