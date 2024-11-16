import React from 'react'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

export interface ModalProps extends Omit<AntModalProps, 'onOk'> {
  onOk?: <T>() => Promise<T | void>
}

export const Modal = (props: ModalProps) => {
  const {
    children, onOk = async () => {
    }, onCancel = () => {
      setOpen(false)
    }, ...prop
  } = props

  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState(true)

  return <AntModal destroyOnClose {...prop} open={open} confirmLoading={confirmLoading} onOk={() => {
    if (props?.onOk && $.utils.isAsyncFunction(props?.onOk)) {
      setConfirmLoading(true)
      return props?.onOk?.()?.finally(() => {
        setConfirmLoading(false)
        setOpen(false)
      })
    } else {
      props?.onOk?.()
      setOpen(false)
    }
  }} onCancel={(e) => {
    onCancel(e)
    setOpen(false)
  }}>
    {children}
  </AntModal>
}