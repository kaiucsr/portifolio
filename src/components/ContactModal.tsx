/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { BudgetSubmission } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Landing Page');
  const [projectDescription, setProjectDescription] = useState('');
  const [budgetRange, setBudgetRange] = useState('R$ 2.000 - R$ 5.000');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !projectDescription) return;

    setLoading(true);
    // Simulate API processing
    setTimeout(() => {
      const submission: BudgetSubmission = {
        name,
        email,
        serviceType,
        projectDescription,
        budgetRange,
      };

      // Store in localStorage for persistence
      const currentSubmissions = JSON.parse(localStorage.getItem('budgets') || '[]');
      currentSubmissions.push({ ...submission, id: Date.now(), date: new Date().toLocaleDateString('pt-BR') });
      localStorage.setItem('budgets', JSON.stringify(currentSubmissions));

      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setServiceType('Landing Page');
    setProjectDescription('');
    setBudgetRange('R$ 2.000 - R$ 5.000');
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            id="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 p-8 shadow-2xl backdrop-blur-md"
          >
            {/* Ambient Accent Glow inside modal */}
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />

            {/* Close Button */}
            <button
              id="close-modal-btn"
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors duration-200"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form id="budget-form" onSubmit={handleSubmit} className="relative z-10 space-y-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-blue-400" />
                    <h3 className="text-xl font-bold tracking-tight text-white leading-none">
                      Solicitar Orçamento
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Preencha o formulário e receba uma estimativa de valor e prazo para o seu projeto digital.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-300">
                    Seu Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Albuquerque"
                    className="w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-300">
                    E-mail Corporativo ou Pessoal *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: carlos@empresa.com.br"
                    className="w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Service Type Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="serviceType" className="text-xs font-semibold text-zinc-300">
                    Tipo de Serviço
                  </label>
                  <select
                    id="serviceType"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="Landing Page">Landing Page Profissional</option>
                    <option value="E-commerce">E-commerce / Loja Virtual</option>
                    <option value="Sistema Web">Sistema Web Personalizado</option>
                    <option value="UI/UX Design">Mockups & Design de UI/UX</option>
                    <option value="Outro">Outro Projeto Sob Demanda</option>
                  </select>
                </div>

                {/* Project Description */}
                <div className="space-y-1.5">
                  <label htmlFor="desc" className="text-xs font-semibold text-zinc-300">
                    Detalhes do Projeto *
                  </label>
                  <textarea
                    id="desc"
                    required
                    rows={3}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Descreva brevemente o que seu negócio precisa, objetivos e funcionalidades principais..."
                    className="w-full resize-none rounded-lg border border-white/10 bg-zinc-900/60 px-4 py-2.5 text-sm text-white placeholder-zinc-500 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                {/* Budget Range Slider Helper */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-300">Estimativa de Investimento</span>
                    <span className="text-blue-400 font-bold">{budgetRange}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {['R$ 2k - R$ 5k', 'R$ 5k - R$ 10k', 'R$ 10k+'].map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setBudgetRange(range.replace('k', '.000').replace('k', '.000'))}
                        className={`rounded-md border py-2 text-center text-xs font-medium cursor-pointer transition-colors duration-200 ${
                          budgetRange.includes(range.substring(0, 4))
                            ? 'border-blue-500 bg-blue-500/15 text-blue-400'
                            : 'border-white/5 bg-zinc-900/40 text-zinc-400 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  id="submit-budget-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,99,235,0.35)] transition-all duration-300 hover:from-blue-500 hover:to-blue-400 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-950 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar Solicitação
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                id="modal-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <CheckCircle2 className="h-10 w-10 animate-pulse" />
                </div>
                <h4 className="text-xl font-bold tracking-tight text-white">
                  Solicitação Enviada!
                </h4>
                <p className="mx-auto mt-2 max-w-sm text-sm text-zinc-400">
                  Obrigado, <span className="font-semibold text-white">{name}</span>! Recebemos seus dados. Entraremos em contato no e-mail <span className="text-blue-400 font-medium">{email}</span> dentro de 24 horas úteis com sua pré-proposta comercial.
                </p>
                <button
                  id="success-close-btn"
                  onClick={handleClose}
                  className="mt-6 rounded-lg border border-white/10 bg-zinc-900/60 px-6 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                >
                  Entendido, fechar
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
