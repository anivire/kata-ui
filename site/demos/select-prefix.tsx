import { Select } from '@anivire/kata-ui'
import { RiSortDesc } from '@remixicon/react'
import { useState } from 'react'

export default function SelectPrefix() {
  const [sort, setSort] = useState('new')

  return (
    <Select
      size="sm"
      value={sort}
      onValueChange={setSort}
      prefix="Sort"
      icon={<RiSortDesc />}
      options={[
        { value: 'new', label: 'Newest' },
        { value: 'popular', label: 'Popular' },
        { value: 'rating', label: 'Top rated' },
      ]}
    />
  )
}
