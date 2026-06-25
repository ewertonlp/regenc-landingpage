// src/pages/privacidade.tsx
import React from "react";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      {/* Barra de Navegação no Topo */}
      <Navbar />

      {/* Conteúdo Principal (flex-grow empurra o footer para baixo) */}
      <main className="flex-grow">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 space-y-6 text-slate-300 leading-relaxed max-w-4xl">
            
            <div className="mb-10 border-b border-white/10 pb-6">
              <h1 className="mb-2 font-bold text-3xl md:text-4xl text-white tracking-tight">
                Política de Privacidade – App Regenc
              </h1>
              <p className="text-sm text-slate-500">
                <strong>Última atualização:</strong> 25 de abril de 2026
              </p>
            </div>

            <p>
              Esta Política de Privacidade descreve como o <strong className="text-white">Regenc</strong>{" "}
              coleta, usa e compartilha suas informações pessoais ao utilizar nosso
              aplicativo móvel disponível na Google Play Store. O Regenc é uma
              ferramenta de produtividade voltada para corretores de imóveis,
              utilizando inteligência artificial para geração de conteúdo.
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              1. Identificação do Desenvolvedor
            </h2>
            <p>
              O aplicativo Regenc é desenvolvido e operado pela <strong className="text-white">ELP Labs</strong>. 
              Ao utilizar nosso serviço, você concorda com a coleta e o uso de informações 
              de acordo com os termos estabelecidos nesta política.
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              2. Informações que Coletamos
            </h2>
            
            <h3 className="mt-6 mb-3 font-medium text-lg text-blue-400">
              A. Informações de Cadastro e Autenticação
            </h3>
            <p>
              Utilizamos o <strong className="text-white">Supabase</strong> como nosso provedor de infraestrutura 
              de autenticação. Ao se cadastrar, coletamos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3 mb-6">
              <li>Endereço de e-mail (obrigatório para criação de conta).</li>
              <li>Nome de exibição, Telefone e Número Creci (se fornecido voluntariamente).</li>
              <li>Identificadores técnicos únicos vinculados ao seu perfil.</li>
            </ul>

            <h3 className="mt-6 mb-3 font-medium text-lg text-blue-400">
              B. Conteúdo do Usuário e Dados de Uso
            </h3>
            <ul className="list-disc pl-6 space-y-2 mt-3 mb-6">
              <li>Detalhes de propriedades e imóveis inseridos para geração de textos.</li>
              <li>Preferências de tom de voz e estilo para postagens em redes sociais.</li>
              <li>
                Histórico de conteúdos gerados, salvos em seu banco de dados privado no Supabase.
              </li>
            </ul>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              3. Finalidade do Processamento de Dados
            </h2>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong className="text-white">Prestação do Serviço:</strong> Gerar descrições de imóveis e conteúdos de marketing via IA.
              </li>
              <li>
                <strong className="text-white">Sincronização:</strong> Permitir que você acesse seus dados salvos em diferentes dispositivos através do Supabase.
              </li>
              <li>
                <strong className="text-white">Segurança:</strong> Proteger sua conta contra acessos não autorizados e garantir a integridade do sistema.
              </li>
              <li>
                <strong className="text-white">Suporte Técnico:</strong> Responder a solicitações e resolver problemas de funcionamento do app.
              </li>
            </ul>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              4. Compartilhamento de Dados com Terceiros
            </h2>
            <p className="mb-6">
              O Regenc não vende seus dados pessoais a terceiros. Compartilhamos
              informações apenas com provedores de serviços essenciais para a operação
              do app:
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-700 mb-8">
              <table className="min-w-full text-sm text-slate-300">
                <thead className="bg-slate-800/50 text-slate-100 border-b border-slate-700">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Parceiro</th>
                    <th className="px-6 py-4 text-left font-semibold">Função</th>
                    <th className="px-6 py-4 text-left font-semibold">Finalidade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Supabase Inc.</td>
                    <td className="px-6 py-4">Infraestrutura de Nuvem</td>
                    <td className="px-6 py-4">
                      Armazenamento de banco de dados, autenticação segura e hospedagem de dados.
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-white">Provedores de IA (Deep Seek API)</td>
                    <td className="px-6 py-4">Processamento de IA</td>
                    <td className="px-6 py-4">
                      Processamento dos prompts inseridos pelo usuário para gerar os textos solicitados.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              5. Retenção e Exclusão de Dados
            </h2>
            <p>
              Mantemos seus dados apenas enquanto sua conta estiver ativa ou conforme
              necessário para fornecer os serviços. Em conformidade com os requisitos
              da Google Play Store, garantimos o controle total sobre seus dados:
            </p>
            
            <h3 className="mt-6 mb-3 font-medium text-lg text-blue-400">
              Como Excluir sua Conta e Dados
            </h3>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong className="text-white">Pelo Aplicativo:</strong> Navegue até a tela de Perfil ou
                Configurações e selecione a opção <strong className="text-white">Excluir Minha Conta</strong>.
              </li>
              <li>
                <strong className="text-white">Efeito da Exclusão:</strong> Uma vez confirmada, o Supabase
                removerá permanentemente seu registro de autenticação e todos os
                registros vinculados ao seu ID de usuário em nossas tabelas de banco de dados.
              </li>
            </ul>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              6. Segurança das Informações
            </h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para
              proteger seus dados. Como utilizamos a infraestrutura do Supabase, seus
              dados contam com criptografia de ponta em trânsito (via SSL/TLS) e
              criptografia em repouso nos servidores de banco de dados.
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              7. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar nossa Política de Privacidade para refletir mudanças
              em nossas práticas ou por razões operacionais, legais ou regulamentares.
              Recomendamos a revisão periódica desta página.
            </p>

            <h2 className="mb-4 mt-10 font-semibold text-2xl text-white">
              8. Contato
            </h2>
            <p>
              Para dúvidas, sugestões ou solicitações relacionadas à sua privacidade,
              entre em contato através do e-mail:{" "}
              <a 
                href="mailto:suporte.regenc@gmail.com" 
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium"
              >
                suporte.regenc@gmail.com
              </a>.
            </p>
          </div>
        </section>
      </main>

      {/* Rodapé no Fundo */}
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;