import { Link, LinkProps as ReactLinkProps } from 'react-router-dom'

export type  LinkProps = ReactLinkProps

export const BaseLink = (props: LinkProps) => {

  return <Link {...props}></Link>
}

