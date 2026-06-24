"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaClock, FaGlobe, FaShareNodes } from "react-icons/fa6";

export default function Hero() {
  // Variante para o container: controla o delay entre os filhos
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Atraso de 0.2s entre cada elemento
      },
    },
  };

  // Variante para os itens: a animação real (subindo e aparecendo)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows mantidos - O contraste do escuro com os tons suaves está perfeito */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-[-10%] left-[10%] w-75 h-75 bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-62.5 h-62.5 bg-emerald-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge: Foco em Exclusividade */}
          <motion.span
            variants={itemVariants}
            className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 inline-block"
          >
            🚀 Vagas limitadas para o acesso antecipado
          </motion.span>

          {/* Título H1: Foco na dor e no benefício real (Vender) */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          >
            A IA escreve o anúncio. <br />
            Você foca em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">fechar negócio.</span>
          </motion.h1>

          {/* Parágrafo: Explicando o momento de pré-lançamento */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            O Regenc transforma dados frios do imóvel em descrições magnéticas prontas para o Instagram e WhatsApp. Entre para a lista VIP e seja um dos primeiros a testar antes do lançamento oficial.
          </motion.p>

          {/* Botões: CTAs honestos e persuasivos */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
              <Link
                href="#pionner"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] inline-block w-full md:w-auto"
              >
                Garantir meu Acesso VIP
              </Link>
              <Link href="#features" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-md transition-all cursor-pointer w-full md:w-auto">
                Ver como funciona
              </Link>
            </div>
            
            {/* Micro-copy: Gatilho de prova social/urgência */}
            <p className="text-sm text-slate-500 mt-2 font-medium">
              🔥 Junte-se aos corretores que já garantiram a vaga. 100% gratuito.
            </p>
          </motion.div>
        </motion.div>


        <div className="container mx-auto px-6 pt-8 relative z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ... (Badge, H1, P e Botões continuam iguais) ... */}

            {/* NOVA SEÇÃO: IMAGEM DO APP */}
            <motion.div
              variants={itemVariants}
              className="mt-20 relative mx-auto w-fit max-w-75 md:max-w-75"
            >
              {/* Efeito de brilho atrás da imagem */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full" />

              <motion.div
                animate={{ y: [0, -10, 0] }} // Animação de flutuar para cima e para baixo
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 -left-4 md:-left-32 z-20 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl shadow-2xl w-40 md:w-56"
              >
                <div className="bg-blue-500/20 p-2 rounded-full text-blue-400">
                  <FaClock size={20} />
                </div>
                <span className="text-xs md:text-sm text-white font-medium leading-tight">
                  Anúncio pronto em poucos segundos
                </span>
              </motion.div>

              {/* Balão 2: Meio Direita */}
              <motion.div
                animate={{ y: [0, 10, 0] }} // Animação invertida para não ficarem iguais
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/2 -right-12 md:-right-32 -translate-y-1/2 z-20 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl shadow-2xl w-40 md:w-52"
              >
                <div className="bg-emerald-500/20 p-2 rounded-full text-emerald-400">
                  <FaGlobe size={20} />
                </div>
                <span className="text-xs md:text-sm text-white font-medium leading-tight">
                  SEO Otimizado para portais
                </span>
              </motion.div>

              {/* Balão 3: Base Esquerda */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-8 -left-12 md:-left-28 z-20 flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl shadow-2xl w-44 md:w-56"
              >
                <div className="bg-orange-500/20 p-2 rounded-full text-orange-400">
                  <FaShareNodes size={20} />
                </div>
                <span className="text-xs md:text-sm text-white font-medium leading-tight">
                  Compartilhe direto nas Redes Sociais
                </span>
              </motion.div>

              {/* Container da imagem com efeito "Glass" e borda */}
              <div className="rounded-4xl border border-white/10 bg-black/40 p-2 md:p-4 shadow-3xl backdrop-blur-sm">
                <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-[#020617]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  >
                    {/* Se estiver na pasta public, use "/nome-do-video.mp4"
        Se for externo, coloque a URL completa "https://..."
      */}
                    <source src="/regenc-screen.webm" type="video/webm" />
                    Seu navegador não suporta a tag de vídeo.
                  </video>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
