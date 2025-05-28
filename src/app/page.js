"use client";  
import React, { useState } from "react";
import Head from "next/head";

const carros = [
  {
    modelo: "Rolls-Royce Phantom",
    preco: "R$ 4.200.000",
    descricao: "O ápice do luxo no mundo automotivo com interior artesanal e desempenho excepcional.",
    imagem: "https://images.unsplash.com/photo-1720828981697-e78c6d4a55c7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    modelo: "Bentley Flying Spur Mulliner",
    preco: "R$ 3.800.000",
    descricao: "A versão mais luxuosa e exclusiva da linha Bentley com acabamento personalizado.",
    imagem: "https://images.unsplash.com/photo-1610908374865-dae3c6392a2f?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    modelo: "Mercedes-Maybach S680",
    preco: "R$ 2.500.000",
    descricao: "Linha ultra premium da Mercedes-Benz com tecnologia de ponta e conforto incomparável.",
    imagem: "https://quatrorodas.abril.com.br/wp-content/uploads/2021/05/2022-Mercedes-Maybach-S680-V1238.jpg?quality=70&strip=info&w=1024&crop=1",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio para um backend
    console.log('Formulário enviado:', formData);
    setFormSubmitted(true);
    setFormData({ nome: '', email: '', mensagem: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title>Feness - Carros de Luxo Exclusivos</title>
        <meta name="description" content="Concessionária de veículos de luxo. Rolls-Royce, Bentley, Maybach e outros modelos premium." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#1A1A1A] text-[#F5F5F5] font-sans">
        {/* Header */}
        <header className="bg-[#1A1A1A] shadow-md sticky top-0 z-50 border-b border-[#C5A880]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-serif font-bold text-[#C5A880]">Feness</div>

            {/* Menu Desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-[#F5F5F5] font-medium">
                <li>
                  <a href="#home" className="hover:text-[#C5A880] transition duration-300">Home</a>
                </li>
                <li>
                  <a href="#carros" className="hover:text-[#C5A880] transition duration-300">Carros</a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-[#C5A880] transition duration-300">Por que nós?</a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#C5A880] transition duration-300">Contato</a>
                </li>
              </ul>
            </nav>

            {/* Menu Mobile */}
            <button
              className="md:hidden text-[#C5A880] focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menu Mobile Aberto */}
          {menuOpen && (
            <div className="md:hidden bg-[#2E2E2E] px-6 py-4">
              <ul className="flex flex-col space-y-4 text-[#F5F5F5] font-medium">
                <li>
                  <a href="#home" className="hover:text-[#C5A880] transition duration-300 block" onClick={toggleMenu}>Home</a>
                </li>
                <li>
                  <a href="#carros" className="hover:text-[#C5A880] transition duration-300 block" onClick={toggleMenu}>Carros</a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-[#C5A880] transition duration-300 block" onClick={toggleMenu}>Por que nós?</a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-[#C5A880] transition duration-300 block" onClick={toggleMenu}>Contato</a>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="bg-gradient-to-r from-[#1F3A93] to-[#1A1A1A] text-[#C5A880] min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 max-w-4xl mx-auto leading-tight font-serif">
              Encontre o <span className="text-[#F5F5F5]">carro dos seus sonhos</span> com a Feness
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-[#D1C7B7]">
              Os melhores carros de luxo do mundo, com atendimento personalizado e exclusivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#carros"
                className="inline-block bg-[#C5A880] text-[#1A1A1A] font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-[#B79856] transition duration-300"
              >
                Nossa Coleção
              </a>
              <a
                href="#contato"
                className="inline-block border-2 border-[#C5A880] text-[#C5A880] font-bold px-8 py-3 rounded-lg hover:bg-[#C5A880] hover:text-[#1A1A1A] transition duration-300"
              >
                Agende uma Visita
              </a>
            </div>
          </div>
        </section>

        {/* Seção Diferenciais */}
        <section id="diferenciais" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#C5A880] mb-12 text-center">
            Por que escolher a Feness?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exclusividade",
                description: "Acesso a modelos limitados e edições especiais que você não encontra em outras concessionárias.",
                icon: "⭐"
              },
              {
                title: "Atendimento Personalizado",
                description: "Consultores especializados para entender suas necessidades e preferências.",
                icon: "🤝"
              },
              {
                title: "Serviço Premium",
                description: "Desde a compra até a manutenção, oferecemos um serviço completo e diferenciado.",
                icon: "🛠️"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#2E2E2E] p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#C5A880] mb-2">{item.title}</h3>
                <p className="text-[#D1C7B7]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção Carros */}
        <section id="carros" className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#C5A880] mb-12 text-center">
            Nossa Coleção Exclusiva
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {carros.map(({ modelo, preco, descricao, imagem }, index) => (
              <div
                key={index}
                className="bg-[#2E2E2E] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={imagem}
                    alt={modelo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <button className="bg-[#C5A880] text-[#1A1A1A] px-6 py-2 rounded font-medium hover:bg-[#B79856] transition">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#C5A880]">{modelo}</h3>
                    <span className="bg-[#C5A880]/20 text-[#C5A880] px-3 py-1 rounded-full text-sm font-medium">
                      {preco}
                    </span>
                  </div>
                  <p className="text-[#D1C7B7] mb-4">{descricao}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#D1C7B7]/70">Disponível para teste drive</span>
                    <button className="text-[#C5A880] hover:text-[#B79856] transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Imagens Fullscreen */}
        <section id="galeria" className="bg-black py-16 px-6 max-w-[1600px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-[#C5A880] mb-12 text-center">
            Detalhes que Inspiram Paixão
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              "https://images.pexels.com/photos/549362/pexels-photo-549362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ].map((img, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl h-[400px]">
                <img
                  src={img}
                  alt={`Detalhe ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-[#C5A880] text-[#1A1A1A] px-6 py-2 rounded font-medium hover:bg-[#B79856] transition">
                    Ampliar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="max-w-4xl mx-auto bg-[#2E2E2E] rounded-xl shadow-md p-8 mb-20 mt-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#C5A880] font-serif">Fale conosco</h2>

            {formSubmitted ? (
              <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mb-6 text-center">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    className="w-full p-4 rounded border border-[#C5A880]/50 bg-[#1A1A1A] text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor email"
                    className="w-full p-4 rounded border border-[#C5A880]/50 bg-[#1A1A1A] text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <textarea
                    name="mensagem"
                    placeholder="Como podemos te ajudar?"
                    rows={5}
                    className="w-full p-4 rounded border border-[#C5A880]/50 bg-[#1A1A1A] text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#C5A880] resize-none transition"
                    required
                    value={formData.mensagem}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#C5A880] text-[#1A1A1A] font-semibold py-4 rounded hover:bg-[#B79856] transition duration-300"
                >
                  Enviar mensagem
                </button>
              </form>
            )}

            <div className="mt-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#D1C7B7]">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A880] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p>(11) 9999-9999</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A880] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>contato@feness.com.br</p>
                </div>
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#C5A880] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p>Av. Paulista, 1000 - São Paulo/SP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#1A1A1A] border-t border-[#C5A880]/30 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-serif font-bold text-[#C5A880] mb-4 md:mb-0">Feness</div>

              <div className="flex space-x-6">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-[#D1C7B7] hover:text-[#C5A880] transition duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#C5A880]/10 text-center text-[#D1C7B7]/80 text-sm">
              <p>© {new Date().getFullYear()} Feness. Todos os direitos reservados.</p>
              <p className="mt-2">Desenvolvido com paixão por carros de luxo.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}