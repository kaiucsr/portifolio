/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Laptop,
  ShoppingCart,
  Code2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const servicesPreview = [
    {
      id: 'sites',
      title: 'Sites e Páginas Profissionais',
      description:
        'Criação de páginas modernas para apresentar seu negócio, seus serviços ou seu trabalho de forma mais profissional na internet.',
      icon: Laptop,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      highlights: [
        'Sites para empresas',
        'Landing pages',
        'Portfólios profissionais',
      ],
    },
    {
      id: 'vendas',
      title: 'Lojas, Catálogos e Delivery',
      description:
        'Soluções para apresentar produtos, receber pedidos e facilitar vendas online, seja por catálogo, loja virtual ou sistema de delivery.',
      icon: ShoppingCart,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      highlights: [
        'Loja virtual / E-commerce',
        'Catálogo digital',
        'Cardápio e delivery',
      ],
    },
    {
      id: 'sistemas',
      title: 'Sistemas Web e Automações',
      description:
        'Ferramentas personalizadas para organizar informações, controlar processos e facilitar tarefas do dia a dia do seu negócio.',
      icon: Code2,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      highlights: [
        'Painéis administrativos',
        'Sistemas de agendamento',
        'Automações simples',
      ],
    },
  ];

  return (
    <section id="servicos" className="relative px-6 py-24 md:px-12 xl:px-24">
      <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400"
            >
              Especialidades
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl"
            >
              Serviços e soluções digitais
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm leading-relaxed text-zinc-400"
            >
              Algumas formas de ajudar sua empresa a se apresentar melhor, vender com mais clareza e organizar processos.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {servicesPreview.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                id={`service-preview-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="
                  group relative flex min-h-[340px] flex-col justify-between
                  overflow-hidden rounded-2xl border border-white/5
                  bg-zinc-950/40 p-8 shadow-xl backdrop-blur-md
                  transition-all duration-300
                "
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${service.bgColor} ${service.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center gap-2 text-xs font-medium text-zinc-400"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-500/80" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/servicos"
                  className="
                    mt-8 inline-flex w-full items-center justify-center gap-2
                    rounded-xl border border-blue-500/30
                    bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-100
                    transition-all duration-300
                    hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white
                  "
                >
                  Ver opções desse serviço
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/servicos"
            className="
              inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full
              border border-white/10 bg-white/5 px-6 py-3
              text-sm font-semibold text-white backdrop-blur-sm
              transition-all duration-300
              hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-100
            "
          >
            Ver todos os serviços
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}