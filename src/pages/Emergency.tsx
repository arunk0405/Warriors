import { Phone, MapPin, User, Heart, AlertTriangle, Clock } from "lucide-react";
import { ThalCareCard } from "@/components/ThalCareCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Emergency() {
  // Mock patient data
  const patientInfo = {
    name: "Sarah Johnson",
    bloodType: "B+",
    age: 28,
    weight: "65 kg",
    hospital: "City General Hospital",
    hospitalAddress: "123 Medical Center Dr, Downtown",
    medicalId: "TH-2024-0892",
    doctorName: "Dr. Maria Rodriguez",
    condition: "Beta Thalassemia Major"
  };

  const emergencyContacts = [
    { name: "Mom - Patricia", phone: "+1 (555) 123-4567", relation: "Mother" },
    { name: "Dad - Robert", phone: "+1 (555) 234-5678", relation: "Father" },
    { name: "Sister - Lisa", phone: "+1 (555) 345-6789", relation: "Sister" },
    { name: "Dr. Rodriguez", phone: "+1 (555) 456-7890", relation: "Primary Doctor" },
  ];

  const recentAlerts = [
    { date: "2 weeks ago", type: "Scheduled Transfusion", status: "Completed" },
    { date: "1 month ago", type: "Iron Chelation", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:ml-64 p-4 pb-20 lg:pb-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-destructive/10 rounded-xl">
              <AlertTriangle className="h-8 w-8 text-destructive animate-soft-pulse" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground animate-fade-in">
                Emergency Center
              </h1>
              <p className="text-muted-foreground text-lg">
                Quick access to emergency care and contacts
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Action Card */}
        <ThalCareCard gradient="emergency" className="mb-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-destructive/20 rounded-full">
                <Heart className="h-12 w-12 text-destructive-foreground animate-gentle-bounce" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-destructive-foreground mb-2">
                Need Blood Transfusion Now?
              </h2>
              <p className="text-destructive-foreground/80 mb-6">
                Click the button below to request immediate blood transfusion
              </p>
            </div>
            <Button variant="emergency" size="xl" className="w-full max-w-md mx-auto font-bold">
              <Heart className="h-6 w-6 mr-3" />
              REQUEST BLOOD NOW
            </Button>
            <div className="text-sm text-destructive-foreground/70">
              This will notify your hospital and emergency contacts
            </div>
          </div>
        </ThalCareCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patient Information */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Medical Information</h2>
            
            <ThalCareCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Patient Details</h3>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Full Name</div>
                    <div className="font-medium">{patientInfo.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Blood Type</div>
                    <Badge className="bg-destructive text-destructive-foreground">
                      {patientInfo.bloodType}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Age</div>
                    <div className="font-medium">{patientInfo.age} years</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Weight</div>
                    <div className="font-medium">{patientInfo.weight}</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">Medical ID</div>
                  <div className="font-medium">{patientInfo.medicalId}</div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">Condition</div>
                  <div className="font-medium">{patientInfo.condition}</div>
                </div>
                
                <div>
                  <div className="text-sm text-muted-foreground">Primary Doctor</div>
                  <div className="font-medium">{patientInfo.doctorName}</div>
                </div>
              </div>
            </ThalCareCard>

            {/* Hospital Information */}
            <ThalCareCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/20 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Hospital Details</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="font-medium">{patientInfo.hospital}</div>
                  <div className="text-sm text-muted-foreground">{patientInfo.hospitalAddress}</div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    Directions
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Hospital
                  </Button>
                </div>
              </div>
            </ThalCareCard>
          </div>

          {/* Emergency Contacts */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Emergency Contacts</h2>
            
            <ThalCareCard>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-success/20 rounded-xl">
                  <Phone className="h-6 w-6 text-success-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Quick Contacts</h3>
              </div>
              
              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{contact.name}</div>
                      <div className="text-xs text-muted-foreground">{contact.relation}</div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button variant="soft" className="w-full mt-4">
                <User className="h-4 w-4 mr-2" />
                Manage Contacts
              </Button>
            </ThalCareCard>

            {/* Recent Emergency History */}
            <ThalCareCard>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-warning/20 rounded-xl">
                  <Clock className="h-6 w-6 text-warning-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Recent Activity</h3>
              </div>
              
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{alert.type}</div>
                      <div className="text-xs text-muted-foreground">{alert.date}</div>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      {alert.status}
                    </Badge>
                  </div>
                ))}
                
                {recentAlerts.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <AlertTriangle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <div className="text-sm">No recent emergency activity</div>
                  </div>
                )}
              </div>
            </ThalCareCard>

            {/* Emergency Instructions */}
            <ThalCareCard className="bg-muted/30">
              <h3 className="font-semibold text-foreground mb-3">Emergency Instructions</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• If experiencing severe fatigue, dizziness, or shortness of breath, seek immediate medical attention</p>
                <p>• Always carry your medical ID and emergency contact information</p>
                <p>• In case of emergency, call 911 or go to the nearest emergency room</p>
                <p>• Inform medical staff about your Thalassemia condition and regular transfusion schedule</p>
              </div>
            </ThalCareCard>
          </div>
        </div>
      </div>
    </div>
  );
}