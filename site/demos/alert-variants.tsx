import { Alert } from '@anivire/kata-ui'

export default function AlertVariants() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Alert variant="warning">Below the recommended 4 GB: the server may lag or fail to start</Alert>
      <Alert variant="info" title="Config file not found">
        It will be created with default values on the next start.
      </Alert>
      <Alert variant="success" title="Backup finished">
        survival-01 was saved to the backups folder.
      </Alert>
      <Alert variant="danger" title="Docker is unavailable">
        Servers can't start until the Docker daemon is running.
      </Alert>
    </div>
  )
}
