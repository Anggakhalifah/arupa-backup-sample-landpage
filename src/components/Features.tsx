import { Card } from "@/components/ui/card";
import { 
  Package, 
  Zap, 
  HardDrive, 
  CloudCog, 
  Headphones, 
  TrendingUp, 
  Lock, 
  Wallet 
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Solusi All-in-One",
    description: "Perangkat keras, perangkat lunak, dan Managed Service lengkap dalam satu paket",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Pengelolaan Mudah & Cepat",
    description: "Dashboard intuitif dengan workflow otomatis dan monitoring",
    color: "text-accent"
  },
  {
    icon: HardDrive,
    title: "Backup Lokal + Cloud",
    description: "Kombinasi terbaik: recovery lokal cepat dan penyimpanan cloud aman",
    color: "text-primary"
  },
  {
    icon: CloudCog,
    title: "Disaster Recovery Terintegrasi",
    description: "Failover otomatis ke site DR cloud untuk keberlangsungan bisnis",
    color: "text-accent"
  },
  {
    icon: Headphones,
    title: "Managed Service 24/7",
    description: "Teknisi profesional memantau dan mengelola infrastruktur backup Anda",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Skalabilitas Fleksibel",
    description: "Kembangkan kapasitas backup Anda seiring pertumbuhan bisnis",
    color: "text-accent"
  },
  {
    icon: Lock,
    title: "Keamanan Data Tingkat Tinggi",
    description: "Enkripsi end-to-end, perlindungan ransomware, dan siap kepatuhan",
    color: "text-primary"
  },
  {
    icon: Wallet,
    title: "Efisiensi Biaya",
    description: "Model OPEX menghilangkan investasi besar di awal dan mengurangi TCO",
    color: "text-accent"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fitur Utama & Keunggulan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk perlindungan data komprehensif dan keberlangsungan bisnis
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-card group"
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

export default Features;
