import { Segmented } from '@anivire/kata-ui'
import { RiGridFill, RiListUnordered } from '@remixicon/react'
import { useState } from 'react'

export default function SegmentedIcons() {
  const [view, setView] = useState<'grid' | 'list'>('grid')

  return (
    <Segmented
      size="sm"
      value={view}
      onChange={setView}
      options={[
        { value: 'grid', label: 'Grid', icon: <RiGridFill /> },
        { value: 'list', label: 'List', icon: <RiListUnordered /> },
      ]}
    />
  )
}
