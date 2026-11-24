import { Field, Textarea } from '@anivire/kata-ui'

export default function FieldTextarea() {
  return (
    <Field label="Bio" htmlFor="bio" hint="Up to 160 characters" className="w-full max-w-sm">
      <Textarea id="bio" maxLength={160} placeholder="A few words about yourself…" />
    </Field>
  )
}
