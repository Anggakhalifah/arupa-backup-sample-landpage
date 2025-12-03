import { Card } from "@/components/ui/card";
import { RefreshCw, CloudOff, ArrowLeftRight, CheckCircle2, Zap } from "lucide-react";

const drFeatures = [
  {
    icon: Zap,
    title: "Recovery Lokal",
    description: "Instance Recovery VM langsung dari perangkat Arupa Box",
    color: "text-primary"
  },
  {
    icon: CloudOff,
    title: "Failover Cloud DR",
    description: "Failover otomatis atau manual ke site DR Arupa Cloud",
    color: "text-accent"
  },
  {
    icon: ArrowLeftRight,
    title: "Failback to Production",
    description: "Kembali mulus ke site utama setelah pemulihan",
    color: "text-primary"
  },
  {
    icon: CheckCircle2,
    title: "Orkestrasi & Pengujian DR",
    description: "Latihan DR terjadwal untuk validasi kepatuhan RTO/RPO",
    color: "text-accent"
  }
];

const DisasterRecovery = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
            <RefreshCw className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Disaster Recovery (DR)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keberlangsungan bisnis lengkap dengan failover otomatis dan kemampuan recovery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {drFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-card group"
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

export default DisasterRecovery;
