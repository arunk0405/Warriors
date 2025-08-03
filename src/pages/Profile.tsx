import { User, Calendar, Heart, Phone, MapPin, Edit3, Shield, Download } from "lucide-react";
import { ThalCareCard } from "@/components/ThalCareCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  // Mock user data
  const userProfile = {
    name: "Sarah Johnson",
    age: 28,
    bloodType: "B+",
    weight: "65 kg",
    height: "165 cm",
    condition: "Beta Thalassemia Major",
    diagnosisDate: "June 2018",
    medicalId: "TH-2024-0892",
    nextAppointment: "March 15, 2024",
    primaryDoctor: "Dr. Maria Rodriguez",
    hospital: "City General Hospital",
    emergency1: "Patricia Johnson (Mother)",
    emergency1Phone: "+1 (555) 123-4567",
    emergency2: "Robert Johnson (Father)",
    emergency2Phone: "+1 (555) 234-5678"
  };

  const transfusionHistory = [
    { date: "Feb 22, 2024", location: "City General Hospital", status: "Completed" },
    { date: "Jan 25, 2024", location: "City General Hospital", status: "Completed" },
    { date: "Dec 28, 2023", location: "City General Hospital", status: "Completed" },
    { date: "Nov 30, 2023", location: "City General Hospital", status: "Completed" },
    { date: "Oct 28, 2023", location: "City General Hospital", status: "Completed" },
  ];

  const healthMetrics = {
    totalTransfusions: 47,
    avgCycleLength: 21,
    lastHemoglobin: "9.2 g/dL",
    ironSaturation: "85%"
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:ml-64 p-4 pb-20 lg:pb-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
                Profile
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your personal and medical information
              </p>
            </div>
            <Button variant="outline">
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Information */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
            
            <ThalCareCard gradient="primary">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-background/20 rounded-full flex-shrink-0">
                  <User className="h-8 w-8 text-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {userProfile.name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Age</div>
                      <div className="font-medium text-foreground">{userProfile.age} years</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Blood Type</div>
                      <Badge className="bg-background text-foreground border border-border">
                        {userProfile.bloodType}
                      </Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Weight</div>
                      <div className="font-medium text-foreground">{userProfile.weight}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Height</div>
                      <div className="font-medium text-foreground">{userProfile.height}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ThalCareCard>

            {/* Medical Information */}
            <ThalCareCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-destructive/10 rounded-xl">
                  <Heart className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="font-semibold text-foreground">Medical Information</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Condition</div>
                    <div className="font-medium">{userProfile.condition}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Diagnosis Date</div>
                    <div className="font-medium">{userProfile.diagnosisDate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Medical ID</div>
                    <div className="font-medium">{userProfile.medicalId}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Primary Doctor</div>
                    <div className="font-medium">{userProfile.primaryDoctor}</div>
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <div className="text-sm text-muted-foreground mb-2">Hospital</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{userProfile.hospital}</span>
                  </div>
                </div>
              </div>
            </ThalCareCard>

            {/* Emergency Contacts */}
            <ThalCareCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-warning/10 rounded-xl">
                  <Phone className="h-6 w-6 text-warning-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Emergency Contacts</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{userProfile.emergency1}</div>
                    <div className="text-xs text-muted-foreground">{userProfile.emergency1Phone}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{userProfile.emergency2}</div>
                    <div className="text-xs text-muted-foreground">{userProfile.emergency2Phone}</div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            </ThalCareCard>
          </div>

          {/* Sidebar with Stats and History */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Health Overview</h2>
            
            {/* Health Metrics */}
            <ThalCareCard gradient="wellness">
              <h3 className="font-semibold text-success-foreground mb-4">Key Metrics</h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-foreground">{healthMetrics.totalTransfusions}</div>
                  <div className="text-sm text-foreground/70">Total Transfusions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success-foreground">{healthMetrics.avgCycleLength}</div>
                  <div className="text-sm text-foreground/70">Avg Cycle (days)</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-success-foreground">{healthMetrics.lastHemoglobin}</div>
                  <div className="text-sm text-foreground/70">Last Hemoglobin</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-success-foreground">{healthMetrics.ironSaturation}</div>
                  <div className="text-sm text-foreground/70">Iron Saturation</div>
                </div>
              </div>
            </ThalCareCard>

            {/* Recent Transfusions */}
            <ThalCareCard>
              <h3 className="font-semibold text-foreground mb-4">Recent Transfusions</h3>
              <div className="space-y-3">
                {transfusionHistory.slice(0, 3).map((transfusion, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{transfusion.date}</div>
                      <div className="text-xs text-muted-foreground">{transfusion.location}</div>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      {transfusion.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="soft" className="w-full mt-4">
                <Calendar className="h-4 w-4 mr-2" />
                View Full History
              </Button>
            </ThalCareCard>

            {/* Quick Actions */}
            <ThalCareCard>
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Medical Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Settings
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Edit3 className="h-4 w-4 mr-2" />
                  Update Information
                </Button>
              </div>
            </ThalCareCard>
          </div>
        </div>
      </div>
    </div>
  );
}