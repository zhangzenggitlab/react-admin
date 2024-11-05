import React from 'react'
import { ConfigProvider as AntConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN';

type ConfigProviderProps = { children: React.ReactNode }

const ConfigProvider = (props: ConfigProviderProps) => {

  return <AntConfigProvider locale={zhCN} theme={{
    components: {
      Form: {
        itemMarginBottom:0
      },
    },
  }}>{props.children}</AntConfigProvider>
}

export { ConfigProvider }