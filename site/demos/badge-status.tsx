import { Badge, StatusDot } from '@anivire/kata-ui'

export default function BadgeStatus() {
  return (
    <>
      <Badge variant="success">
        <StatusDot tone="success" pulse />
        Online
      </Badge>
      <Badge variant="warning">
        <StatusDot tone="warning" />
        Starting
      </Badge>
      <Badge variant="danger">
        <StatusDot tone="danger" />
        Error
      </Badge>
      <Badge variant="neutral">
        <StatusDot />
        Stopped
      </Badge>
    </>
  )
}
