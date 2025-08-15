import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Factory, Server, ArrowRight, Wrench, Zap, Database } from "lucide-react";
import constructionTools from "@/assets/construction-tools.jpg";
import industrialEquipment from "@/assets/industrial-equipment.jpg";
import itInfrastructure from "@/assets/it-infrastructure.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: "obras-civiles",
      icon: Building,
      title: "Obras Civiles",
      description: "Materiales de construcción, herramientas y equipos para proyectos de infraestructura civil",
      image: constructionTools,
      features: [
        "Cemento y materiales de construcción",
        "Herramientas especializadas",
        "Equipos de seguridad industrial",
        "Maquinaria para construcción"
      ],
      color: "text-primary"
    },
    {
      id: "industrial",
      icon: Factory,
      title: "Área Industrial",
      description: "Equipos y suministros especializados para procesos industriales y manufactureros",
      image: industrialEquipment,
      features: [
        "Maquinaria industrial",
        "Sistemas de automatización",
        "Equipos de medición",
        "Suministros especializados"
      ],
      color: "text-accent"
    },
    {
      id: "ti",
      icon: Server,
      title: "TI & Infraestructura",
      description: "Soluciones tecnológicas, equipos de red y infraestructura de comunicaciones",
      image: itInfrastructure,
      features: [
        "Servidores y equipos de red",
        "Sistemas de cableado",
        "Infraestructura de telecomunicaciones",
        "Soluciones de conectividad"
      ],
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestras Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en tres áreas estratégicas para impulsar 
            el desarrollo de tus proyectos industriales y tecnológicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="bg-gradient-card border-border hover:shadow-card-soft transition-all duration-500 overflow-hidden group hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className={`h-12 w-12 ${service.color}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-card-foreground">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')} mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="industrial" className="w-full group">
                  Ver Productos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;