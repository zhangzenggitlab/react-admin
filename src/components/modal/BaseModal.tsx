import React from 'react'

import { Modal, ModalProps } from '@/components'
import { createPopup } from '@/lib'

interface openModalProps {
  render: () => React.ReactNode
  props:Record<string, any>
}

export interface Options extends Omit<ModalProps, "onCancel"> {
  title?: string
  onCancel?: () => void
}

type OpenModal = openModalProps & Options

export const OpenModal = (props: OpenModal) => {
  const [open, setOpen] = React.useState<boolean>(true)
  return <Modal {...props} open={open} onOk={props.onOk}>{props.render()}</Modal>
}

export abstract class BaseModal<T extends Record<string, any>> {
  abstract options: Options
  abstract render(): React.ReactNode

  props = {} as T

  open(options?: Options & T) {
    const prop = { ...this.options, ...options }
    createPopup({
      children: <OpenModal render={this.render} {...prop} title={prop.title} />,
    })
  }
}