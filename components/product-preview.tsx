"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, AlertTriangle, ArrowRight, Plus, FileText, Play, Volume2 } from "lucide-react"

interface Task {
  id: string
  text: string
  owner: string
  completed: boolean
}

export function ProductPreview() {
  const [confirmed, setConfirmed] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Contact Indian connections about candidates and companies willing to send employees", owner: "Sarah", completed: false },
    { id: "2", text: "Research visa options for skilled foreigners", owner: "Mike", completed: false },
    { id: "3", text: "Start preparing cultural training courses", owner: "Unassigned", completed: false },
  ])
  const [newTaskText, setNewTaskText] = useState("")

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const updateOwner = (id: string, owner: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, owner } : t))
  }

  const addTask = () => {
    if (newTaskText.trim()) {
      setTasks([...tasks, { 
        id: Date.now().toString(), 
        text: newTaskText.trim(), 
        owner: "Unassigned", 
        completed: false 
      }])
      setNewTaskText("")
    }
  }

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your meeting, turned into action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One shared snapshot. Clear next steps. No confusion about who does what.
          </p>
        </div>
        
        {/* App Preview Container */}
        <div className="flex rounded-xl overflow-hidden border border-border shadow-xl bg-card">
          {/* Sidebar */}
          <div className="w-72 bg-primary text-primary-foreground p-4 hidden lg:block">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Wanore</h3>
              <p className="text-xs text-primary-foreground/60">Snapshots</p>
            </div>
            
            <div className="mb-6">
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-2">New Snapshot</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Meeting name" 
                  className="flex-1 text-xs px-2 py-1.5 rounded bg-primary-foreground/10 border-0 text-primary-foreground placeholder:text-primary-foreground/40"
                  disabled
                />
                <Button size="sm" variant="secondary" className="text-xs h-7">Create</Button>
              </div>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs text-primary-foreground/60 uppercase tracking-wide mb-2">Owned</p>
              <div className="p-2 rounded bg-primary-foreground/10 cursor-pointer">
                <p className="text-sm font-medium">Product Team Standup</p>
                <p className="text-xs text-primary-foreground/60">4/8/2026, 9:00 AM</p>
              </div>
              <div className="p-2 rounded hover:bg-primary-foreground/5 cursor-pointer">
                <p className="text-sm">Design Review</p>
                <p className="text-xs text-primary-foreground/60">4/7/2026, 2:30 PM</p>
              </div>
              <div className="p-2 rounded hover:bg-primary-foreground/5 cursor-pointer">
                <p className="text-sm">Sprint Planning</p>
                <p className="text-xs text-primary-foreground/60">4/5/2026, 10:00 AM</p>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-6 bg-muted/20">
            {/* Snapshot Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-card-foreground">Product Team Standup</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    placeholder="email" 
                    className="text-sm px-3 py-1.5 rounded border border-border bg-card w-40"
                    disabled
                  />
                  <Button size="sm" variant="outline" className="text-sm">Share</Button>
                </div>
                <Button 
                  size="sm"
                  onClick={() => setConfirmed(!confirmed)}
                  className={confirmed ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground"}
                >
                  {confirmed ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      Confirmed
                    </>
                  ) : (
                    "Confirm"
                  )}
                </Button>
              </div>
            </div>
            
            {/* What's Next - Primary Section */}
            <Card className="border-2 border-accent/30 bg-card shadow-sm mb-6">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-accent" />
                  <CardTitle className="text-lg font-semibold uppercase tracking-wide">What&apos;s Next</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {tasks.length === 0 ? (
                  <p className="text-muted-foreground text-sm py-2">No clear next steps: add one</p>
                ) : (
                  tasks.map((task) => (
                    <div 
                      key={task.id} 
                      className={`flex items-start gap-3 p-3 rounded-md bg-muted/30 ${task.completed ? "opacity-60" : ""}`}
                    >
                      <Checkbox 
                        checked={task.completed}
                        onCheckedChange={() => toggleTask(task.id)}
                        className="mt-0.5"
                      />
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm text-card-foreground ${task.completed ? "line-through" : ""}`}>
                          {task.text}
                        </p>
                      </div>
                      <input
                        type="text"
                        value={task.owner}
                        onChange={(e) => updateOwner(task.id, e.target.value)}
                        className="text-xs px-2 py-1 rounded bg-muted border-0 text-muted-foreground w-24 text-right focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                  ))
                )}
                
                {/* Add new task */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                    placeholder="Add a task..."
                    className="flex-1 text-sm px-3 py-2 rounded-md bg-muted/50 border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={addTask}
                    disabled={!newTaskText.trim()}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Secondary Sections - 3 Column Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* What's Going On */}
              <Card className="border border-border bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    What&apos;s Going On
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-card-foreground space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    Mobile app redesign in progress, waiting on design review
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    Backend deployment preparation underway
                  </p>
                </CardContent>
              </Card>
              
              {/* What's Done */}
              <Card className="border border-border bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    What&apos;s Done
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-card-foreground space-y-2">
                  <p className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    API integration complete and tested
                  </p>
                  <p className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    User testing scheduled for next week
                  </p>
                </CardContent>
              </Card>
              
              {/* What's Blocked */}
              <Card className="border border-border bg-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    What&apos;s Blocked
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-card-foreground space-y-2">
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    Security review still pending approval
                  </p>
                  <p className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    Legal sign-off needed for new terms
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Audio Recording */}
            <Card className="border border-border bg-card mb-4">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground">Audio Recording</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary">
                  <button className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                    <Play className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                  </button>
                  <div className="flex-1 h-1 bg-primary-foreground/20 rounded-full">
                    <div className="w-1/4 h-full bg-primary-foreground/60 rounded-full" />
                  </div>
                  <span className="text-xs text-primary-foreground/60">12:34</span>
                  <Volume2 className="w-4 h-4 text-primary-foreground/60" />
                </div>
              </CardContent>
            </Card>
            
            {/* Transcription */}
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-card-foreground flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Transcript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground leading-relaxed max-h-32 overflow-y-auto">
                  <p><strong>Sarah:</strong> Alright, quick update on the mobile app. We&apos;re about 70% through the redesign. Main blocker is I need feedback on the new navigation flow.</p>
                  <p className="mt-2"><strong>Mike:</strong> I can review that today. Also, the API integration is done. We&apos;re ready for testing whenever.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
