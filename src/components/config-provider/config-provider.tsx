import { ConfigProvider as AntConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

type ConfigProviderProps = BaseComponent

const ConfigProvider = (props: ConfigProviderProps) => {
  return (
    <AntConfigProvider
      locale={zhCN}
      theme={{
        components: {
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
