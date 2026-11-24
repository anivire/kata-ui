import { Field, Input, SaveBar, toast } from '@anivire/kata-ui'
import { useState } from 'react'

export default function SaveBarForm() {
  const [saved, setSaved] = useState('survival-01')
  const [name, setName] = useState(saved)
  const [saving, setSaving] = useState(false)

  const save = () => {
    setSaving(true)
    setTimeout(() => {
      setSaved(name)
      setSaving(false)
      toast.success('Changes saved')
    }, 900)
  }

  return (
    <>
      <Field label="Server name" htmlFor="save-name" hint="Edit the field and a bar appears at the bottom" className="w-full max-w-sm">
        <Input id="save-name" value={name} onChange={(e) => setName(e.target.value)} />
      </Field>
      {name !== saved ? (
        <SaveBar
          message="You have unsaved changes"
          cancelLabel="Discard"
          saveLabel="Save"
          saving={saving}
          onCancel={() => setName(saved)}
          onSave={save}
        />
      ) : null}
    </>
  )
}
