import { XCircle, Eye, Compass, Users } from "lucide-react"

export function Differentiation() {
  const benefits = [
    {
      icon: XCircle,
      title: "No more status meetings",
      description: "Replace recurring syncs with a snapshot your whole team can see."
    },
    {
      icon: Eye,
      title: "See blockers instantly",
      description: "Know what's stuck before it becomes a bigger problem."
    },
    {
      icon: Compass,
      title: "One clear source of truth",
      description: "Everyone sees the same state. No conflicting updates."
    },
    {
      icon: Users,
      title: "Align without constant check-ins",
      description: "Your team stays in sync without interrupting each other."
    }
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why teams switch to Wanore
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
