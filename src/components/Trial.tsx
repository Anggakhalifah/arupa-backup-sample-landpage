import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, CheckCircle2, Clock } from "lucide-react";

const Trial = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="p-8 md:p-12 border-2 border-primary/30 bg-gradient-to-br from-background to-primary/5 shadow-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Try Arupa Backup Risk-Free
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of comprehensive data protection with full technical support
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Full Feature Access</h4>
                <p className="text-sm text-muted-foreground">Complete access to all Arupa Backup capabilities</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Technical Support</h4>
                <p className="text-sm text-muted-foreground">Dedicated support team available throughout trial</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">14-30 Day Trial</h4>
                <p className="text-sm text-muted-foreground">Flexible trial period to thoroughly evaluate the solution</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">No Commitment</h4>
                <p className="text-sm text-muted-foreground">No credit card required to start your trial</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="xl" variant="hero">
              Start Free Trial
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Trial;
