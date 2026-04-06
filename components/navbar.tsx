import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <img 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-28mM2ZzfHwm1CiQ42VGw1B0NYX3npl.png" 
          alt="Wanore" 
          className="h-8 w-auto"
        />
        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started
        </Button>
      </div>
    </header>
  )
}
