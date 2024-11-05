import { Skeleton as AntSkeleton, SkeletonProps as AntSkeletonProps } from 'antd'

export interface SkeletonProps extends AntSkeletonProps {
}

export const Skeleton = (props: SkeletonProps) => {

  const { active = true, ...prop } = props

  return <AntSkeleton active={active} paragraph={{ rows: 4 }}  {...prop} />
}