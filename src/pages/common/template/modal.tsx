import { BaseModal, OptionsType } from '@/components'
import React from 'react'

type ModalProps = {
  id?: string
}

export class Modal extends BaseModal<ModalProps> {
  options: OptionsType = {
    title: '标题',
  }

  render(): React.ReactNode {
    return <>modal</>
  }
}