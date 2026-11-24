import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Progress, StatusDot } from '@anivire/kata-ui'

export default function CardServer() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div>
          <CardTitle>survival-01</CardTitle>
          <CardDescription>Paper 1.21 · 4 GB</CardDescription>
        </div>
        <Badge variant="success" size="sm">
          <StatusDot tone="success" pulse />
          Online
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-col gap-1.5">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Memory</span>
          <span className="font-mono text-xs">2.8 / 4 GB</span>
        </div>
        <Progress value={0.71} />
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs text-subtle-foreground">Players: 7 / 20</span>
        <Button size="sm">Console</Button>
      </CardFooter>
    </Card>
  )
}
