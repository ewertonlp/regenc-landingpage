import { FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    // 1. A SOLUÇÃO: Adicionado 'relative z-10' aqui na tag footer
    <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-[#020617]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Lado Esquerdo: Logo e Descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded flex items-center justify-center">
                <Image src="/regenc_logo_bc.png" alt="Regenc Logo" width={28} height={28} />
              </div>
              <span className="text-lg font-medium text-white tracking-wide leading-tight">regenc</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Transformando o mercado imobiliário através da Inteligência Artificial.
            </p>
          </div>

          {/* Lado Direito: Redes Sociais e Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-5 text-slate-400">
              <a 
                href="https://instagram.com/regenc.app" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="hover:text-pink-500 transition-colors cursor-pointer"
              >
                <FaInstagram size={25} />
              </a>
              {/* <a 
                href="#" 
                aria-label="WhatsApp" 
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={25} />
              </a> */}
              <a 
                href="mailto:suporte.regenc@gmail.com" 
                aria-label="Email" 
                className="hover:text-blue-500 transition-colors"
              >
                <FaRegEnvelope size={25} />
              </a>
            </div>
            
            <div className="flex gap-6 text-xs text-slate-500">
              <Link 
                href="/privacidade" 
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Privacidade
              </Link>
              <Link 
                href="/termos" 
                className="hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                Termos de Uso
              </Link>
            </div>
            <p className="text-xs text-slate-600">
              © 2026 Regenc App. Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}