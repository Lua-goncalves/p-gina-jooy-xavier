import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/jooy-hero-new-2.jpeg";
import aboutImage from "@/assets/jooy-about-new.jpeg";
import partnersImage from "@/assets/jooy-partners-updated.jpeg";

const Index = () => {
  const whatsappNumber = "5519996772435";
  const whatsappMessage = "Olá! Gostaria de conversar sobre uma parceria.";
  
  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage} 
          alt="Jooy Xavier" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wine/60"></div>
        <div className="container mx-auto px-4 py-20 md:py-20 pt-[60vh] relative z-10 text-center">
          <div className="text-white space-y-6 animate-fade-in max-w-3xl mx-auto">
            <h1 className="font-playfair text-6xl md:text-8xl font-bold leading-tight">
              Jooy Xavier
            </h1>
            <p className="text-2xl md:text-4xl font-light">
              Influencer & Modelo Fotográfica
            </p>
            <p className="text-xl md:text-2xl opacity-90">
              Criando conexões reais e inspirando desde 2017.
            </p>
            <Button 
              size="lg"
              className="bg-white text-wine hover:bg-white/90 text-lg px-8 py-6 mt-4"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wine mb-12 text-center">
            Sobre Mim
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="animate-fade-in">
                <img 
                  src={aboutImage} 
                  alt="Jooy Xavier - Sobre" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Sou criadora de conteúdo desde 2017, iniciando no YouTube com 42 mil inscritos e 
                  atualmente no Instagram com mais de <span className="font-semibold text-wine">8 mil seguidores</span> — 
                  todos 100% orgânicos. Produzo conteúdo voltado para moda, lifestyle e parcerias autênticas.
                </p>
                
                <div className="space-y-3 pt-4">
                  <h3 className="font-playfair text-2xl font-bold text-wine mb-4">Características</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Altura</p>
                      <p className="text-lg font-semibold text-wine">1,64 cm</p>
                    </div>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Vestuário</p>
                      <p className="text-lg font-semibold text-wine">P ou 36</p>
                    </div>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Sapatos</p>
                      <p className="text-lg font-semibold text-wine">34</p>
                    </div>
                    <div className="bg-cream p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Peso</p>
                      <p className="text-lg font-semibold text-wine">57 kg</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-wine">📍</p>
                    <p className="text-sm font-semibold text-foreground mt-1">Amparo – SP</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-wine">🎂</p>
                    <p className="text-sm font-semibold text-foreground mt-1">23 anos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-wine">📸</p>
                    <p className="text-sm font-semibold text-foreground mt-1">Modelo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas de Engajamento */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wine mb-12 text-center">
            Métricas de Engajamento
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform">
              <p className="text-5xl font-bold text-burnt-orange mb-2">700-1.300</p>
              <p className="text-lg font-semibold text-foreground">Visualizações Story Diário</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform">
              <p className="text-5xl font-bold text-burnt-orange mb-2">4.000+</p>
              <p className="text-lg font-semibold text-foreground">Visualizações Reels</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-transform">
              <p className="text-5xl font-bold text-burnt-orange mb-2">600.000+</p>
              <p className="text-lg font-semibold text-foreground">Visitas no Perfil (30 dias)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas Parceiras */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wine mb-12 text-center">
            Marcas que confiam no meu trabalho
          </h2>
          <div className="max-w-4xl mx-auto">
            <img 
              src={partnersImage} 
              alt="Empresas parceiras" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Contato e Parcerias */}
      <section className="py-20 bg-gradient-to-br from-burnt-orange to-wine text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Quer que sua marca apareça para mais de 700 mil pessoas?
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90">
            Vamos conversar!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-wine hover:bg-white/90 text-lg px-8 py-6"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
            >
              <Phone className="mr-2" />
              Falar pelo WhatsApp
            </Button>
            <a href="mailto:joicegomesx16@gmail.com">
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-wine text-lg px-8 py-6"
              >
                <Mail className="mr-2" />
                Enviar e-mail
              </Button>
            </a>
          </div>

          <div className="space-y-4 text-lg">
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              joicegomesx16@gmail.com
            </p>
            <a 
              href="https://instagram.com/jooyxaviers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 hover:text-white/80 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @jooyxaviers
            </a>
            <p className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              (19) 99677-2435
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-8 bg-wine text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            © 2025 Jooy Xavier — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
