import { Button } from "@/components/ui/button";
import { Wrench, Building, Server, Phone, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-card-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg shadow-industrial">
              <Wrench className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">FerreIndustrial</h1>
              <p className="text-sm text-muted-foreground">Soluciones Integrales</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </a>
            <a href="#obras-civiles" className="text-foreground hover:text-primary transition-colors font-medium">
              Obras Civiles
            </a>
            <a href="#industrial" className="text-foreground hover:text-primary transition-colors font-medium">
              Industrial
            </a>
            <a href="#ti" className="text-foreground hover:text-primary transition-colors font-medium">
              TI & Infraestructura
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              Cotizar
            </Button>
            <Button variant="hero" size="sm">
              Catálogo
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;