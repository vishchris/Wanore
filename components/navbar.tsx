import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-foreground text-lg">Wanore</span>
        </div>
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </header>
  )
}
