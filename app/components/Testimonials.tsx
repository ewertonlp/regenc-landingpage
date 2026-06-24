"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Corretora Autônoma",
    content:
      "O Regenc mudou minha rotina. O que eu levava 30 minutos para escrever, agora faço em segundos e com muito mais qualidade.",
  },
  {
    name: "Marcos Oliveira",
    role: "Gestor Imobiliário",
    content:
      "A precisão da IA em destacar os pontos fortes do imóvel é impressionante. Meus anúncios no portal agora recebem muito mais cliques.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-[-10%] left-[10%] w-75 h-75 bg-blue-600/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-62.5 h-62.5 bg-emerald-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
            O que dizem os primeiros usuários
          </h2>
          <p className="text-slate-400">
            Feedback real de quem já está acelerando as vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl glass border-white/5 relative"
            >
              <div className="text-4xl text-blue-500/20 absolute top-6 right-8 font-serif"></div>
              <p className="text-slate-300 italic mb-6 leading-relaxed">
                {t.content}
              </p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-blue-400 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
