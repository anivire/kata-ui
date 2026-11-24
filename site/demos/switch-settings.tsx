import { Switch } from '@anivire/kata-ui'
import { useState } from 'react'

export default function SwitchSettings() {
  const [autostart, setAutostart] = useState(true)
  const [backups, setBackups] = useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 text-sm">
      <label className="flex items-center justify-between gap-4">
        Autostart
        <Switch checked={autostart} onCheckedChange={setAutostart} />
      </label>
      <label className="flex items-center justify-between gap-4">
        Backups
        <Switch checked={backups} onCheckedChange={setBackups} />
      </label>
      <label className="flex items-center justify-between gap-4 opacity-50">
        Beta features
        <Switch disabled />
      </label>
    </div>
  )
}
