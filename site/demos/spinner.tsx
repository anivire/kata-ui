import { Spinner } from '@anivire/kata-ui'

export default function SpinnerInline() {
  return (
    <>
      <Spinner />
      <Spinner className="size-6 text-accent" />
      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner />
        Loading logs…
      </span>
    </>
  )
}
