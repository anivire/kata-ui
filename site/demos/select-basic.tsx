import { Select } from '@anivire/kata-ui'
import { useState } from 'react'

export default function SelectBasic() {
  const [region, setRegion] = useState('')

  return (
    <Select
      value={region}
      onValueChange={setRegion}
      placeholder="Region"
      className="w-56"
      options={[
        { value: '', label: 'Any' },
        { value: 'eu', label: 'Europe', hint: 'Frankfurt, Amsterdam' },
        { value: 'us', label: 'USA', hint: 'Virginia' },
        { value: 'asia', label: 'Asia', hint: 'Tokyo' },
      ]}
    />
  )
}
