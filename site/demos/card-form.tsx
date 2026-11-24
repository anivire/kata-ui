import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Field, Input, Switch, Textarea } from '@anivire/kata-ui'

export default function CardForm() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Visible to other users</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Field label="Name" htmlFor="profile-name" required>
          <Input id="profile-name" defaultValue="anivire" />
        </Field>
        <Field label="Bio" htmlFor="profile-bio" hint="Up to 160 characters">
          <Textarea id="profile-bio" />
        </Field>
        <label className="flex items-center justify-between gap-4 text-sm">
          Public profile
          <Switch defaultChecked />
        </label>
      </CardContent>
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Button variant="accent">Save</Button>
      </CardFooter>
    </Card>
  )
}
