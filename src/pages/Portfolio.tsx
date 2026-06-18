import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';

export default function Portfolio() {
  return (
    <main className="relative w-full pt-32 pb-24 min-h-screen">
      <div className="relative px-6 md:px-12 xl:px-24 mb-4 md:mb-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="
                inline-flex items-center gap-2 rounded-full border border-white/10
                bg-white/5 px-5 py-2 text-sm font-semibold text-zinc-300
                backdrop-blur-sm transition-all duration-300
                hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white
              "
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para início
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Portfólio Completo
            </span>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl">
              Projetos e trabalhos
            </h1>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Uma seleção de sites, sistemas, automações e soluções digitais desenvolvidas para negócios, estudos e projetos reais.
            </p>
          </motion.div>
        </div>
      </div>

      <Projects isFullPage={true} />
    </main>
  );
}
