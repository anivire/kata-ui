import { Button, Dialog, DialogClose, DialogContent, DialogTrigger, toast } from '@anivire/kata-ui'

export default function DialogConfirm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="danger">Delete server</Button>
      </DialogTrigger>
      <DialogContent title="Delete survival-01?" description="The world and all backups will be permanently deleted.">
        <div className="flex justify-end gap-2 px-6 pb-5 pt-4">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="danger" onClick={() => toast.success('Server deleted')}>
              Delete
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
