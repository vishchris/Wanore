"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Clock, AlertTriangle, ArrowRight, Plus, Check, FileText } from "lucide-react"

interface Task {
  id: string
  text: string
  owner: string
  completed: boolean
}

export function ProductPreview() {
  const [confirmed, setConfirmed] = useState(false)
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", text: "Launch beta to internal users by Friday", owner: "Sarah", completed: false },
    { id: "2", text: "Schedule design review with stakeholders", owner: "Mike", completed: false },
    { id: "3", text: "Prepare feedback collection form", owner: "Unassigned", completed: true },
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your meeting, turned into action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            One shared snapshot. Clear next steps. No confusion about who does what.
          </p>
        </div>
        
        {/* Snapshot Card */}
        <Card className="border-2 border-primary/20 bg-card shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-4">
            <div>
              <CardTitle className="text-xl font-semibold text-card-foreground">
                Product Team Standup
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">Tuesday, April 8</p>
            </div>
            <Button 
              variant={confirmed ? "default" : "outline"}
              size="sm"
              onClick={() => setConfirmed(!confirmed)}
              className={confirmed ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
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
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* What's Next - Primary Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-card-foreground">What&apos;s Next</h3>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                {tasks.length === 0 ? (
                  <p className="text-muted-foreground text-sm py-2">No clear next steps: add one</p>
                ) : (
                  tasks.map((task) => (
                    <div 
                      key={task.id} 
                      className={`flex items-start gap-3 p-3 rounded-md bg-card border border-border ${task.completed ? "opacity-60" : ""}`}
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
                    className="flex-1 text-sm px-3 py-2 rounded-md bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
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
              </div>
            </div>
            
            {/* Secondary Sections Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* What's Going On */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                  <Clock className="w-4 h-4 text-accent" />
                  What&apos;s going on
                </div>
                <p className="text-sm text-muted-foreground">
                  Mobile app redesign in progress. Waiting on design review from Sarah.
                </p>
              </div>
              
              {/* What's Done */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  What&apos;s done
                </div>
                <p className="text-sm text-muted-foreground">
                  API integration complete. User testing scheduled for next week.
                </p>
              </div>
              
              {/* What's Blocked */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  What&apos;s blocked
                </div>
                <p className="text-sm text-muted-foreground">
                  Backend deployment waiting on security review approval.
                </p>
              </div>
            </div>
            
            {/* Transcription */}
            <div className="pt-4 border-t border-border">
              <details className="group">
                <summary className="flex items-center gap-2 text-sm font-medium text-muted-foreground cursor-pointer hover:text-card-foreground">
                  <FileText className="w-4 h-4" />
                  View full transcription
                </summary>
                <div className="mt-3 p-4 rounded-md bg-muted/50 text-sm text-muted-foreground leading-relaxed max-h-48 overflow-y-auto">
                  <p className="mb-2"><strong>Sarah:</strong> Alright, quick update on the mobile app. We&apos;re about 70% through the redesign. Main blocker is I need feedback on the new navigation flow.</p>
                  <p className="mb-2"><strong>Mike:</strong> I can review that today. Also, the API integration is done. We&apos;re ready for testing whenever.</p>
                  <p className="mb-2"><strong>Alex:</strong> Backend deployment is still stuck. Security team hasn&apos;t approved the new auth changes yet.</p>
                  <p><strong>Sarah:</strong> Okay, let&apos;s aim to launch beta internally by Friday. I&apos;ll send out a feedback form once we&apos;re live.</p>
                </div>
              </details>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
