import {css} from '@emotion/css'

export interface PanelProps {
  title?: string;
  loading?:boolean
}

export const Panel = (props: PanelProps) => {

  return <div className={panel}>
    <div className="title">{props.title}</div>
  </div>
}

const panel = css`
    .panel {
    
    }
`