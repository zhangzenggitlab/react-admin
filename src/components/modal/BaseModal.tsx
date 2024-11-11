import React from 'react'

import { Modal, ModalProps } from '@/components'
import { createPopup } from '@/lib'

interface openModalProps {
  render: () => JSX.Element
}

export interface Options extends ModalProps {
  title: string
  onCancel?: () => void
}

type OpenModal = openModalProps & Options

export const OpenModal = (props: OpenModal) => {
  const [open, setOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    setOpen(true)

    return () => {
      setOpen(false)
    }
  }, [])

  return <Modal {...props} open={open} onCancel={() => {
    props?.onCancel?.()
    setOpen(false)
  }} onOk={() => {
    if (props?.onOk && $.utils.isAsyncFunction(props?.onOk)) {
      setOpen(true)
      props?.onOk?.()?.finally(() => {
        setOpen(false)
      })
    } else {
      props?.onOk?.()
      setOpen(false)
    }
  }}>{props.render()}</Modal>
}

export abstract class BaseModal {
  abstract options: Options

  abstract render(): JSX.Element

  open(options?: Options) {
    createPopup({
      children: <OpenModal render={this.render} {...this.options} {...options}></OpenModal>,
    })
  }
}