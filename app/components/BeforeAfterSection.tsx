"use client";
import { motion } from "framer-motion";
import { FaRegCircle, FaCheck, FaWandMagicSparkles } from "react-icons/fa6";

export default function BeforeAfterSection() {
  return (
    <section id="beforeAfter" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            A diferença entre <span className="text-slate-500 line-through decoration-red-500/50">anunciar</span> e <span className="text-blue-400">vender.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Veja como o Regenc transforma características chatas em descrições que prendem a atenção do seu cliente desde o primeiro segundo.
          </motion.p>
        </div>

        {/* Container dos Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
          
          {/* CARD ANTES (O jeito comum) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 bg-white/5 border border-white/5 rounded-3xl p-6 md:p-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaRegCircle className="text-red-400" size={24} />
              <h3 className="text-white font-semibold text-lg">O jeito antigo</h3>
            </div>
            <div className="bg-[#020617] rounded-2xl p-5 border border-white/5 font-mono text-sm text-slate-400 leading-relaxed">
              Apto 3 dorms, 1 suíte, 2 vagas. 85m². Ótima localização, perto de mercado e farmácia. Condomínio com lazer completo. Aceita financiamento. R$ 850.000,00. Interessados chamar no inbox.
            </div>
          </motion.div>

          {/* Seta do meio */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center justify-center bg-blue-600 rounded-full p-4 shadow-[0_0_20px_rgba(37,99,235,0.5)] z-20 shrink-0"
          >
            <FaWandMagicSparkles className="text-white" size={20} />
          </motion.div>

          {/* CARD DEPOIS (O jeito Regenc) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Brilho atrás do card */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full" />
            
            <div className="relative bg-[#0F172A]/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <FaCheck className="text-emerald-400" size={24} />
                <h3 className="text-white font-semibold text-lg">Com o Regenc</h3>
              </div>
              <div className="bg-[#020617] rounded-2xl p-5 border border-white/10 text-sm text-slate-200 leading-relaxed shadow-inner">
                <p className="mb-2">✨ <strong>Seu novo refúgio familiar acaba de entrar no mercado!</strong></p>
                <p className="mb-3">Imagine acordar em uma suíte espaçosa, tomar um café na sua varanda privativa e saber que tem tudo o que precisa a poucos passos de distância.</p>
                <ul className="mb-3 space-y-1 text-slate-300">
                  <li>🛏️ 3 Quartos (1 Suíte master)</li>
                  <li>🚗 2 Vagas de garagem</li>
                  <li>🏊‍♂️ Lazer de clube para os finais de semana</li>
                </ul>
                <p className="text-blue-400 font-semibold">📍 Localização premium • Pronto para morar</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}