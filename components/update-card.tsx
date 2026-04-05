import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UpdateCard() {
  const progress = 68

  return (
    <Card className="border border-border bg-card shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-card-foreground">
            Weekly Snapshot
          </CardTitle>
          <span className="text-xs text-muted-foreground">Apr 1 – Apr 7</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Sprint Progress</span>
            <span className="font-medium text-card-foreground">{progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-card-foreground">12</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-accent">8</div>
            <div className="text-xs text-muted-foreground">Done</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-muted/50">
            <div className="text-2xl font-bold text-card-foreground">2</div>
            <div className="text-xs text-muted-foreground">Blocked</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
