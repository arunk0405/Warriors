import { FileText, Upload, Download, MessageSquare, Calendar, Plus } from "lucide-react";
import { ThalCareCard } from "@/components/ThalCareCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Reports() {
  // Mock reports data
  const reports = [
    {
      id: 1,
      title: "Blood Test Results",
      date: "March 1, 2024",
      type: "Lab Report",
      doctorNote: "Hemoglobin levels stable. Continue current iron chelation therapy.",
      status: "New",
      size: "2.3 MB"
    },
    {
      id: 2,
      title: "Transfusion Summary",
      date: "February 22, 2024",
      type: "Procedure Report",
      doctorNote: "Successful transfusion. Patient tolerated well. Next appointment in 3 weeks.",
      status: "Reviewed",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Iron Levels Assessment",
      date: "February 15, 2024",
      type: "Lab Report",
      doctorNote: "Iron levels elevated. Adjusting Deferasirox dosage. Monitor for side effects.",
      status: "Reviewed",
      size: "1.2 MB"
    },
    {
      id: 4,
      title: "Cardiac Function Check",
      date: "January 28, 2024",
      type: "Specialist Report",
      doctorNote: "Cardiac function normal. Iron-related complications minimal. Continue monitoring.",
      status: "Reviewed",
      size: "3.1 MB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New": return "bg-primary text-primary-foreground";
      case "Reviewed": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Lab Report": return "🧪";
      case "Procedure Report": return "🏥";
      case "Specialist Report": return "👨‍⚕️";
      default: return "📄";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="lg:ml-64 p-4 pb-20 lg:pb-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">
                Medical Reports
              </h1>
              <p className="text-muted-foreground text-lg">
                View and manage your medical documents
              </p>
            </div>
            <Button variant="gentle" size="lg">
              <Plus className="h-5 w-5 mr-2" />
              Upload Report
            </Button>
          </div>
        </div>

        {/* Upload Section */}
        <ThalCareCard gradient="wellness" className="mb-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 bg-accent/20 rounded-full">
                <Upload className="h-8 w-8 text-accent-foreground" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-accent-foreground mb-2">
                Upload New Report
              </h2>
              <p className="text-accent-foreground/80 mb-4">
                Scan or upload your latest medical documents
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="outline" className="bg-accent-foreground/10">
                <Upload className="h-4 w-4 mr-2" />
                Choose Files
              </Button>
              <Button variant="outline" className="bg-accent-foreground/10">
                📷 Scan with Camera
              </Button>
            </div>
          </div>
        </ThalCareCard>

        {/* Reports List */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Your Reports</h2>
          
          <div className="space-y-4">
            {reports.map((report) => (
              <ThalCareCard key={report.id}>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted/50 rounded-xl flex-shrink-0">
                    <span className="text-2xl">{getTypeIcon(report.type)}</span>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{report.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground">{report.type}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{report.size}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{report.date}</span>
                    </div>
                    
                    {report.doctorNote && (
                      <div className="p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-start gap-2">
                          <MessageSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-primary mb-1">Doctor's Note</div>
                            <p className="text-sm text-muted-foreground">{report.doctorNote}</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button variant="soft" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm">
                        📤 Share
                      </Button>
                    </div>
                  </div>
                </div>
              </ThalCareCard>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-primary mb-2">{reports.length}</div>
            <div className="text-sm text-muted-foreground">Total Reports</div>
          </ThalCareCard>
          
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-success mb-2">
              {reports.filter(r => r.status === "New").length}
            </div>
            <div className="text-sm text-muted-foreground">New Reports</div>
          </ThalCareCard>
          
          <ThalCareCard className="text-center">
            <div className="text-2xl font-bold text-accent-foreground mb-2">3</div>
            <div className="text-sm text-muted-foreground">This Month</div>
          </ThalCareCard>
        </div>
      </div>
    </div>
  );
}