import { Segmented } from '@anivire/kata-ui'
import { useState } from 'react'

export default function SegmentedTabs() {
  const [tab, setTab] = useState('all')

  return (
    <Segmented
      value={tab}
      onChange={setTab}
      options={[
        { value: 'all', label: 'All', count: 128 },
        { value: 'active', label: 'Active', count: 12 },
        { value: 'archived', label: 'Archive', disabled: true, title: 'Coming soon' },
      ]}
    />
  )
}
