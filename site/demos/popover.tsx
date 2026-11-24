import { Button, Field, Input, Popover, PopoverClose, PopoverContent, PopoverTrigger } from '@anivire/kata-ui'

export default function PopoverRename() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Rename</Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="flex flex-col gap-3 p-4">
        <Field label="Name" htmlFor="server-name">
          <Input id="server-name" defaultValue="survival-01" />
        </Field>
        <PopoverClose asChild>
          <Button variant="accent" size="sm" className="self-end">
            Save
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
