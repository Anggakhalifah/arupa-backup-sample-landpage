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
            Model Berlangganan Fleksibel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Arupa Backup menggunakan berlangganan berbasis OPEX yang mencakup perangkat keras, perangkat lunak, dan Managed Service.
          </p>
        </div>
        
        <Card className="p-8 md:p-12 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 mb-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Harga Bayar Sesuai Pertumbuhan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Harga tergantung pada kapasitas backup yang digunakan — naikkan atau turunkan berdasarkan kebutuhan aktual Anda. 
                Tanpa investasi besar di awal, hanya biaya bulanan yang dapat diprediksi.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Semua Termasuk</h4>
                <p className="text-sm text-muted-foreground">Perangkat keras, perangkat lunak, dan Managed Service dalam satu berlangganan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Tanpa Biaya Tersembunyi</h4>
                <p className="text-sm text-muted-foreground">Harga transparan tanpa biaya mengejutkan atau biaya pemeliharaan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Skalabilitas Fleksibel</h4>
                <p className="text-sm text-muted-foreground">Sesuaikan kapasitas saat data Anda bertambah tanpa gangguan layanan</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">TCO Lebih Rendah</h4>
                <p className="text-sm text-muted-foreground">Total biaya kepemilikan lebih rendah dibandingkan solusi tradisional</p>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Dapatkan penawaran yang disesuaikan berdasarkan kebutuhan spesifik Anda
          </p>
          <Button size="xl" variant="hero" className="group">
            Hubungi Sales untuk Harga
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
