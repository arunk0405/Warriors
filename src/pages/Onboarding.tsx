import { useState } from "react";
import { ChevronRight, Heart, Calendar, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThalCareCard } from "@/components/ThalCareCard";
import thalcareLogo from "@/assets/thalcare-logo.png";
import careHands from "@/assets/care-hands.png";
import wellnessTree from "@/assets/wellness-tree.png";

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to ThalCare",
      subtitle: "Your compassionate health companion",
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img src={thalcareLogo} alt="ThalCare Logo" className="w-24 h-24 animate-gentle-bounce" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground">
              Hello! 🌸
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              We're here to support you on your Thalassemia journey with gentle care, understanding, and comprehensive tracking.
            </p>
            <div className="flex justify-center">
              <img src={careHands} alt="Caring support" className="w-48 h-36 object-cover rounded-xl opacity-80" />
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Track Your Journey",
      subtitle: "Adaptive cycle monitoring made simple",
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Calendar className="h-16 w-16 text-primary" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Personalized Timeline
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Your transfusion cycle isn't fixed at 4 weeks. We adapt to your unique schedule, helping you track health phases from monitoring to recovery.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="p-3 bg-success/10 rounded-lg">
                <div className="text-sm font-medium text-success-foreground">Monitoring</div>
                <div className="text-xs text-muted-foreground">Feeling good</div>
              </div>
              <div className="p-3 bg-warning/10 rounded-lg">
                <div className="text-sm font-medium text-warning-foreground">Recovery</div>
                <div className="text-xs text-muted-foreground">Rest time</div>
              </div>
              <div className="p-3 bg-destructive/10 rounded-lg">
                <div className="text-sm font-medium text-destructive-foreground">Critical</div>
                <div className="text-xs text-muted-foreground">Need care</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Your Wellness Hub",
      subtitle: "Everything you need in one place",
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img src={wellnessTree} alt="Wellness and growth" className="w-32 h-32 rounded-xl" />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Complete Care Management
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Store medical reports, track daily mood, access emergency contacts, and receive personalized wellness tips from healthcare professionals.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <FileText className="h-5 w-5 text-accent-foreground" />
                <span className="text-sm font-medium">Medical Reports</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Daily Tracking</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Shield className="h-5 w-5 text-destructive" />
                <span className="text-sm font-medium">Emergency Care</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                <Heart className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Wellness Tips</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "You're All Set!",
      subtitle: "Welcome to your health journey",
      content: (
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="p-4 bg-success/10 rounded-full">
              <Heart className="h-16 w-16 text-success animate-gentle-bounce" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">
              Ready to Begin! 🎉
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              You're now part of the ThalCare community. We're here to support you every step of the way with compassion, understanding, and the tools you need to thrive.
            </p>
            <div className="p-4 bg-muted/30 rounded-lg max-w-sm mx-auto">
              <p className="text-sm text-muted-foreground italic">
                "Your journey matters, your health matters, and you're never alone in this."
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ThalCareCard gradient="primary" className="animate-fade-in">
          <div className="min-h-[500px] flex flex-col">
            {/* Progress Indicator */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-8 rounded-full transition-all duration-300 ${
                      index <= currentStep
                        ? "bg-primary-foreground"
                        : "bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-primary-foreground text-center mb-2">
                  {steps[currentStep].title}
                </h3>
                <p className="text-primary-foreground/80 text-center text-sm">
                  {steps[currentStep].subtitle}
                </p>
              </div>

              <div className="mb-8">
                {steps[currentStep].content}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                Skip
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-sm text-primary-foreground/70">
                  {currentStep + 1} of {steps.length}
                </span>
              </div>

              <Button
                variant="outline"
                onClick={handleNext}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                {currentStep === steps.length - 1 ? "Get Started" : "Next"}
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </ThalCareCard>
      </div>
    </div>
  );
}