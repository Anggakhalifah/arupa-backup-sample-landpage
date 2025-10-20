import { Card } from "@/components/ui/card";
import { 
  Package, 
  Zap, 
  HardDrive, 
  CloudCog, 
  Headphones, 
  TrendingUp, 
  Lock, 
  Wallet 
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "All-in-One Solution",
    description: "Complete hardware, software, and managed service in a single package",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Easy & Fast Management",
    description: "Intuitive dashboard with automated workflows and monitoring",
    color: "text-accent"
  },
  {
    icon: HardDrive,
    title: "Local + Cloud Backup",
    description: "Best of both worlds: fast local recovery and secure cloud storage",
    color: "text-primary"
  },
  {
    icon: CloudCog,
    title: "Integrated Disaster Recovery",
    description: "Automated failover to cloud DR site for business continuity",
    color: "text-accent"
  },
  {
    icon: Headphones,
    title: "24/7 Managed Service",
    description: "Professional engineers monitoring and managing your backup infrastructure",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Flexible Scalability",
    description: "Grow your backup capacity as your business expands",
    color: "text-accent"
  },
  {
    icon: Lock,
    title: "High-Level Data Security",
    description: "End-to-end encryption, ransomware protection, and compliance ready",
    color: "text-primary"
  },
  {
    icon: Wallet,
    title: "Cost Efficiency",
    description: "OPEX model eliminates large upfront investments and reduces TCO",
    color: "text-accent"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Features & Advantages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for comprehensive data protection and business continuity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-card group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
