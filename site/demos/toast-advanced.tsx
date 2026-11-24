import { Button, toast } from '@anivire/kata-ui'

function createBackup() {
  return new Promise((resolve) => setTimeout(resolve, 1500))
}

export default function ToastAdvanced() {
  return (
    <>
      <Button
        onClick={() =>
          toast.promise(createBackup(), {
            loading: 'Creating backup…',
            success: 'Backup ready',
            error: 'Backup failed',
          })
        }
      >
        Promise
      </Button>
      <Button
        onClick={() =>
          toast('File deleted', {
            action: { label: 'Undo', onClick: () => toast.success('File restored') },
          })
        }
      >
        With action
      </Button>
    </>
  )
}
