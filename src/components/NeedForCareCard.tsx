import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NeedForCareCardProps {
  children: ReactNode;
  className?: string;
  gradient?: "primary" | "wellness" | "emergency";
  hover?: boolean;
}

export const NeedForCareCard = ({ 
  children, 
  className, 
  gradient,
  hover = true 
}: NeedForCareCardProps) => {
  return (
    <div
      className={cn(
        "thal-card animate-fade-in",
        gradient && `thal-gradient-${gradient}`,
        hover && "hover:transform hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
};
