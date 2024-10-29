
import {
  LinkProps as ReactLinkProps,
  Link
} from 'react-router-dom'

export interface LinkProps extends ReactLinkProps {
 id?:string
}

 const BaseLink = (props:LinkProps)=>{

   return <Link {...props}></Link>
}

export {BaseLink}
