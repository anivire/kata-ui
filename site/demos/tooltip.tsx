import { Button, Tooltip } from '@anivire/kata-ui'
import { RiDeleteBinLine, RiFileCopyLine, RiShareLine } from '@remixicon/react'

export default function TooltipIcons() {
  return (
    <div className="flex gap-1">
      <Tooltip content="Copy">
        <Button size="icon" variant="ghost" aria-label="Copy">
          <RiFileCopyLine />
        </Button>
      </Tooltip>
      <Tooltip content="Share">
        <Button size="icon" variant="ghost" aria-label="Share">
          <RiShareLine />
        </Button>
      </Tooltip>
      <Tooltip content="Delete" side="bottom">
        <Button size="icon" variant="ghost" aria-label="Delete">
          <RiDeleteBinLine />
        </Button>
      </Tooltip>
    </div>
  )
}
