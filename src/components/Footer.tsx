import { Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Cloud className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">Arupa Backup</div>
              <div className="text-sm text-muted-foreground">by Arupa Cloud Nusantara</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Syarat Layanan
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 Arupa Cloud Nusantara. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
