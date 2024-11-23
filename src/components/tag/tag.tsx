import { Tag as AntTag, TagProps as AntTagProps } from 'antd'

export interface TagProps extends AntTagProps {
  /**
   * 颜色类型
   */
  type: 'primary' | 'success' | 'warn' | 'error'
}

enum TypeColor {
  primary = '#fafafa',
  success = '#52C41A',
  warn = 'orange',
  error = 'red',
}

export const Tag = (props: TagProps) => {
  const { children = '', type = 'primary', ...prop } = props

  return <AntTag color={TypeColor[type]} {...prop} >
    {children}
  </AntTag>
}