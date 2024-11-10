import React from 'react'
import { Modal, ModalProps } from '@/components'

import { usePopup } from '@/lib/hooks'

export interface BaseModalProps {
  children?: JSX.Element
  onOk?: () => Promise<any>
  render:any
}

interface BaseModalStates {
}

interface OpenProps extends ModalProps, BaseComponent {
}

abstract class BaseController<T extends BaseModalProps, S extends BaseModalStates> extends React.Component<T, S> {
  abstract async onOk()
}

export class BaseModal extends React.Component<BaseModalProps, BaseModalStates> {
  constructor(props, state) {
    super(props, state)
    this.props = props
    this.state = state
  }

   open(props: OpenProps) {
    const { children } = props
    console.log(this)

    usePopup().open({
      children: <Modal open={true} onOk={() => {
      }}>{this.render()}</Modal>,
    })
  }
}

