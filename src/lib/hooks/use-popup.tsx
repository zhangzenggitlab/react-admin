import React from 'react'
import { createRoot } from 'react-dom/client'

import { ConfigProvider } from '@/components'
import { css } from '@emotion/css'

interface UsePopupProps extends BaseComponent {
  /**
   * 调用open方法打开内容
   */
  // open?: (...args: UsePopupProps[]) => Promise<any>
}

export const usePopup = () => {
  let popup = document.getElementById('popup')

  if (!popup) {
    popup = document.createElement('div')
    popup.setAttribute('class', 'popup')
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

const popup = css`
    .popup {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }
`
