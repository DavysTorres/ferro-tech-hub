import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para ayudarte con tus proyectos. Contáctanos para 
            cotizaciones, asesoría técnica o más información sobre nuestros productos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card border-border hover:shadow-card-soft transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Teléfono</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border hover:shadow-card-soft transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Email</h4>
                    <p className="text-muted-foreground">ventas@ferreindustrial.com</p>
                    <p className="text-muted-foreground">info@ferreindustrial.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border hover:shadow-card-soft transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Dirección</h4>
                    <p className="text-muted-foreground">
                      Av. Industrial 1234<br />
                      Zona Industrial Norte<br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card border-border hover:shadow-card-soft transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Horarios</h4>
                    <p className="text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                      Sábados: 8:00 AM - 2:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-gradient-card border-border shadow-card-soft">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Solicitar Cotización
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-card-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-card-foreground mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-card-foreground mb-2">
                    Categoría de Interés
                  </label>
                  <select
                    id="categoria"
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="obras-civiles">Obras Civiles</option>
                    <option value="industrial">Área Industrial</option>
                    <option value="ti">TI & Infraestructura</option>
                    <option value="multiple">Múltiples áreas</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-card-foreground mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Describe tu proyecto y los productos que necesitas..."
                  ></textarea>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitud
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;