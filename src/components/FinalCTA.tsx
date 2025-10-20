import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMTItMS43ODgtNC00LTRDMTY3ODggMTIgMTIgMTYuNzg4IDEyIDI4YzAgMi4yMTItMS43ODggNC00IDQtMi4yMTIgMC00IDEuNzg4LTQgNCAwIDIuMjEyIDEuNzg4IDQgNCA0IDguODM3IDAgMTYgNy4xNjMgMTYgMTZoNGMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMFYxMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Siap Melindungi Data Bisnis Anda?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan organisasi yang mempercayai Arupa Backup untuk perlindungan data lengkap dan keberlangsungan bisnis
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="group bg-white text-primary hover:bg-white/90">
              Hubungi Sales
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="herOutline" size="xl" className="group border-white/40 text-white hover:bg-white/10">
              <Play className="mr-2 group-hover:scale-110 transition-transform" />
              Minta Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
