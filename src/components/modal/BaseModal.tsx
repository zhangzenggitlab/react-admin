import React from 'react'

import { Modal, ModalProps } from '@/components'
import { createPopup } from '@/lib'

interface openModalProps {
  render: () => React.ReactNode
}

export interface Options extends ModalProps {
  title?: string
}

type OpenModal = openModalProps & Options & {
  /** 是否添加子容器样式 */
  contentStyle?: boolean
}

export const OpenModal = (props: OpenModal) => {
  return <Modal {...props} >
    <div style={{ padding: 20 }}>
      {props.render()}
    </div>
  </Modal>
}

export abstract class BaseModal<T extends Record<string, any>> {
  abstract options: Options
  abstract render(): React.ReactNode

  props = {} as T

  open(options?: Options & T) {
    const prop = { ...this.options, ...options }

    createPopup({
      children: <OpenModal render={this.render.bind(this)} {...prop} title={prop.title} />,
    })
  }
}