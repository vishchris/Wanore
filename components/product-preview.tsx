import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MissionCard } from "@/components/mission-card"
import { CheckCircle2, Clock, AlertTriangle, ArrowRight } from "lucide-react"

export function ProductPreview() {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See your team at a glance
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Update Cards show the big picture. Mission Cards show the details.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Leader View - Update Card (3 columns - dominant) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                Leader View
              </span>
            </div>
            <Card className="border-2 border-primary/20 bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-card-foreground">
                  Product Team Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* What's Going On */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                    <Clock className="w-4 h-4 text-accent" />
                    What&apos;s going on
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Mobile app redesign in progress. Waiting on design review from Sarah.
                  </p>
                </div>
                
                {/* What's Done */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    What&apos;s done
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    API integration complete. User testing scheduled for next week.
                  </p>
                </div>
                
                {/* What's Blocked */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    What&apos;s blocked
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Backend deployment waiting on security review approval.
                  </p>
                </div>
                
                {/* What's Next */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    What&apos;s next
                  </div>
                  <p className="text-sm text-muted-foreground pl-6">
                    Launch beta to internal users by Friday. Gather feedback over weekend.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Individual View - Mission Cards (2 columns - secondary) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span className="px-2 py-1 rounded bg-accent/20 text-accent font-medium">
                Individual View
              </span>
            </div>
            <div className="space-y-3">
              <MissionCard 
                title="Complete mobile app wireframes" 
                assignee="Sarah Chen" 
                status="in-progress" 
              />
              <MissionCard 
                title="Review API documentation" 
                assignee="Mike Johnson" 
                status="done" 
              />
              <MissionCard 
                title="Fix authentication bug" 
                assignee="Alex Rivera" 
                status="blocked" 
              />
              <MissionCard 
                title="Deploy staging environment" 
                assignee="Jordan Lee" 
                status="done" 
              />
              <MissionCard 
                title="User research interviews" 
                assignee="Taylor Kim" 
                status="in-progress" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
