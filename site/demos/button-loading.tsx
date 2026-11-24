import { Button } from '@anivire/kata-ui'
import { RiRestartLine } from '@remixicon/react'
import { useState } from 'react'

export default function ButtonLoading() {
  const [loading, setLoading] = useState(false)

  const restart = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <>
      <Button variant="accent" loading={loading} onClick={restart}>
        <RiRestartLine />
        Restart
      </Button>
      <Button disabled>Unavailable</Button>
    </>
  )
}
