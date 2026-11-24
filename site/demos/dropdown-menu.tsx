import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  toast,
} from '@anivire/kata-ui'
import { RiDeleteBinLine, RiEditLine, RiMoreFill, RiShareLine } from '@remixicon/react'

export default function DropdownMenuActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" aria-label="Actions">
          <RiMoreFill />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>survival-01</DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => toast('Editing')}>
          <RiEditLine />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => toast.success('Link copied')}>
          <RiShareLine />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-danger [&_svg]:text-danger">
          <RiDeleteBinLine />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
