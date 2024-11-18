import React from 'react'

import { ModalProps } from '@/components'
import { createPopup } from '@/lib'
import { OpenModal } from '@/components/modal/open-modal.tsx'

/**
 * modal配置（与ant-design配置一致）
 */
export interface OptionsType extends ModalProps {
  title?: string
}

export abstract class BaseModal<T extends Record<string, any>> {
  abstract options: OptionsType

  abstract render(props: T): React.ReactNode

  props? = {} as T

  open(options?: OptionsType & T) {
    this.props = options

    createPopup({
      children: <OpenModal<T> render={this.render.bind(this)} title={this.options.title} options={this.options}
                              renderProps={options}
      />,
    })
  }
}