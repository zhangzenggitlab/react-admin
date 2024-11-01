import React from 'react'

/**
 * 事件监听，自动销毁
 * @param eventName 事件名
 * @param fn 函数
 * @param options 配置
 * @param el
 */
export const useAddEventListener = <T extends keyof WindowEventMap, P extends (...args: any) => any>
(eventName: T, fn: P, options?: boolean | AddEventListenerOptions, el = window) => {
  React.useEffect(() => {
    el.addEventListener(eventName, fn, options)
    return () => {
      el.removeEventListener(eventName, fn, options)
    }
  }, [])
}