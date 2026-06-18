/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Globe, MessageCircle } from 'lucide-react';

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/5583999511523?text=Ol%C3%A1%2C%20Kaio%21%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20fazer%20um%20or%C3%A7amento%20para%20um%20projeto.";

  return (
    <section
      id="contato"
      className="relative overflow-hidden px-4 py-24 md:px-8 xl:px-12 border-t border-white/5"
    >
      {/* Glow externo removido a pedido para não parecer uma segunda camada */}

      <div className="mx-auto w-full max-w-[1440px] flex flex-col items-center">
        {/* Container for Card + Overflow Logo */}
        <div className="relative w-full mb-8">
          {/* Large Centralized CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              relative w-full overflow-hidden rounded-[2rem]
              border border-white/10
              px-6 py-20 md:px-16 md:py-28
              text-center shadow-2xl
            "
          >
            {/* Base escura e sólida apenas na metade de baixo, ficando transparente em cima */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03070c] via-[#03070c]/80 to-transparent" />

            {/* Fade super escuro no topo para transição suave sem parecer cortado */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/80 to-transparent" />

            {/* Azul forte e vibrante vindo de baixo, bem preenchido */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-cyan-400/60 via-blue-600/50 to-transparent" />

            {/* Hotspots azul e ciano mais visíveis para preencher a base */}
            <div className="pointer-events-none absolute -bottom-[200px] left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/40 blur-[120px]" />
            <div className="pointer-events-none absolute -bottom-[100px] left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/50 blur-[100px]" />

            {/* Conteúdo */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="
                  text-4xl md:text-5xl lg:text-7xl
                  font-black tracking-tight text-white
                  mb-8 max-w-5xl leading-[1.1]
                "
              >
                Vamos criar a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                  solução ideal
                </span>{' '}
                para o seu negócio?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto mb-14 leading-relaxed"
              >
                Me chame no WhatsApp e vamos conversar sobre a melhor solução digital para o seu negócio.
              </motion.p>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="
                  inline-flex items-center justify-center gap-3
                  rounded-full bg-white px-10 py-5
                  text-sm md:text-base font-black text-blue-950
                  shadow-[0_0_40px_rgba(56,189,248,0.28)]
                  transition-transform duration-300
                  hover:scale-105 hover:bg-zinc-100
                  hover:shadow-[0_0_70px_rgba(56,189,248,0.45)]
                  focus:outline-none
                "
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Branding Footer bar */}
        <div className="w-full mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-lg font-black tracking-tight text-white">
            kaioodev
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>

          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} kaioodev. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Globe className="h-3.5 w-3.5 text-zinc-600" />
            <span>São Bento - PB, Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
}