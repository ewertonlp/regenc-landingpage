"use client";
import { motion } from "framer-motion";

export default function PioneerSection() {
  return (
    <section id="pionner" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden p-8 md:p-16 text-center border border-white/10 bg-[#0F172A]/40 backdrop-blur-md"
        >
          {/* Efeito visual dentro do card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#020617]/0 to-transparent -z-10" />

          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 inline-block tracking-wide uppercase">
            Acesso Fechado
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Seja um dos pioneiros.
          </h2>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Nós não estamos apenas lançando um aplicativo, estamos construindo a ferramenta definitiva para o mercado imobiliário com a ajuda de corretores reais. Entre para o círculo VIP e tenha acesso antecipado gratuito.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://tally.so/r/zxGrK0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Quero ser um Testador VIP
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-6">
            O aplicativo já está aprovado e em fase final de testes. <br className="md:hidden" /> As vagas para o primeiro lote são limitadas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}