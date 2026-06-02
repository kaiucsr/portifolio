/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Mail, Linkedin, Globe } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setTimeout(() => {
      // Save message contact info in local state
      const existingMsg = JSON.parse(localStorage.getItem('messages') || '[]');
      existingMsg.push({ name, email, message, date: new Date().toLocaleDateString('pt-BR'), id: Date.now() });
      localStorage.setItem('messages', JSON.stringify(existingMsg));

      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  const contactChannels = [
    {
      id: 'whatsapp',
      label: 'WhatsApp Comercial',
      value: '+55 (83) 99951-1523',
      sub: 'Atendimento instantâneo',
      icon: MessageSquare,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      href: 'https://wa.me/5583999511523?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+de+site.',
    },
    {
      id: 'email',
      label: 'E-mail Direto',
      value: 'devkaio135@gmail.com',
      sub: 'Resposta em até 24 horas',
      icon: Mail,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      href: 'mailto:kaio@kaioodev.com.br?subject=Orçamento%20de%20Website',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Profissional',
      value: 'linkedin.com/in/kaioodev',
      sub: 'Conexões corporativas',
      icon: Linkedin,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      href: 'https://linkedin.com',
    },
  ];

  return (
    <section id="contato" className="relative px-6 py-24 md:px-12 xl:px-24 border-t border-white/5 bg-black/30">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center md:text-left mb-16 max-w-xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-blue-400"
          >
            Fale Comigo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl"
          >
            Vamos Iniciar um Projeto?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-zinc-400 leading-relaxed"
          >
            Explique o seu desafio de negócios ou ideia digital e responderei com uma análise estratégica detalhada sobre como podemos resolver juntos.
          </motion.p>
        </div>

        {/* Dual column: Info contacts and direct form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Info Contact Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            {contactChannels.map((channel, idx) => {
              const ChannelIcon = channel.icon;
              return (
                <motion.a
                  key={channel.id}
                  id={`contact-channel-${channel.id}`}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 5, borderColor: 'rgba(59, 130, 246, 0.2)' }}
                  className="flex items-center gap-5 rounded-xl border border-white/5 bg-zinc-950/40 p-5 transition-all duration-300"
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${channel.bgColor} ${channel.color}`}>
                    <ChannelIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block font-medium">
                      {channel.label}
                    </span>
                    <span className="text-sm font-bold text-white block mt-0.5">
                      {channel.value}
                    </span>
                    <span className="text-[10px] text-zinc-500 block">
                      {channel.sub}
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Direct Interactive Form Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/5 bg-zinc-950/40 p-8 backdrop-blur-md"
            >
              {!submitted ? (
                <form id="contact-panel-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-semibold text-zinc-300">
                        Seu nome *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Mello"
                        className="w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-semibold text-zinc-300">
                        Seu e-mail *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ex: carlos@empresa.com"
                        className="w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-msg" className="text-xs font-semibold text-zinc-300">
                      Mensagem explicativa *
                    </label>
                    <textarea
                      id="form-msg"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Descreva simplificadamente a solução web que seu negócio precisa..."
                      className="w-full resize-none rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Submit inside column */}
                  <button
                    id="contact-panel-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-blue-500 hover:to-blue-400 focus:outline-none disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar Mensagem Direta
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  id="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Mensagem Recebida!</h4>
                  <p className="mt-2 text-sm text-zinc-400 max-w-sm mx-auto">
                    Agradeço o contato! Sua mensagem foi guardada em segurança. Entrarei em contato em breve em seu e-mail.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-blue-400 font-bold hover:underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Branding Footer bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
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
