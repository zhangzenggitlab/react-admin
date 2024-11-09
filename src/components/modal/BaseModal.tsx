import React from 'react'
import { ConfigProvider, Modal } from '@/components'

import { usePopup } from '@/lib/hooks'

export interface BaseModalProps {
  children?: JSX.Element
  onOk?: () => Promise<any>
}

interface BaseModalStates {
}

abstract class BaseController extends React.Component<BaseModalProps, BaseModalStates> {
  abstract async onOk()
}

export class BaseModal extends BaseController {
  state = {
    age: 1,
  }

  constructor(props) {
    super(props)
  }


  // open() {
  //   let self = this
  //   usePopup().open({
  //     children: <ConfigProvider> <Modal open={true} onOk={() => {
  //       this.onOk().then(r => {
  //       })
  //     }}>{this.render()}</Modal></ConfigProvider>,
  //   })
  // }

  async onOk(): Promise<any> {
    console.log('ok')
  }


}