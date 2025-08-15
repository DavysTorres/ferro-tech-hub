import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy el asistente virtual de FerreIndustrial. ¿En qué puedo ayudarte hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const phoneNumber = "5551234567";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    "Ver productos de obras civiles",
    "Información sobre área industrial", 
    "Servicios de TI e infraestructura",
    "Solicitar cotización",
    "Hablar con un asesor"
  ];

  const botResponses: { [key: string]: string } = {
    "obras civiles": "Contamos con una amplia gama de productos para obras civiles: cemento, varillas, blocks, herramientas de construcción y más. ¿Te interesa algún producto específico?",
    "industrial": "En el área industrial ofrecemos: maquinaria pesada, herramientas industriales, equipos de seguridad, sistemas de ventilación y más. ¿Qué tipo de equipo necesitas?",
    "ti": "Nuestros servicios de TI incluyen: infraestructura de red, servidores, sistemas de seguridad, cableado estructurado y soporte técnico. ¿Necesitas implementar algún proyecto específico?",
    "cotización": "Para solicitar una cotización personalizada, necesitaré algunos datos. ¿Prefieres que te conecte directamente con WhatsApp para enviarte un formulario detallado?",
    "asesor": "Te voy a conectar con uno de nuestros asesores especializados a través de WhatsApp para brindarte atención personalizada."
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("hola") || message.includes("buenos")) {
      return "¡Hola! Bienvenido a FerreIndustrial. Estoy aquí para ayudarte con información sobre nuestros productos y servicios.";
    }
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    return "Entiendo tu consulta. Para brindarte información más específica y detallada, te recomiendo que hables directamente con uno de nuestros asesores especializados a través de WhatsApp.";
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const connectToWhatsApp = () => {
    const conversationHistory = messages
      .slice(1) // Excluir mensaje de bienvenida
      .map(msg => `${msg.sender === 'user' ? 'Usuario' : 'Bot'}: ${msg.text}`)
      .join('\n');
    
    const message = encodeURIComponent(
      `Hola, vengo del chat de la página web de FerreIndustrial.\n\nConversación previa:\n${conversationHistory}\n\nMe gustaría continuar la conversación con un asesor.`
    );
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <>
      {/* Botón flotante */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="hero"
        size="lg"
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-accent-glow hover:shadow-primary-glow animate-pulse hover:animate-none"
        aria-label="Abrir chat de ayuda"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Modal del chat */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="absolute inset-0 bg-black/20" onClick={() => setIsOpen(false)} />
          
          <Card className="relative w-full max-w-md h-[600px] flex flex-col bg-background border-border shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-primary">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Asistente FerreIndustrial</h3>
                  <p className="text-xs text-white/80">En línea</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`p-2 rounded-full ${message.sender === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                      {message.sender === 'user' ? (
                        <User className="h-4 w-4 text-primary-foreground" />
                      ) : (
                        <Bot className="h-4 w-4 text-foreground" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[80%]">
                    <div className="p-2 rounded-full bg-muted">
                      <Bot className="h-4 w-4 text-foreground" />
                    </div>
                    <div className="p-3 rounded-lg bg-muted text-foreground">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            <div className="p-4 border-t border-border">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => sendMessage(reply)}
                  >
                    {reply}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="hero"
                size="sm"
                className="w-full mb-3"
                onClick={connectToWhatsApp}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Continuar en WhatsApp
              </Button>

              {/* Input */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" size="icon" variant="default">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatBot;