"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "Como o Regenc funciona exatamente?",
    answer: "Nossa Inteligência Artificial analisa os dados básicos do seu imóvel (como número de quartos, metragem e localização) e os transforma em um texto persuasivo, otimizado para portais imobiliários e redes sociais em questão de segundos.",
  },
  {
    question: "Preciso ter conhecimento em tecnologia ou IA?",
    answer: "De forma alguma! O aplicativo foi desenhado para ser tão simples quanto enviar uma mensagem no WhatsApp. Basta preencher um formulário rápido e clicar em gerar.",
  },
  {
    question: "O texto gerado serve tanto para venda quanto para locação?",
    answer: "Sim! Você pode selecionar o objetivo do anúncio na plataforma, e a IA ajustará o tom da escrita. Textos de venda focam mais no valorização a longo prazo e sonho da casa própria, enquanto locação foca em praticidade e comodidades locais.",
  },
  {
    question: "Existe um teste gratuito?",
    answer: "Sim, você pode criar sua conta e gerar seus primeiros anúncios gratuitamente, sem precisar cadastrar cartão de crédito. Assim você pode ver a mágica acontecendo antes de decidir por um plano VIP.",
  },
  {
    question: "Meus dados e os dados dos meus clientes estão seguros?",
    answer: "Totalmente. Nós utilizamos criptografia de ponta a ponta e não usamos as informações dos seus imóveis para treinar modelos públicos de IA. Seus dados são estritamente seus.",
  },
];

export default function FAQ() {
  // Estado para controlar qual pergunta está aberta (null = nenhuma)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // Se clicar na que já está aberta, ela fecha. Se clicar em outra, abre a nova.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 px-6 bg-transparent overflow-hidden z-10">
      
      {/* Brilhos de fundo sutis para não destoar do resto do site */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-3xl relative z-10">
        
        {/* Cabeçalho do FAQ */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-400">
            Tudo o que você precisa saber sobre o Regenc.
          </p>
        </div>

        {/* Lista de Perguntas */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                className="border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden"
              >
                {/* Botão da Pergunta */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-medium text-white text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-blue-400 shrink-0 cursor-pointer"
                  >
                    <FaChevronDown size={24} />
                  </motion.div>
                </button>

                {/* Resposta Animada */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}