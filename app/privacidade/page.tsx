// src/pages/privacidade.tsx
import React from "react";

const PoliticaPrivacidade: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 space-y-4">
      <h1 className="mb-4 mt-6 font-medium text-2xl">Política de Privacidade – App Regenc</h1>
      <p>
        <strong>Última atualização:</strong> 25 de abril de 2026
      </p>
      <p>
        Esta Política de Privacidade descreve como o <strong>Regenc</strong>{" "}
        coleta, usa e compartilha suas informações pessoais ao utilizar nosso
        aplicativo móvel disponível na Google Play Store. O Regenc é uma
        ferramenta de produtividade voltada para corretores de imóveis,
        utilizando inteligência artificial para geração de conteúdo.
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">1. Identificação do Desenvolvedor</h2>
      <p>
        O aplicativo Regenc é desenvolvido e operado pela <strong>ELP Labs</strong>. 
        Ao utilizar nosso serviço, você concorda com a coleta e o uso de informações 
        de acordo com os termos estabelecidos nesta política.
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">2. Informações que Coletamos</h2>
      <h3>A. Informações de Cadastro e Autenticação</h3>
      <p>
        Utilizamos o <strong>Supabase</strong> como nosso provedor de infraestrutura 
        de autenticação. Ao se cadastrar, coletamos:
      </p>
      <ul>
        <li>Endereço de e-mail (obrigatório para criação de conta).</li>
        <li>Nome de exibição, Telefone e Número Creci (se fornecido voluntariamente).</li>
        <li>Identificadores técnicos únicos vinculados ao seu perfil.</li>
      </ul>


      <h3>B. Conteúdo do Usuário e Dados de Uso</h3>
      <ul>
        <li>Detalhes de propriedades e imóveis inseridos para geração de textos.</li>
        <li>Preferências de tom de voz e estilo para postagens em redes sociais.</li>
        <li>
          Histórico de conteúdos gerados, salvos em seu banco de dados privado no
          Supabase.
        </li>
      </ul>

      <h2 className="mb-4 mt-6 font-medium text-lg">3. Finalidade do Processamento de Dados</h2>
      <ul>
        <li>
          <strong>Prestação do Serviço:</strong> Gerar descrições de imóveis e
          conteúdos de marketing via IA.
        </li>
        <li>
          <strong>Sincronização:</strong> Permitir que você acesse seus dados
          salvos em diferentes dispositivos através do Supabase.
        </li>
        <li>
          <strong>Segurança:</strong> Proteger sua conta contra acessos não
          autorizados e garantir a integridade do sistema.
        </li>
        <li>
          <strong>Suporte Técnico:</strong> Responder a solicitações e resolver
          problemas de funcionamento do app.
        </li>
      </ul>

      <h2 className="mb-4 mt-6 font-medium text-lg">4. Compartilhamento de Dados com Terceiros</h2>
      <p>
        O Regenc não vende seus dados pessoais a terceiros. Compartilhamos
        informações apenas com provedores de serviços essenciais para a operação
        do app:
      </p>

      <div className="overflow-x-auto">
      <table className="min-w-full border border-slate-700 text-sm text-slate-300">
        <thead className="bg-slate-800 text-slate-100">
          <tr>
            <th className="px-4 py-2 border border-slate-700 text-left">Parceiro</th>
            <th className="px-4 py-2 border border-slate-700 text-left">Função</th>
            <th className="px-4 py-2 border border-slate-700 text-left">Finalidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-slate-700 font-semibold">Supabase Inc.</td>
            <td className="px-4 py-2 border border-slate-700">Infraestrutura de Nuvem</td>
            <td className="px-4 py-2 border border-slate-700">
              Armazenamento de banco de dados, autenticação segura e hospedagem de dados.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-slate-700 font-semibold">
              Provedores de IA (Deep Seek API)
            </td>
            <td className="px-4 py-2 border border-slate-700">Processamento de IA</td>
            <td className="px-4 py-2 border border-slate-700">
              Processamento dos prompts inseridos pelo usuário para gerar os textos solicitados.
            </td>
          </tr>
        </tbody>
      </table>
    </div>


      <h2 className="mb-4 mt-6 font-medium text-lg">5. Retenção e Exclusão de Dados</h2>
      <p>
        Mantemos seus dados apenas enquanto sua conta estiver ativa ou conforme
        necessário para fornecer os serviços. Em conformidade com os requisitos
        da Google Play Store, garantimos o controle total sobre seus dados:
      </p>
      <h3 className="mt-4 font-semibold">Como Excluir sua Conta e Dados</h3>
      <ul>
        <li>
          <strong>Pelo Aplicativo:</strong> Navegue até a tela de Perfil ou
          Configurações e selecione a opção <strong>Excluir Minha Conta</strong>.
        </li>
        <li>
          <strong>Efeito da Exclusão:</strong> Uma vez confirmada, o Supabase
          removerá permanentemente seu registro de autenticação e todos os
          registros vinculados ao seu ID de usuário em nossas tabelas de banco
          de dados.
        </li>
      </ul>

      <h2 className="mb-4 mt-6 font-medium text-lg">6. Segurança das Informações</h2>
      <p>
        Implementamos medidas de segurança técnicas e organizacionais para
        proteger seus dados. Como utilizamos a infraestrutura do Supabase, seus
        dados contam com criptografia de ponta em trânsito (via SSL/TLS) e
        criptografia em repouso nos servidores de banco de dados.
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">7. Alterações nesta Política</h2>
      <p>
        Podemos atualizar nossa Política de Privacidade para refletir mudanças
        em nossas práticas ou por razões operacionais, legais ou regulamentares.
        Recomendamos a revisão periódica desta página.
      </p>

      <h2 className="mb-4 mt-6 font-medium text-lg">8. Contato</h2>
      <p>
        Para dúvidas, sugestões ou solicitações relacionadas à sua privacidade,
        entre em contato através do e-mail:{" "}
        <a href="mailto:suporte.regenc@gmail.com">suporte.regenc@gmail.com</a>.
      </p>
      </div>
    </section>
  );
};

export default PoliticaPrivacidade;
