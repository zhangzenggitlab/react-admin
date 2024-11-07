/**
 * 窗口滚动
 * @param top 距离顶部滚动距离
 * @param behavior
 * @param el 滚动节点,默认window
 */

interface UseDomScrollTopProps {
  top: number
  behavior?: ScrollBehavior
}

const useDomScrollTop = (
  options: UseDomScrollTopProps = { top: 0, behavior: 'smooth' },
  el: HTMLElement | Window = window
) => {
  el.scrollTo({ top: options?.top, behavior: options?.behavior || 'smooth' })
}

export { useDomScrollTop }
