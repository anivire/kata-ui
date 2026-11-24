import { Button, toast } from '@anivire/kata-ui'

export default function ToastKinds() {
  return (
    <>
      <Button onClick={() => toast.success('Server started', { description: 'survival-01 is up on port 25565' })}>Success</Button>
      <Button onClick={() => toast.error('Could not connect', { description: 'Make sure Docker is running' })}>Error</Button>
      <Button onClick={() => toast.warning('Low disk space')}>Warning</Button>
      <Button onClick={() => toast.info('Update available')}>Info</Button>
    </>
  )
}
