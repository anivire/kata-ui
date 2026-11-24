import { Progress } from '@anivire/kata-ui'

const USAGE = [
  { label: 'CPU', value: 0.34, text: '34%' },
  { label: 'Memory', value: 0.71, text: '2.8 / 4 GB' },
  { label: 'Disk', value: 0.18, text: '3.6 / 20 GB' },
]

export default function ProgressUsage() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      {USAGE.map((row) => (
        <div key={row.label} className="flex flex-col gap-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{row.label}</span>
            <span className="font-mono text-xs">{row.text}</span>
          </div>
          <Progress value={row.value} tone={row.value > 0.7 ? 'foreground' : 'accent'} />
        </div>
      ))}
    </div>
  )
}
