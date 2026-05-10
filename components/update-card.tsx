import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertTriangle, ArrowRight } from "lucide-react"

export function UpdateCard() {
  return (
    <Card className="border border-border bg-card shadow-sm overflow-hidden">
      <CardHeader className="pb-3 bg-muted/30">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium text-card-foreground">
            Product Team Standup
          </CardTitle>
          <div className="flex items-center gap-2">
            <input 
              type="text" 
              placeholder="email" 
              className="text-xs px-2 py-1 rounded border border-border bg-card w-24"
              disabled
            />
            <span className="text-xs text-muted-foreground">Share</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-4 gap-4 text-xs">
          {/* What's Going On */}
          <div className="space-y-2">
            <h4 className="font-semibold text-muted-foreground uppercase tracking-wide text-[10px]">
              What&apos;s Going On
            </h4>
            <ul className="space-y-1.5 text-card-foreground">
              <li className="flex items-start gap-1.5">
                <span className="text-muted-foreground mt-0.5">•</span>
                <span>Mobile redesign in progress, 70% complete</span>
              </li>
            </ul>
          </div>
          
          {/* What's Done */}
          <div className="space-y-2">
            <h4 className="font-semibold text-muted-foreground uppercase tracking-wide text-[10px]">
              What&apos;s Done
            </h4>
            <ul className="space-y-1.5 text-card-foreground">
              <li className="flex items-start gap-1.5">
                <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                <span>API integration complete</span>
              </li>
              <li className="flex items-start gap-1.5">
                <Check className="w-3 h-3 text-accent mt-0.5 shrink-0" />
                <span>User testing scheduled</span>
              </li>
            </ul>
          </div>
          
          {/* What's Blocked */}
          <div className="space-y-2">
            <h4 className="font-semibold text-muted-foreground uppercase tracking-wide text-[10px]">
              What&apos;s Blocked
            </h4>
            <ul className="space-y-1.5 text-card-foreground">
              <li className="flex items-start gap-1.5">
                <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 shrink-0" />
                <span>Security review pending</span>
              </li>
            </ul>
          </div>
          
          {/* What's Next */}
          <div className="space-y-2">
            <h4 className="font-semibold text-muted-foreground uppercase tracking-wide text-[10px]">
              What&apos;s Next
            </h4>
            <ul className="space-y-1.5 text-card-foreground">
              <li className="flex items-start gap-1.5">
                <ArrowRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                <span>Launch beta by Friday</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ArrowRight className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                <span>Send feedback form</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
