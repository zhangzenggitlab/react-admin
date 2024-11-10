import { Modal as AntModal, ModalProps as AntModalProps } from 'antd'

export interface ModalProps extends AntModalProps {
}

export const Modal = (props: ModalProps) => {
  const { children, ...prop } = props
  return <AntModal {...prop}>
    {children}
  </AntModal>
}