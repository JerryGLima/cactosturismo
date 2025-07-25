import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Bus, 
  Users, 
  Coffee, 
  Camera, 
  Star,
  CheckCircle,
  MessageCircle,
  Calendar,
  DollarSign,
  Plane
} from 'lucide-react';

// Importando as imagens
import logoImg from './assets/logo.png';
import logoRodapeImg from './assets/logorodape.png';
import busImg from './assets/bus_tourism.png';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="Cactos Turismo" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-green-600 transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('pacotes')} className="text-gray-700 hover:text-green-600 transition-colors">
              Pacotes
            </button>
            <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-green-600 transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-green-600 transition-colors">
              Contato
            </button>
          </nav>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open('https://wa.me/5599991771910', '_blank')}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/images/cover_photo.png)` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Cactos Turismo
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Conhecendo o Brasil com Amigos
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Especialistas em viagens terrestres pelo Brasil. Descubra as belezas do Maranhão e outros destinos incríveis conosco!
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
            onClick={() => scrollToSection('pacotes')}
          >
            Conheça Nossos Pacotes
          </Button>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a Cactos Turismo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma agência especializada em viagens terrestres, oferecendo experiências únicas 
              e inesquecíveis pelo Brasil. Nossa missão é conectar pessoas aos destinos mais belos 
              do nosso país, sempre com segurança, conforto e muita diversão.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Bus className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Viagens Terrestres</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Especialistas em viagens de ônibus com frota moderna e confortável
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Experiência em Grupo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Viaje com amigos e faça novas amizades em nossas excursões
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Qualidade Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Atendimento personalizado e destinos cuidadosamente selecionados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pacotes */}
      <section id="pacotes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Pacotes</h2>
            <p className="text-xl text-gray-600">
              Descubra destinos incríveis com preços especiais
            </p>
          </div>

          {/* Seção Pacotes Terrestres */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <Bus className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-800">Pacotes Terrestres</h3>
            </div>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Nossa especialidade! Viaje com conforto e segurança em nossos ônibus modernos, 
              conhecendo as belezas do Brasil de forma econômica e divertida.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pacote Riachão */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={"/images/riachao_destination.jpg"} 
                    alt="Riachão, Maranhão" 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">
                    <Bus className="w-3 h-3 mr-1" />
                    Terrestre
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Riachão, Maranhão
                    <span className="text-green-600 text-2xl font-bold">R$ 75</span>
                  </CardTitle>
                  <CardDescription>
                    2 dias e 1 noite • 30/11 a 01/12/2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Ônibus Double Deck</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Guia de Turismo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Hospedagem com café da manhã</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Transfer para Poço Azul</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Ingressos inclusos</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    onClick={() => window.open('https://wa.me/5599991771910?text=Olá! Gostaria de saber mais sobre o pacote terrestre para Riachão', '_blank')}
                  >
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>

              {/* Novos Destinos Terrestres */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={busImg} 
                    alt="Viagens de Ônibus" 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">
                    <Bus className="w-3 h-3 mr-1" />
                    Em Breve
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>Novos Destinos Terrestres</CardTitle>
                  <CardDescription>
                    Estamos preparando novos roteiros de ônibus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Fique por dentro dos próximos destinos terrestres que estaremos oferecendo. 
                    Entre em contato para sugestões!
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/5599991771910?text=Olá! Gostaria de saber sobre os próximos destinos terrestres', '_blank')}
                  >
                    Me Avise
                  </Button>
                </CardContent>
              </Card>

              {/* Orçamento Personalizado Terrestre */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                  <Bus className="w-16 h-16 text-white" />
                </div>
                <CardHeader>
                  <CardTitle>Orçamento Terrestre</CardTitle>
                  <CardDescription>
                    Viagem de ônibus sob medida para seu grupo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Tem um destino em mente? Fazemos orçamentos personalizados 
                    para viagens terrestres em grupo.
                  </p>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.open('https://wa.me/5599991771910?text=Olá! Gostaria de um orçamento para viagem terrestre', '_blank')}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Seção Pacotes Aéreos */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-800">Pacotes Aéreos</h3>
            </div>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Para destinos mais distantes, oferecemos também pacotes aéreos com toda a comodidade 
              e organização que você já conhece da Cactos Turismo.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Pacotes Aéreos - Em Breve */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-400 to-sky-600 flex items-center justify-center">
                  <Plane className="w-16 h-16 text-white" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Destinos Nacionais
                    <Badge variant="secondary">Em Breve</Badge>
                  </CardTitle>
                  <CardDescription>
                    Viagens aéreas para destinos nacionais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Passagens aéreas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Hospedagem</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Transfers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Guia especializado</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => window.open('https://wa.me/5599991771910?text=Olá! Gostaria de saber sobre os pacotes aéreos nacionais', '_blank')}
                  >
                    Me Avise
                  </Button>
                </CardContent>
              </Card>

              {/* Pacotes Internacionais */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Plane className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-semibold">Internacional</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Destinos Internacionais
                    <Badge variant="secondary">Em Breve</Badge>
                  </CardTitle>
                  <CardDescription>
                    Viagens aéreas para destinos internacionais
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Passagens internacionais</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Hospedagem</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Seguro viagem</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Suporte completo</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    onClick={() => window.open('https://wa.me/5599991771910?text=Olá! Gostaria de saber sobre os pacotes aéreos internacionais', '_blank')}
                  >
                    Me Avise
                  </Button>
                </CardContent>
              </Card>

              {/* Orçamento Personalizado Aéreo */}
              <Card className="overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <DollarSign className="w-16 h-16 text-white" />
                </div>
                <CardHeader>
                  <CardTitle>Orçamento Aéreo</CardTitle>
                  <CardDescription>
                    Viagem aérea sob medida para seu grupo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Quer viajar de avião? Fazemos orçamentos personalizados 
                    para viagens aéreas nacionais e internacionais.
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open('https://wa.me/5599991771910?text=Olá! Gostaria de um orçamento para viagem aérea', '_blank')}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* O que está incluso */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O que Oferecemos</h2>
            <p className="text-xl text-gray-600">
              Tudo pensado para sua comodidade e diversão
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Bus className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ônibus Double Deck</h3>
              <p className="text-gray-600">Frota moderna e confortável para sua viagem</p>
            </div>
            
            <div className="text-center">
              <Users className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Guia de Turismo</h3>
              <p className="text-gray-600">Profissionais experientes para te acompanhar</p>
            </div>
            
            <div className="text-center">
              <Coffee className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hospedagem</h3>
              <p className="text-gray-600">Acomodações selecionadas com café da manhã</p>
            </div>
            
            <div className="text-center">
              <Camera className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ingressos</h3>
              <p className="text-gray-600">Acesso aos principais pontos turísticos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeria de Fotos</h2>
            <p className="text-xl text-gray-600">
              Momentos especiais das nossas viagens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={coverImg} 
                alt="Grupo de turistas" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={"/images/poco_azul.jpg"} 
                alt="Poço Azul" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={"/images/riachao_destination.jpg"} 
                alt="Riachão" 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Diferenciais</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Descontos Especiais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Oferecemos descontos para professores, estudantes e melhor idade
                </p>
                <Badge variant="secondary">Documentação necessária</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Pagamento Flexível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Aceitamos pagamento via Boleto, Carnê ou PIX
                </p>
                <Badge variant="secondary">Facilidade para você</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Anos de experiência levando alegria e conhecimento pelo Brasil
                </p>
                <Badge variant="secondary">Confiança garantida</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-300">
              Estamos prontos para planejar sua próxima aventura
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-300">Rua Coronel João Sena, 805 - Centro</p>
                    <p className="text-gray-300">Presidente Dutra - MA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-semibold">Telefones</p>
                    <p className="text-gray-300">(99) 99917-1910 - Carlos Henrique</p>
                    <p className="text-gray-300">(99) 9204-0919 - Léia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-300">cactosexcursoes@hotmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/5599991771910', '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp - Carlos Henrique
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full bg-green-200 text-green-800 hover:bg-green-300"
                  onClick={() => window.open("https://wa.me/5599920409919", "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp - Léia
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full bg-green-200 text-green-800 hover:bg-green-300"
                  onClick={() => window.open("mailto:cactosexcursoes@hotmail.com", "_blank")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <img src={logoRodapeImg} alt="Cactos Turismo" className="h-8 w-auto" />
              <span className="text-lg font-semibold">Cactos Turismo</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 Cactos Turismo. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-sm">
                Conhecendo o Brasil com Amigos
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          onClick={() => window.open('https://wa.me/5599991771910', '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

export default App;

