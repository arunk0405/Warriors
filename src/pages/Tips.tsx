import { Lightbulb, Heart, Droplets, Apple, Moon, Sun, Zap } from "lucide-react";
import { ThalCareCard } from "@/components/ThalCareCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import wellnessTree from "@/assets/wellness-tree.png";

export default function Tips() {
  // Mock tips data
  const todaysTip = {
    title: "Stay Hydrated for Better Energy",
    content: "Drinking 8-10 glasses of water daily helps maintain blood flow and can reduce fatigue. Add a slice of lemon for extra vitamin C!",
    category: "Hydration",
    icon: "💧"
  };

  const tipCategories = [
    {
      name: "Nutrition",
      icon: Apple,
      color: "bg-success/10 text-success-foreground",
      tips: [
        {
          title: "Iron-Rich Foods to Embrace",
          content: "Focus on lean proteins like chicken and fish. Dark leafy greens like spinach are excellent sources of folate.",
          isNew: false
        },
        {
          title: "Calcium for Strong Bones",
          content: "Include dairy products or calcium-fortified alternatives. This helps counter potential bone density issues.",
          isNew: true
        }
      ]
    },
    {
      name: "Energy Management",
      icon: Zap,
      color: "bg-warning/10 text-warning-foreground",
      tips: [
        {
          title: "Listen to Your Body",
          content: "Rest when you feel tired. Short 20-minute naps can be refreshing without disrupting nighttime sleep.",
          isNew: false
        },
        {
          title: "Gentle Exercise Benefits",
          content: "Light walking or stretching can boost energy. Even 10 minutes of movement helps circulation.",
          isNew: false
        }
      ]
    },
    {
      name: "Sleep Wellness",
      icon: Moon,
      color: "bg-primary/10 text-primary-foreground",
      tips: [
        {
          title: "Create a Sleep Sanctuary",
          content: "Keep your bedroom cool and dark. A consistent bedtime routine signals your body it's time to rest.",
          isNew: true
        },
        {
          title: "Managing Pre-Transfusion Anxiety",
          content: "Try deep breathing exercises before appointments. Listening to calming music can also help.",
          isNew: false
        }
      ]
    },
    {
      name: "Emotional Wellbeing",
      icon: Heart,
      color: "bg-accent/20 text-accent-foreground",
      tips: [
        {
          title: "Connect with Others",
          content: "Join Thalassemia support groups online or locally. Sharing experiences with others who understand helps.",
          isNew: false
        },
        {
          title: "Practice Gratitude",
          content: "Write down three things you're grateful for each day. This simple practice can improve mood significantly.",
          isNew: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:ml-64 p-4 pb-20 lg:pb-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
                Daily Tips & Advice
              </h1>
              <p className="text-muted-foreground text-lg">
                Doctor-approved wellness guidance for your journey
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src={wellnessTree} 
                alt="Wellness and growth" 
                className="w-16 h-16 rounded-xl opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Today's Featured Tip */}
        <ThalCareCard gradient="wellness" className="mb-8">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-accent/20 rounded-full flex-shrink-0">
              <span className="text-3xl">{todaysTip.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-accent text-accent-foreground">
                  Today's Tip
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {todaysTip.category}
                </Badge>
              </div>
              <h2 className="text-xl font-semibold text-accent-foreground mb-3">
                {todaysTip.title}
              </h2>
              <p className="text-accent-foreground/90 mb-4">
                {todaysTip.content}
              </p>
              <Button variant="outline" size="sm" className="bg-accent-foreground/10">
                <Heart className="h-4 w-4 mr-2" />
                Mark as Helpful
              </Button>
            </div>
          </div>
        </ThalCareCard>

        {/* Tips Categories */}
        <div className="space-y-8">
          <h2 className="text-xl font-semibold text-foreground">Wellness Categories</h2>
          
          {tipCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.tips.map((tip, tipIndex) => (
                    <ThalCareCard key={tipIndex}>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h4 className="font-semibold text-foreground">{tip.title}</h4>
                          {tip.isNew && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{tip.content}</p>
                        <div className="flex gap-2">
                          <Button variant="soft" size="sm">
                            👍 Helpful
                          </Button>
                          <Button variant="ghost" size="sm">
                            📤 Share
                          </Button>
                        </div>
                      </div>
                    </ThalCareCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <ThalCareCard>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary animate-gentle-bounce" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Request Specific Tips</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Have a question? Ask your healthcare team for personalized advice.
                </p>
                <Button variant="outline" className="w-full">
                  Ask a Question
                </Button>
              </div>
            </div>
          </ThalCareCard>

          <ThalCareCard>
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="p-3 bg-success/10 rounded-full">
                  <Heart className="h-8 w-8 text-success animate-soft-pulse" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Daily Wellness Check</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Quick mood and energy assessment to track your progress.
                </p>
                <Button variant="wellness" className="w-full">
                  Start Check-in
                </Button>
              </div>
            </div>
          </ThalCareCard>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">24</div>
            <div className="text-sm text-muted-foreground">Tips Read</div>
          </ThalCareCard>
          
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-success mb-2">3</div>
            <div className="text-sm text-muted-foreground">New This Week</div>
          </ThalCareCard>
          
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-accent-foreground mb-2">12</div>
            <div className="text-sm text-muted-foreground">Marked Helpful</div>
          </ThalCareCard>
          
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-warning-foreground mb-2">7</div>
            <div className="text-sm text-muted-foreground">Day Streak</div>
          </ThalCareCard>
        </div>
      </div>
    </div>
  );
}