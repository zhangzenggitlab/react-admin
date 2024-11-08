import { PanelItem } from '@/components'

declare namespace Base {
  interface BasePanel {
    Item: typeof PanelItem
  }

  const Panel: BasePanel
}