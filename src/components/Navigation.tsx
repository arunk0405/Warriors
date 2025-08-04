import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Calendar, FileText, AlertTriangle, Lightbulb, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import thalcareLogo from "@/assets/thalcare-logo.png";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Timeline", path: "/timeline" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: AlertTriangle, label: "Emergency", path: "/emergency" },
  { icon: Lightbulb, label: "Tips", path: "/tips" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden bg-background/95 backdrop-blur-sm border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={thalcareLogo} alt="Need for Care" className="w-8 h-8" />
            <h1 className="text-lg font-semibold text-primary">Need for Care</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <nav className="pt-20 px-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground shadow-card"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-background border-r border-border/50">
        <div className="flex items-center gap-3 p-6 border-b border-border/50">
          <img src={thalcareLogo} alt="Need for Care" className="w-10 h-10" />
          <h1 className="text-xl font-semibold text-primary">Need for Care</h1>
        </div>
        
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground shadow-card"
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>

      {/* Bottom Navigation for Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border/50 p-2 z-30">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-300",
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
};