import { Modal as AntModal, ModalProps } from 'antd'

export const Modal = (props: ModalProps) => {
  const { children, ...prop } = props
  return <AntModal {...prop}>
    {children}
  </AntModal>
}