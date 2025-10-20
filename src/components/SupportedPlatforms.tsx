import { Card } from "@/components/ui/card";
import { 
  Server, 
  Box, 
  Monitor, 
  Container, 
  Database, 
  Briefcase, 
  Cloud, 
  CloudRain,
  Video
} from "lucide-react";

const platforms = [
  {
    icon: Server,
    title: "Server Fisik",
    items: ["Windows", "Linux", "macOS", "Unix"]
  },
  {
    icon: Box,
    title: "Server Virtual",
    items: ["VMware", "Hyper-V", "Nutanix AHV", "Oracle VM", "Proxmox"]
  },
  {
    icon: Monitor,
    title: "Desktop & Workstation",
    items: ["Windows PC", "Mac", "Desktop Linux"]
  },
  {
    icon: Container,
    title: "Microservices",
    items: ["Kubernetes", "Docker", "Platform container"]
  },
  {
    icon: Database,
    title: "NAS & Storage",
    items: ["Perangkat NAS", "Object Storage", "Server file"]
  },
  {
    icon: Briefcase,
    title: "Aplikasi Enterprise",
    items: ["Active Directory", "SAP HANA", "Oracle", "PostgreSQL", "MongoDB"]
  },
  {
    icon: CloudRain,
    title: "Aplikasi SaaS",
    items: ["Microsoft 365", "Entra ID", "Salesforce", "Google Workspace"]
  },
  {
    icon: Cloud,
    title: "Platform Cloud",
    items: ["AWS", "Google Cloud", "Microsoft Azure"]
  },
  {
    icon: Video,
    title: "Data CCTV",
    items: ["Video surveillance", "Pengarsipan rekaman keamanan"]
  }
];

const SupportedPlatforms = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Jenis Data & Platform yang Didukung
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perlindungan komprehensif di seluruh infrastruktur IT Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-gradient-card"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <platform.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                    {platform.title}
                  </h3>
                  <ul className="space-y-2">
                    {platform.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedPlatforms;
