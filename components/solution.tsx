import { ClipboardPaste, Sparkles, Target, TrendingUp } from "lucide-react"

export function Solution() {
  const steps = [
    {
      icon: ClipboardPaste,
      title: "Auto-transcription",
      description: "Audio files automatically transcribed from your online meeting."
    },
    {
      icon: Sparkles,
      title: "Snapshot generated",
      description: "Get a view of what's happening, done, blocked, and next."
    },
    {
      icon: Target,
      title: "Tasks become missions",
      description: "Action items turn into mission cards for your team."
    },
    {
      icon: TrendingUp,
      title: "Progress auto-tracked",
      description: "Watch your team's momentum without asking for updates."
    }
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Wanore works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From chaos to clarity in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-accent">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-full w-full h-px bg-border -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
