import { Card } from "@/components/ui/card";
import { RefreshCw, CloudOff, ArrowLeftRight, CheckCircle2, Zap } from "lucide-react";

const drFeatures = [
  {
    icon: Zap,
    title: "Local Recovery",
    description: "Instant VM recovery directly from Arupa Box appliance",
    color: "text-primary"
  },
  {
    icon: CloudOff,
    title: "Cloud DR Failover",
    description: "Automatic or manual failover to Arupa Cloud DR site",
    color: "text-accent"
  },
  {
    icon: ArrowLeftRight,
    title: "Failback to Primary",
    description: "Seamless return to primary site after recovery",
    color: "text-primary"
  },
  {
    icon: CheckCircle2,
    title: "DR Orchestration & Testing",
    description: "Scheduled DR drills to validate RTO/RPO compliance",
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
            Complete business continuity with automated failover and recovery capabilities
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
        
        <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              How Arupa DR Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Continuous Replication</h4>
                <p className="text-sm text-muted-foreground">
                  Data continuously replicated from Arupa Box to Arupa Cloud DR site
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Automated Failover</h4>
                <p className="text-sm text-muted-foreground">
                  In case of primary site failure, workloads automatically activate in cloud
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Seamless Failback</h4>
                <p className="text-sm text-muted-foreground">
                  Once primary site is restored, workloads return with zero data loss
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DisasterRecovery;
