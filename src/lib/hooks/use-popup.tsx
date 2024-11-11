import React from 'react'
import { createRoot } from 'react-dom/client'

import { ConfigProvider } from '@/components'

interface UsePopupProps extends BaseComponent {
  /**
   * 调用open方法打开内容
   */
  open?: (...args: UsePopupProps[]) => Promise<any>
}

export const usePopup = () => {
  let popup = document.getElementById('popup')

  if (!popup) {
    popup = document.createElement('div')
    popup.setAttribute('id', 'popup')

    popup.style.position = 'fixed'
    document.body.append(popup)
  }

  function open(props: UsePopupProps) {
    createRoot(popup!).render(
      <React.StrictMode>
        <ConfigProvider>
          {props.children}
        </ConfigProvider>
      </React.StrictMode>,
    )
  }

  return {
    open,
  }
}


