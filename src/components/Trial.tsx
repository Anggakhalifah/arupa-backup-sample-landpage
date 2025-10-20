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
              Coba Arupa Backup Tanpa Risiko
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rasakan kekuatan perlindungan data komprehensif dengan dukungan teknis penuh
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Akses Fitur Lengkap</h4>
                <p className="text-sm text-muted-foreground">Akses lengkap ke semua kemampuan Arupa Backup</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dukungan Teknis</h4>
                <p className="text-sm text-muted-foreground">Tim dukungan dedikasi tersedia selama periode trial</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Trial 14-30 Hari</h4>
                <p className="text-sm text-muted-foreground">Periode trial fleksibel untuk mengevaluasi solusi secara menyeluruh</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Tanpa Komitmen</h4>
                <p className="text-sm text-muted-foreground">Tidak perlu kartu kredit untuk memulai trial Anda</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="xl" variant="hero">
              Mulai Trial Gratis
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Trial;
