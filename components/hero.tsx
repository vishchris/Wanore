import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { UpdateCard } from "@/components/update-card"
import { MissionCard } from "@/components/mission-card"

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Meetings shouldn&apos;t leave you guessing.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Turn messy meetings and updates into clear, structured snapshots your team can act on.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              Generate your first snapshot
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="space-y-4">
              <UpdateCard />
              <div className="grid grid-cols-2 gap-3">
                <MissionCard 
                  title="Finalize Q2 roadmap" 
                  assignee="Sarah" 
                  status="in-progress" 
                />
                <MissionCard 
                  title="Review API docs" 
                  assignee="Mike" 
                  status="done" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
