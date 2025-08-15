import { Button } from "@/components/ui/button";
import { Building, Factory, Server, ArrowRight, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="h-6 w-6 text-accent animate-pulse-glow" />
            <span className="text-accent font-semibold">Calidad Garantizada</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Soluciones
            <span className="text-accent block">Industriales</span>
            Integrales
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Proveemos materiales para obras civiles, equipos industriales y soluciones de TI 
            e infraestructura. Tu socio confiable para proyectos de gran escala.
          </p>

          {/* Business Areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4 hover:bg-card/20 transition-all duration-300">
              <Building className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-2">Obras Civiles</h3>
              <p className="text-primary-foreground/80 text-sm">Materiales de construcción y herramientas especializadas</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4 hover:bg-card/20 transition-all duration-300">
              <Factory className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-2">Industrial</h3>
              <p className="text-primary-foreground/80 text-sm">Equipos y suministros para la industria manufacturera</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4 hover:bg-card/20 transition-all duration-300">
              <Server className="h-8 w-8 text-accent mb-3" />
              <h3 className="text-primary-foreground font-semibold mb-2">TI & Infraestructura</h3>
              <p className="text-primary-foreground/80 text-sm">Tecnología y soluciones de conectividad empresarial</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="lg" className="text-lg">
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Solicitar Cotización
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-8 mt-12">
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-accent" />
              <span className="text-primary-foreground/90">+15 años de experiencia</span>
            </div>
            <div className="text-primary-foreground/90">•</div>
            <div className="text-primary-foreground/90">+500 proyectos completados</div>
            <div className="text-primary-foreground/90">•</div>
            <div className="text-primary-foreground/90">Cobertura nacional</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;