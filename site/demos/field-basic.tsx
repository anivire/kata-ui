import { Field, Input } from '@anivire/kata-ui'

export default function FieldBasic() {
  return (
    <form className="flex w-full max-w-sm flex-col gap-4">
      <Field label="Name" htmlFor="name" required hint="This is how others will see you">
        <Input id="name" placeholder="anivire" />
      </Field>
      <Field label="Port" htmlFor="port">
        <Input id="port" type="number" defaultValue={25565} />
      </Field>
      <Field label="Read-only" htmlFor="id">
        <Input id="id" disabled defaultValue="srv_8f2a91" />
      </Field>
    </form>
  )
}
