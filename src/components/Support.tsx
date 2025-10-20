import { Card } from "@/components/ui/card";
import { Headphones, Mail, Phone, MessageSquare, Shield, Clock } from "lucide-react";

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "support@arupacloud.com",
    available: "24/7"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Direct line to our technical team",
    available: "Business hours"
  },
  {
    icon: MessageSquare,
    title: "Ticket Portal",
    description: "Track and manage support requests",
    available: "24/7"
  }
];

const Support = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Headphones className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            24/7 Technical Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Managed Service team monitors proactively to prevent issues before they impact your operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportChannels.map((channel, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-gradient-card text-center"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <channel.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {channel.title}
              </h3>
              <p className="text-muted-foreground mb-2 text-sm">
                {channel.description}
              </p>
              <div className="inline-flex items-center gap-1 text-xs text-accent font-medium">
                <Clock className="w-3 h-3" />
                {channel.available}
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="p-8 border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Proactive Monitoring & Management
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our expert engineers continuously monitor your backup infrastructure, system health, and performance metrics. 
                We identify and resolve potential issues before they become problems, ensuring your data protection is always optimal.
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                  Automated health checks
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                  Performance optimization
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                  Incident response
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                  Regular reporting
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Support;
