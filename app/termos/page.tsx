// src/pages/termos.tsx
import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 

const TermosDeUso: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      {/* Barra de Navegação no Topo */}
      <Navbar />

      {/* Conteúdo Principal (flex-grow empurra o footer para baixo) */}
      <main className="flex-grow">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 space-y-6 text-slate-300 leading-relaxed max-w-4xl">
            
            {/* Cabeçalho da Página */}
            <div className="mb-10 border-b border-white/10 pb-6">
              <h1 className="mb-2 font-bold text-3xl md:text-4xl text-white tracking-tight">
                Termos de Uso do Regenc
              </h1>
              <p className="text-sm text-slate-500">
                <strong>Última atualização:</strong> Abril de 2026
              </p>
            </div>

            <p>
              Bem-vindo ao <strong className="text-white">Regenc</strong>. Ao utilizar nosso aplicativo, você concorda com os
              seguintes termos:
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              1. O Serviço
            </h2>
            <p>
              O Regenc é uma ferramenta de assistência por Inteligência Artificial
              projetada para gerar textos e descrições para profissionais do mercado
              imobiliário. O aplicativo não substitui a revisão humana.
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              2. Responsabilidade sobre o Conteúdo
            </h2>
            <p>
              Você é o único responsável pelos textos gerados e publicados usando o
              Regenc. Recomendamos que sempre revise as descrições dos imóveis para
              garantir a precisão das informações (preços, metragens, endereços) antes
              de enviá-las a clientes ou portais imobiliários.
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              3. Contas e Assinaturas
            </h2>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>Você é responsável por manter a segurança da sua senha.</li>
              <li>
                O uso de ferramentas automatizadas para fraudar limites de gerações ou
                códigos de indicação resultará em banimento da conta.
              </li>
            </ul>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              4. Disponibilidade do Serviço
            </h2>
            <p>
              Esforçamo-nos para manter o app online 24/7, mas dependemos de APIs de
              terceiros (servidores de IA). O serviço pode passar por instabilidades
              temporárias fora do nosso controle.
            </p>

          </div>
        </section>
      </main>

      {/* Rodapé no Fundo */}
      <Footer />
    </div>
  );
};

export default TermosDeUso;