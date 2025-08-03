import { Calendar, Heart, FileText, TrendingUp, Clock } from "lucide-react";
import { ThalCareCard } from "@/components/ThalCareCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import careHands from "@/assets/care-hands.png";

export default function Dashboard() {
  // Mock data - in real app this would come from API/state
  const nextTransfusion = "March 15, 2024";
  const daysSinceLastTransfusion = 18;
  const adaptiveCycle = 21; // days
  const healthScore = 85;
  const patientName = "Sarah";

  const progressPercentage = (daysSinceLastTransfusion / adaptiveCycle) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:ml-64 p-4 pb-20 lg:pb-4">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Hello, {patientName} 🌸
              </h1>
              <p className="text-muted-foreground text-lg">
                You're doing great! Here's your health overview.
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src={careHands} 
                alt="Caring hands" 
                className="w-24 h-18 object-cover rounded-xl opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Key Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Next Transfusion Card */}
          <ThalCareCard className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Next Transfusion</h3>
                  <p className="text-sm text-muted-foreground">Scheduled appointment</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-2xl font-bold text-primary">{nextTransfusion}</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress ({daysSinceLastTransfusion}/{adaptiveCycle} days)</span>
                  <span className="text-muted-foreground">{Math.round(progressPercentage)}%</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
              <Button variant="gentle" size="sm" className="w-full">
                <Clock className="h-4 w-4 mr-2" />
                View Timeline
              </Button>
            </div>
          </ThalCareCard>

          {/* Health Status Card */}
          <ThalCareCard gradient="wellness">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-success/20 rounded-xl">
                  <Heart className="h-6 w-6 text-success-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Health Score</h3>
                  <p className="text-sm text-muted-foreground">Today's wellness</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-success-foreground">{healthScore}/100</div>
              <div className="flex items-center gap-2 text-sm text-success-foreground">
                <TrendingUp className="h-4 w-4" />
                <span>+5% from yesterday</span>
              </div>
              <Button variant="wellness" size="sm" className="w-full">
                Log Today's Mood
              </Button>
            </div>
          </ThalCareCard>

          {/* Recent Reports Card */}
          <ThalCareCard>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <FileText className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Recent Reports</h3>
                  <p className="text-sm text-muted-foreground">Medical documents</p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="text-sm font-medium">Blood Test Results</div>
                <div className="text-xs text-muted-foreground">2 days ago</div>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="text-sm font-medium">Doctor's Note</div>
                <div className="text-xs text-muted-foreground">1 week ago</div>
              </div>
              <Button variant="soft" size="sm" className="w-full">
                View All Reports
              </Button>
            </div>
          </ThalCareCard>
        </div>

        {/* Doctor's Note Section */}
        <ThalCareCard className="mb-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
              <Heart className="h-6 w-6 text-primary animate-gentle-bounce" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Latest Note from Dr. Johnson</h3>
              <p className="text-muted-foreground mb-4">
                "Your recent test results look great! Keep maintaining your iron levels with the prescribed supplements. 
                Remember to stay hydrated and get adequate rest between transfusions."
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>2 hours ago</span>
              </div>
            </div>
          </div>
        </ThalCareCard>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="emergency" size="lg" className="flex flex-col gap-2 h-20">
            <AlertTriangle className="h-6 w-6" />
            <span className="text-sm">Emergency</span>
          </Button>
          <Button variant="wellness" size="lg" className="flex flex-col gap-2 h-20">
            <Calendar className="h-6 w-6" />
            <span className="text-sm">Timeline</span>
          </Button>
          <Button variant="soft" size="lg" className="flex flex-col gap-2 h-20">
            <FileText className="h-6 w-6" />
            <span className="text-sm">Reports</span>
          </Button>
          <Button variant="gentle" size="lg" className="flex flex-col gap-2 h-20">
            <Lightbulb className="h-6 w-6" />
            <span className="text-sm">Tips</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

// Missing import
import { AlertTriangle, Lightbulb } from "lucide-react";