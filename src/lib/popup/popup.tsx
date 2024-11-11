import { createRoot } from 'react-dom/client'
import React from 'react'

import { ConfigProvider } from '@/components'

type OpenDialogProps = BaseComponent

export const createPopup = (props:OpenDialogProps)=>{
  let popup = document.getElementById('popup')

  if (!popup) {
    popup = document.createElement('div')
    popup.setAttribute('id', 'popup')

    popup.style.position = 'fixed'
    document.body.append(popup)
  }

  createRoot(popup!).render(
    <React.StrictMode>
      <ConfigProvider>
        {props.children}
      </ConfigProvider>
    </React.StrictMode>,
  )
}