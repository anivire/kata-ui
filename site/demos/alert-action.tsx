import { Alert, Button } from '@anivire/kata-ui'

export default function AlertAction() {
  return (
    <Alert
      variant="warning"
      title="Addons are locked"
      action={
        <Button size="sm" variant="secondary">
          Unlink
        </Button>
      }
      className="w-full"
    >
      The modpack manages these files. Unlink it to edit addons by hand.
    </Alert>
  )
}
