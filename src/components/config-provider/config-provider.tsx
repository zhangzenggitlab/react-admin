import React from 'react'
import { ConfigProvider as AntConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

type ConfigProviderProps = { children: React.ReactNode }

const ConfigProvider = (props: ConfigProviderProps) => {
  return (
    <AntConfigProvider
      locale={zhCN}
      theme={{
        components: {
          Form: {
            itemMarginBottom: 0,
          },
          Menu: {
            itemSelectedBg: 'rgba(0, 0, 0, 0.04)',
            itemSelectedColor: 'rgba(0, 0, 0, 0.9)',
            itemActiveBg: 'rgba(0, 0, 0, 0.04)',
            itemBg: 'transparent',
          },
        },
      }}
    >
      {props.children}
    </AntConfigProvider>
  )
}

export { ConfigProvider }
