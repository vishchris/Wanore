import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle, AlertCircle } from "lucide-react"

interface MissionCardProps {
  title: string
  assignee: string
  status: "done" | "in-progress" | "blocked"
}

export function MissionCard({ title, assignee, status }: MissionCardProps) {
  const statusConfig = {
    done: {
      icon: CheckCircle2,
      color: "text-accent",
      bg: "bg-accent/10",
      label: "Done"
    },
    "in-progress": {
      icon: Circle,
      color: "text-muted-foreground",
      bg: "bg-muted",
      label: "In Progress"
    },
    blocked: {
      icon: AlertCircle,
      color: "text-destructive",
      bg: "bg-destructive/10",
      label: "Blocked"
    }
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Card className="border border-border bg-card shadow-sm">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start gap-2">
          <Icon className={`w-4 h-4 mt-0.5 ${config.color}`} />
          <span className="text-sm font-medium text-card-foreground leading-tight">
            {title}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{assignee}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}>
            {config.label}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
