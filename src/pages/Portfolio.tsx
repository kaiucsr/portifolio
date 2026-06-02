import { motion } from 'motion/react';
import Projects from '../components/Projects';

export default function Portfolio() {
  return (
    <main className="relative w-full pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 md:px-12 xl:px-24 mb-4">
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

      <Projects isFullPage={true} />
    </main>
  );
}
