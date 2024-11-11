import React from 'react'

import { BaseModal, Button, Options } from '@/components'

class Dialog extends BaseModal {
  options: Options = {
    title:'编辑',
    onOk:  () => {
    },
  }

  render = () => {
    const [state, setState] = React.useState(2)

    return (
      <Button onClick={() => {
        setState(Math.random())
      }}>{state}</Button>
    )
  }

}

export const dialog = new Dialog
