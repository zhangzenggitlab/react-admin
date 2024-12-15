import { createRoot } from 'react-dom/client'

import React from 'react'

import { ConfigProvider } from '@/components'

type OpenDialogProps = BaseComponent

/**
 * 动态增加组件到浏览器，如Modal等
 */
export const usePopup = (function() {
  return {
    create: function(props: OpenDialogProps) {
      createRoot(document.createElement('popup-' + $.utils.tool.uuid(3))).render(
        <React.StrictMode>
          <ConfigProvider>
            {props.children}
          </ConfigProvider>
        </React.StrictMode>,
      )
    },
  }
})()