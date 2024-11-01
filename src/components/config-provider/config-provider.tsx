import React from 'react'
import { ConfigProvider as AntConfigProvider } from 'antd'

type ConfigProviderProps = { children: React.ReactNode }

const ConfigProvider = (props: ConfigProviderProps) => {

  return <AntConfigProvider theme={{
    components: {
      Form: {
        itemMarginBottom:0
      },
    },
  }}>{props.children}</AntConfigProvider>
}

export { ConfigProvider }