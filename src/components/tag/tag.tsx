import { Tag as AntTag } from 'antd'

export interface TagProps {
  type:'primary'|'green'
}

export const Tag = () => {
  return <AntTag />
}