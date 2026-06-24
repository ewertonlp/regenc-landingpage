"use client"
import { motion } from 'framer-motion';
import { LuZap,  LuSparkles, LuShare2,LuShieldHalf  } from "react-icons/lu";


const features = [
  {
    title: "Geração por IA",
    desc: "Algoritmos treinados para converter características em benefícios emocionais.",
    icon: <LuZap className="text-yellow-400" size={24} />,
    className: "md:col-span-2"
  },
  {
    title: "Compartilhamento",
    desc: "Direto para o WhatsApp e redes sociais.",
    icon: <LuShare2 className="text-blue-400" size={24}  />,
    className: "md:col-span-1"
  },
  {
    title: "Privacidade",
    desc: "Seus dados estão protegidos em nuvem segura.",
    icon: <LuShieldHalf className="text-emerald-400" size={24}  />,
    className: "md:col-span-1"
  },
  {
    title: "Otimização de SEO",
    desc: "Anúncios prontos para ranquear nos maiores portais do Brasil.",
    icon: <LuSparkles className="text-purple-400" size={24}  />,
    className: "md:col-span-2"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container relative z-10  mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl glass group ${f.className}`}
            >
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}