import { Card } from "@/components/ui/card";
import { Shield, Cloud, Server } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Arupa Backup
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Arupa Backup is a managed data protection service that combines <strong className="text-foreground">Arupa Box</strong> (on-premise backup appliance), 
              <strong className="text-foreground"> Arupa Cloud</strong> (offsite DR site), reliable backup & replication tools, and built-in endpoint security — 
              fully managed by professional engineers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This integrated approach provides <strong className="text-foreground">complete backup and recovery</strong> without infrastructure complexity.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-8 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-card">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Arupa Box</h3>
            <p className="text-muted-foreground">On-premise backup appliance for fast local recovery and data protection</p>
          </Card>
          
          <Card className="p-8 border-2 hover:border-accent/30 transition-all duration-300 hover:shadow-xl bg-gradient-card">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Arupa Cloud</h3>
            <p className="text-muted-foreground">Offsite disaster recovery site for business continuity and failover</p>
          </Card>
          
          <Card className="p-8 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-card">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Managed Service</h3>
            <p className="text-muted-foreground">24/7 professional management and endpoint security built-in</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
