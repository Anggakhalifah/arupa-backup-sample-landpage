import { Card } from "@/components/ui/card";
import { Shield, Lock, Key, FileCheck, Server, Eye } from "lucide-react";

const securityFeatures = [
  {
    category: "Data Security",
    icon: Shield,
    features: [
      "End-to-end encryption (in-transit and at-rest)",
      "Ransomware detection and protection",
      "Redundant backup (local + cloud)",
      "Immutable backup copies",
      "3-2-1 backup best practice compliance"
    ]
  },
  {
    category: "Access Security",
    icon: Key,
    features: [
      "VPN secure connectivity",
      "Multi-factor authentication (MFA)",
      "Role-based access control (RBAC)",
      "Comprehensive access logs",
      "Audit trail and compliance reporting"
    ]
  },
  {
    category: "Infrastructure Security",
    icon: Server,
    features: [
      "Tier-3 data center facilities",
      "Physical security controls",
      "Network-level protection",
      "ISO 27001 certified operations",
      "GDPR and compliance ready"
    ]
  }
];

const Security = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Enterprise-Grade Security Architecture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multi-layered security protecting your data at every level
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((section, index) => (
            <Card 
              key={index}
              className="p-8 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-card"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <section.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <FileCheck className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Eye className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Continuous monitoring and proactive threat detection
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
