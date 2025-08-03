import { Calendar, Heart, Droplets, TrendingUp, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { ThalCareCard } from "@/components/ThalCareCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function Timeline() {
  // Mock data for timeline
  const currentCycle = {
    startDate: "Feb 22, 2024",
    nextTransfusion: "Mar 15, 2024",
    daysPassed: 18,
    totalDays: 21,
    phase: "Monitoring" // Monitoring, Recovery, Critical
  };

  const healthLogs = [
    { date: "Today", mood: "Good", fatigue: "Low", pain: "None", score: 85 },
    { date: "Yesterday", mood: "Fair", fatigue: "Medium", pain: "Mild", score: 78 },
    { date: "2 days ago", mood: "Good", fatigue: "Low", pain: "None", score: 88 },
  ];

  const upcomingEvents = [
    { date: "Mar 15", event: "Blood Transfusion", type: "transfusion" },
    { date: "Mar 10", event: "Pre-transfusion Check", type: "checkup" },
    { date: "Mar 5", event: "Iron Level Test", type: "test" },
  ];

  const progressPercentage = (currentCycle.daysPassed / currentCycle.totalDays) * 100;

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case "Monitoring": return "bg-success text-success-foreground";
      case "Recovery": return "bg-warning text-warning-foreground";
      case "Critical": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "Good": return "😊";
      case "Fair": return "😐";
      case "Poor": return "😔";
      default: return "😊";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:ml-64 p-4 pb-20 lg:pb-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
            Transfusion Timeline
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your adaptive cycle and health phases
          </p>
        </div>

        {/* Current Cycle Overview */}
        <ThalCareCard gradient="primary" className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Current Cycle</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge className={getPhaseColor(currentCycle.phase)}>
                  {currentCycle.phase} Phase
                </Badge>
              </div>
            </div>
            <div className="p-3 bg-background/20 rounded-xl">
              <Calendar className="h-8 w-8 text-foreground" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{currentCycle.startDate}</div>
              <div className="text-sm text-muted-foreground">Cycle Started</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{currentCycle.daysPassed}/{currentCycle.totalDays}</div>
              <div className="text-sm text-muted-foreground">Days Passed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{currentCycle.nextTransfusion}</div>
              <div className="text-sm text-muted-foreground">Next Transfusion</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Cycle Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-background/20" />
          </div>
        </ThalCareCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Health Tracking */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Health Tracking</h2>
            
            {/* Quick Log */}
            <ThalCareCard>
              <h3 className="font-semibold text-foreground mb-4">Log Today's Status</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">😊</div>
                  <div className="text-sm text-muted-foreground">Mood</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💪</div>
                  <div className="text-sm text-muted-foreground">Energy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-muted-foreground">Pain</div>
                </div>
              </div>
              <Button variant="wellness" className="w-full">
                Log Today's Health
              </Button>
            </ThalCareCard>

            {/* Recent Logs */}
            <ThalCareCard>
              <h3 className="font-semibold text-foreground mb-4">Recent Health Logs</h3>
              <div className="space-y-3">
                {healthLogs.map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{getMoodIcon(log.mood)}</span>
                      <div>
                        <div className="font-medium text-sm">{log.date}</div>
                        <div className="text-xs text-muted-foreground">
                          Fatigue: {log.fatigue} • Pain: {log.pain}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-sm">{log.score}/100</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  </div>
                ))}
              </div>
            </ThalCareCard>
          </div>

          {/* Upcoming Events */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Upcoming Events</h2>
            
            <ThalCareCard>
              <h3 className="font-semibold text-foreground mb-4">Schedule</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => {
                  const getEventIcon = (type: string) => {
                    switch (type) {
                      case "transfusion": return <Droplets className="h-5 w-5 text-primary" />;
                      case "checkup": return <Heart className="h-5 w-5 text-success" />;
                      case "test": return <CheckCircle2 className="h-5 w-5 text-accent-foreground" />;
                      default: return <Clock className="h-5 w-5 text-muted-foreground" />;
                    }
                  };

                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="p-2 bg-background rounded-lg">
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{event.event}</div>
                        <div className="text-xs text-muted-foreground">{event.date}</div>
                      </div>
                      {index === 0 && (
                        <Badge variant="outline" className="text-xs">
                          Next
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
              <Button variant="soft" className="w-full mt-4">
                <Calendar className="h-4 w-4 mr-2" />
                View Full Calendar
              </Button>
            </ThalCareCard>

            {/* Cycle History */}
            <ThalCareCard>
              <h3 className="font-semibold text-foreground mb-4">Cycle History</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Cycle #47</div>
                    <div className="text-xs text-muted-foreground">Jan 25 - Feb 22</div>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    Completed
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">Cycle #46</div>
                    <div className="text-xs text-muted-foreground">Dec 28 - Jan 25</div>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    Completed
                  </Badge>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Cycle Analytics
              </Button>
            </ThalCareCard>
          </div>
        </div>
      </div>
    </div>
  );
}