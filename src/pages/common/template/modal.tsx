import { BaseModal, OptionsType } from '@/components'
import React from 'react'

type ModalProps = {
  id?: string
}

export class Modal extends BaseModal<ModalProps> {
  options: OptionsType = {
    title: '标题',
    onOk:this.onOk.bind(this)
  }

  async onOk(){
    return this.submit()
  }

  async submit(){}

  render(): React.ReactNode {
    this.submit = async ()=>{

    }

    return <>modal</>
  }
}

export const modal = new Modal()