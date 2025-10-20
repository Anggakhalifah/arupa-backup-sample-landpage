import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <DollarSign className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Flexible Subscription Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Arupa Backup uses an OPEX-based subscription that includes hardware, software, and managed service.
          </p>
        </div>
        
        <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Pay-As-You-Grow Pricing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pricing depends on backup capacity used — scale up or down based on your actual needs. 
                No large upfront investments, just predictable monthly costs.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">All-Inclusive</h4>
                <p className="text-sm text-muted-foreground">Hardware, software, and managed service in one subscription</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">No Hidden Costs</h4>
                <p className="text-sm text-muted-foreground">Transparent pricing with no surprise charges or maintenance fees</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Flexible Scaling</h4>
                <p className="text-sm text-muted-foreground">Adjust capacity as your data grows without service disruption</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Lower TCO</h4>
                <p className="text-sm text-muted-foreground">Reduced total cost of ownership compared to traditional solutions</p>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Get a customized quote based on your specific requirements
          </p>
          <Button size="xl" variant="hero" className="group">
            Contact Sales for Pricing
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
