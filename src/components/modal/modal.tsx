import React from 'react'
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

export interface ModalProps extends Omit<AntModalProps, 'onOk'> {
  onOk?: <T>() => Promise<T | void>
  resolve?: (...args: any) => any
}

export const Modal = (props: ModalProps) => {
  const {
    children, onOk = async () => {
    }, onCancel = () => {
      setOpen(false)
    }, resolve = () => {
    }, ...prop
  } = props

  const [confirmLoading, setConfirmLoading] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState(true)

  function okCallBack() {
    if (onOk && $.utils.tool.isAsyncFunction(onOk)) {
      setConfirmLoading(true)
      return onOk?.()?.then((res) => {
        resolve(res)
        setConfirmLoading(false)
        setOpen(false)
      }).catch(() => setConfirmLoading(false))
    }

    props?.onOk?.()
    setOpen(false)
  }

  return <AntModal destroyOnClose
                   confirmLoading={confirmLoading}
                   open={open}
                   children={children}
                   {...prop}
                   onOk={okCallBack}
                   onCancel={(e) => {
                     onCancel(e)
                     setOpen(false)
                   }} />
}