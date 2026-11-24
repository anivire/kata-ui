import { Field, Input } from '@anivire/kata-ui'
import { useState } from 'react'

export default function FieldValidation() {
  const [email, setEmail] = useState('anivire@')
  const error = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? undefined : 'Enter a valid email'

  return (
    <Field label="Email" htmlFor="email" error={error} className="w-full max-w-sm">
      <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={Boolean(error)} />
    </Field>
  )
}
