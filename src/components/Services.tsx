/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Laptop, ShoppingCart, Code2, Layers, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onBudgetClick: () => void;
}

export default function Services({ onBudgetClick }: ServicesProps) {
  const servicesList = [
    {
      id: 'lp',
      title: 'Landing Pages de Alta Conversão',
      description: 'Páginas exclusivas voltadas para atrair novos leads e aumentar as vendas do seu negócio. Design impecável e otimização de velocidade para anúncios de Google Ads e Meta Ads.',
      icon: Laptop,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      features: ['SEO amigável', 'Foco em Conversão', 'Design Exclusivo'],
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & Lojas Virtuais',
      description: 'Plataformas completas de vendas online rápidas de navegar, totalmente responsivas e preparadas para integrações de pagamentos e envios. Expanda sua presença comercial na internet.',
      icon: ShoppingCart,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      features: ['Carrinho intuitivo', 'Meios de Pagamentos', 'Painel administrativo'],
    },
    {
      id: 'webapp',
      title: 'Sistemas Web Personalizados',
      description: 'Aplicações SaaS, painéis de controle administrativos dinâmicos (dashboards) e portfólios corporativos complexos construídos sob medida utilizando as tecnologias mais modernas.',
      icon: Code2,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      features: ['React & Node', 'Banco de dados', 'APIs integradas'],
    },
    {
      id: 'uiux',
      title: 'Design de Interfaces UI/UX',
      description: 'Prototipação de telas, mockups interativos de produtos, design systems modernos com atenção rigorosa a contrastes, legibilidade, fluidez e consistência de marca.',
      icon: Layers,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      features: ['Telas no Figma', 'Estilo Moderno', 'Experiência Fluida'],
    },
  ];

  return (
    <section id="servicos" className="relative px-6 py-24 md:px-12 xl:px-24">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center md:text-left mb-16 max-w-xl">
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
            Serviços de Desenvolvimento
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-zinc-400 leading-relaxed"
          >
            Designs sob medida, código limpo e arquiteturas eficientes para elevar o patamar do seu projeto e sua autoridade digital.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300"
              >
                {/* Background accent hover flare */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div>
                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.bgColor} ${service.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features list */}
                  <ul className="mt-6 space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-500/80" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    id={`service-${service.id}-budget-btn`}
                    onClick={onBudgetClick}
                    className="inline-flex items-center text-xs font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    Simular projeto &rarr;
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
