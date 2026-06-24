// src/pages/termos.tsx
import React from "react";

const TermosDeUso: React.FC = () => {
  return (
     <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 space-y-4">
      <h1 className="mb-4 mt-6 font-medium text-2xl">Termos de Uso do Regenc</h1>
      <p>
        <strong>Última atualização:</strong> Abril de 2026
      </p>
      <p>
        Bem-vindo ao Regenc. Ao utilizar nosso aplicativo, você concorda com os
        seguintes termos:
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">1. O Serviço</h2>
      <p>
        O Regenc é uma ferramenta de assistência por Inteligência Artificial
        projetada para gerar textos e descrições para profissionais do mercado
        imobiliário. O aplicativo não substitui a revisão humana.
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">2. Responsabilidade sobre o Conteúdo</h2>
      <p>
        Você é o único responsável pelos textos gerados e publicados usando o
        Regenc. Recomendamos que sempre revise as descrições dos imóveis para
        garantir a precisão das informações (preços, metragens, endereços) antes
        de enviá-las a clientes ou portais imobiliários.
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">3. Contas e Assinaturas</h2>
      <ul>
        <li>Você é responsável por manter a segurança da sua senha.</li>
        <li>
          O uso de ferramentas automatizadas para fraudar limites de gerações ou
          códigos de indicação resultará em banimento da conta.
        </li>
      </ul>

      <h2 className="mb-4 mt-6 font-medium text-lg">4. Disponibilidade do Serviço</h2>
      <p>
        Esforçamo-nos para manter o app online 24/7, mas dependemos de APIs de
        terceiros (servidores de IA). O serviço pode passar por instabilidades
        temporárias fora do nosso controle.
      </p>

      </div>
    </section>
  );
};

export default TermosDeUso;
