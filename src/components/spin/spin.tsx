import { Spin as AntSpin, SpinProps as AntSpinProps } from 'antd'

export interface SpinProps extends AntSpinProps {
}

export const Spin = (props: SpinProps) => {
  const { spinning = true } = props

  return <AntSpin spinning={spinning} {...props}> {props.children} </AntSpin>
}