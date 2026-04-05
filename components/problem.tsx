import { Users, MessagesSquare, HelpCircle } from "lucide-react"

export function Problem() {
  const problems = [
    {
      icon: Users,
      title: "Meetings just to align",
      description: "Half your meetings exist just to sync everyone up on what's happening."
    },
    {
      icon: MessagesSquare,
      title: "Updates scattered across tools",
      description: "Updates live in Slack, email, docs, and people's heads. Never in one place."
    },
    {
      icon: HelpCircle,
      title: "No single source of truth",
      description: "\"What's the status?\" shouldn't require a 30-minute call to answer."
    }
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your team doesn&apos;t have a clear current state
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
