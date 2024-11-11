import { Button } from '@/components'

import { dialog } from './dialog.tsx'

export function Test() {
  return <Button onClick={() => {
    dialog.open()
  }}>按钮</Button>
}