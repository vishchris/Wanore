import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Stop guessing what&apos;s going on
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
          Get a clear view of your team&apos;s state without another meeting.
        </p>
        <Button 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
        >
          Generate your first snapshot
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-primary-foreground/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary-foreground flex items-center justify-center">
              <span className="text-primary font-bold text-xs">W</span>
            </div>
            <span className="text-primary-foreground font-medium">Wanore</span>
          </div>
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Wanore. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
