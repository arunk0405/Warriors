import { ReactNode } from "react";
import { Navigation } from "@/components/Navigation";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};