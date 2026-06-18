/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, type ElementType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Laptop,
  ShoppingCart,
  Code2,
  Palette,
  BookOpen,
  Utensils,
  CheckCircle2,
  MessageCircle,
  ChevronDown,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceOption {
  name: string;
  description: string;
  whatsappMessage: string;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
  color: string;
  bgColor: string;
  highlights: string[];
  optionsTitle: string;
  options: ServiceOption[];
}

export default function ServicesPage() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const phoneNumber = '5583999511523';

  const createWhatsappUrl = (message: string) => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const servicesList: ServiceItem[] = [
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
        'Páginas de apresentação',
        'Portfólios profissionais',
      ],
      optionsTitle: 'Tipos de trabalho nessa área:',
      options: [
        {
          name: 'Site institucional',
          description:
            'Um site para apresentar sua empresa, seus serviços, diferenciais, localização e formas de contato.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um site institucional para apresentar minha empresa na internet. Quero conversar sobre valores, prazo e como funcionaria o projeto.',
        },
        {
          name: 'Landing page',
          description:
            'Uma página objetiva para apresentar um serviço, produto, evento ou oferta específica, facilitando o contato do cliente.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em uma landing page para divulgar um serviço ou produto. Quero conversar sobre valores, prazo e como funcionaria.',
        },
        {
          name: 'Portfólio profissional',
          description:
            'Uma página para mostrar trabalhos, projetos, experiências e informações profissionais de forma organizada.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um portfólio profissional online. Quero conversar sobre valores, prazo e como funcionaria o projeto.',
        },
      ],
    },
    {
      id: 'lojas',
      title: 'Loja Virtual / E-commerce',
      description:
        'Loja online dentro de um site, onde o cliente pode ver produtos, adicionar ao carrinho, calcular frete e finalizar a compra de forma mais prática.',
      icon: ShoppingCart,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      highlights: [
        'Produtos organizados',
        'Carrinho de compras',
        'Pagamento online',
      ],
      optionsTitle: 'Tipos de trabalho nessa área:',
      options: [
        {
          name: 'Loja virtual / E-commerce',
          description:
            'Uma loja online com produtos, categorias, carrinho, cálculo de frete e possibilidade de pagamento online.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em uma loja virtual/e-commerce para vender meus produtos online. Quero conversar sobre valores, prazo e funcionalidades.',
        },
        {
          name: 'Vitrine de produtos',
          description:
            'Uma página para mostrar produtos de forma organizada, sem precisar ser uma loja completa com pagamento online.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em uma vitrine de produtos online. Quero conversar sobre valores, prazo e como funcionaria.',
        },
        {
          name: 'Vitrine com atendimento pelo WhatsApp',
          description:
            'Uma estrutura onde o cliente vê os produtos e chama diretamente no WhatsApp para tirar dúvidas ou fazer o pedido.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em uma vitrine de produtos com atendimento pelo WhatsApp. Quero conversar sobre valores e prazo.',
        },
      ],
    },
    {
      id: 'delivery',
      title: 'Cardápios e Sistemas de Delivery',
      description:
        'Soluções para negócios que trabalham com pedidos, como docerias, lanchonetes, restaurantes e lojas que fazem entrega.',
      icon: Utensils,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      highlights: [
        'Cardápio digital',
        'Pedidos pelo WhatsApp',
        'Delivery completo',
      ],
      optionsTitle: 'Tipos de trabalho nessa área:',
      options: [
        {
          name: 'Cardápio digital',
          description:
            'Um cardápio online com produtos, preços, fotos e descrições, onde o cliente pode escolher e chamar pelo WhatsApp para fazer o pedido.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um cardápio digital para meu negócio, com pedido pelo WhatsApp. Quero conversar sobre valores, prazo e funcionalidades.',
        },
        {
          name: 'Sistema de delivery completo',
          description:
            'Um sistema com cardápio, carrinho, finalização de pedido, pagamento online e rastreio/status do pedido dentro do site.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um sistema de delivery completo, com cardápio, carrinho, pagamento online e rastreio de pedido. Quero conversar sobre valores, prazo e funcionalidades.',
        },
      ],
    },
    {
      id: 'catalogos',
      title: 'Catálogos Digitais',
      description:
        'Catálogos organizados para apresentar produtos ou serviços de forma mais profissional, seja em PDF ou em uma versão online.',
      icon: BookOpen,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      highlights: [
        'Catálogo em PDF',
        'Catálogo virtual',
        'Material para WhatsApp',
      ],
      optionsTitle: 'Tipos de trabalho nessa área:',
      options: [
        {
          name: 'Catálogo em PDF',
          description:
            'Um arquivo digital com produtos, fotos, descrições e informações organizadas para enviar pelo WhatsApp.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um catálogo digital em PDF para apresentar meus produtos ou serviços. Quero conversar sobre valores e prazo.',
        },
        {
          name: 'Catálogo virtual',
          description:
            'Um catálogo online, dentro de uma página ou site, para apresentar produtos ou serviços de forma organizada e fácil de acessar.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um catálogo virtual para apresentar meus produtos ou serviços. Quero conversar sobre valores e prazo.',
        },
        {
          name: 'Catálogo para divulgação',
          description:
            'Um material visual organizado para divulgar produtos, combos, serviços ou ofertas de forma mais profissional.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um catálogo para divulgar produtos ou serviços. Quero conversar sobre valores, formato e prazo.',
        },
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
        'Controle de informações',
        'Automações simples',
      ],
      optionsTitle: 'Tipos de trabalho nessa área:',
      options: [
        {
          name: 'Painel administrativo',
          description:
            'Uma área para controlar informações importantes do negócio, como pedidos, clientes, produtos, status ou registros.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um painel administrativo para organizar informações do meu negócio. Quero conversar sobre valores e prazo.',
        },
        {
          name: 'Sistema de agendamento',
          description:
            'Uma solução para o cliente solicitar horários, serviços ou atendimentos de forma mais organizada.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em um sistema de agendamento para meu negócio. Quero conversar sobre valores, prazo e funcionalidades.',
        },
        {
          name: 'Automação de processos simples',
          description:
            'Automações para reduzir tarefas repetitivas, organizar informações ou facilitar alguma etapa do atendimento.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em uma automação para facilitar processos do meu negócio. Quero explicar minha ideia e entender se é possível fazer.',
        },
      ],
    },
    {
      id: 'design',
      title: 'Design para Marcas e Instagram',
      description:
        'Artes digitais para deixar sua marca mais profissional nas redes sociais, no WhatsApp e em materiais de divulgação.',
      icon: Palette,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      highlights: [
        'Criativos para Instagram',
        'Banners digitais',
        'Logotipos e marca',
      ],
      optionsTitle: 'Tipos de trabalho nessa área:',
      options: [
        {
          name: 'Criativos para Instagram',
          description:
            'Artes para posts, stories, promoções, avisos, divulgação de produtos ou apresentação de serviços.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em criativos para Instagram. Quero conversar sobre valores, quantidade de artes e prazo.',
        },
        {
          name: 'Banners digitais',
          description:
            'Banners para divulgar ofertas, eventos, produtos, serviços ou campanhas nas redes sociais e no WhatsApp.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em banners digitais para divulgação. Quero conversar sobre valores e prazo.',
        },
        {
          name: 'Redesign de logotipo',
          description:
            'Melhoria ou atualização de uma logo existente, mantendo a ideia da marca, mas deixando o visual mais profissional.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse em redesign de logotipo. Já tenho uma marca e quero melhorar o visual dela.',
        },
        {
          name: 'Criação de logotipo',
          description:
            'Criação de uma identidade visual inicial para negócios que ainda não possuem uma marca definida.',
          whatsappMessage:
            'Olá, Kaio! Tenho interesse na criação de um logotipo para minha marca. Quero conversar sobre valores, prazo e como funcionaria.',
        },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      <section className="relative px-6 pt-32 pb-24 md:px-12 md:pt-40 xl:px-24">
        <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

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

          <div className="mb-16 max-w-2xl text-center md:text-left">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400"
            >
              Especialidades
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-4xl font-black tracking-tight text-white md:text-5xl"
            >
              Serviços e soluções digitais
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base"
            >
              Veja os principais tipos de projetos que posso desenvolver para ajudar sua empresa a se apresentar melhor, vender com mais clareza e organizar processos.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:gap-8">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              const isOpen = openServiceId === service.id;

              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                  className="group relative flex self-start flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 p-8 shadow-xl backdrop-blur-md transition-all duration-300"
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

                    <button
                      type="button"
                      onClick={() => setOpenServiceId(isOpen ? null : service.id)}
                      className="
                        mt-7 inline-flex w-full items-center justify-between
                        rounded-xl border border-white/10 bg-white/[0.03]
                        px-4 py-3 text-left text-sm font-semibold text-white
                        transition-all duration-300
                        hover:border-blue-500/40 hover:bg-blue-500/10
                        focus:outline-none
                      "
                    >
                      <span>{isOpen ? 'Fechar opções' : 'Ver tipos de trabalho'}</span>

                      <ChevronDown
                        className={`h-4 w-4 text-blue-400 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="text-sm font-bold text-white">
                              {service.optionsTitle}
                            </p>

                            <div className="mt-4 space-y-4">
                              {service.options.map((option) => (
                                <div
                                  key={option.name}
                                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                                >
                                  <div className="flex gap-2">
                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                                    <div>
                                      <h4 className="text-sm font-bold text-white">
                                        {option.name}
                                      </h4>

                                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                                        {option.description}
                                      </p>
                                    </div>
                                  </div>

                                  <a
                                    href={createWhatsappUrl(option.whatsappMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                      mt-4 inline-flex w-full items-center justify-center gap-2
                                      rounded-lg border border-blue-500/25
                                      bg-blue-500/10 px-4 py-2.5
                                      text-xs font-bold text-blue-100
                                      transition-all duration-300
                                      hover:border-blue-400/50 hover:bg-blue-500/20
                                      hover:text-white
                                    "
                                  >
                                    <MessageCircle className="h-3.5 w-3.5" />
                                    Falar sobre {option.name}
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Custom Idea */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40 px-6 py-12 text-center shadow-2xl backdrop-blur-md md:px-12 md:py-16"
          >
            {/* Glow background */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]" />

            <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              Não encontrou o que estava procurando?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Me conte sua ideia ou necessidade. Mesmo que não esteja listada aqui, posso analisar o projeto e te dizer a melhor forma de transformar isso em uma solução digital.
            </p>

            <div className="mt-8">
              <a
                href={createWhatsappUrl('Olá, Kaio! Vi sua página de serviços, mas tenho uma ideia/necessidade diferente e queria conversar para saber se você consegue me ajudar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center gap-2 rounded-full
                  bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4
                  text-sm font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]
                  transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                "
              >
                <MessageCircle className="h-5 w-5" />
                Falar sobre minha ideia
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}