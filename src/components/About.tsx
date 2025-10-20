import { Card } from "@/components/ui/card";
import { Shield, Cloud, Server } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tentang Arupa Backup
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Arupa Backup adalah layanan perlindungan data terkelola yang menggabungkan <strong className="text-foreground">Arupa Box</strong> (perangkat backup on-premise), 
              <strong className="text-foreground"> Arupa Cloud</strong> (situs DR offsite), tools backup & replikasi yang andal, dan keamanan endpoint terintegrasi — 
              semuanya dikelola sepenuhnya oleh teknisi profesional.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pendekatan terintegrasi ini menyediakan <strong className="text-foreground">backup dan recovery lengkap</strong> tanpa kompleksitas infrastruktur.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-8 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-card">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Arupa Box</h3>
            <p className="text-muted-foreground">Perangkat backup on-premise untuk recovery lokal cepat dan perlindungan data</p>
          </Card>
          
          <Card className="p-8 border-2 hover:border-accent/30 transition-all duration-300 hover:shadow-xl bg-gradient-card">
            <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Arupa Cloud</h3>
            <p className="text-muted-foreground">Situs disaster recovery offsite untuk keberlangsungan bisnis dan failover</p>
          </Card>
          
          <Card className="p-8 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-gradient-card">
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Layanan Terkelola</h3>
            <p className="text-muted-foreground">Pengelolaan profesional 24/7 dan keamanan endpoint terintegrasi</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
