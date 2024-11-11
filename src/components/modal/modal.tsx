import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'
import React from 'react'

export interface ModalProps extends Omit<AntModalProps, 'onOk'> {
  onOk?: <T>() => Promise<T | void> | void
}

export const Modal = (props: ModalProps) => {
  const { children, ...prop } = props
  const [confirmLoading,setConfirmLoading] = React.useState<boolean>(false)

  return <AntModal {...prop} confirmLoading={confirmLoading} onOk={() =>props?.onOk?.()?.finally(()=>setConfirmLoading(true)) }>
    {children}
  </AntModal>
}