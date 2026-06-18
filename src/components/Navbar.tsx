/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  activeSection: string;
}

function AnimatedLogo() {
  const textWidth = 112;

  return (
    <span
      className="relative inline-flex h-8 items-center"
      style={{
        width: `${textWidth + 12}px`,
      }}
    >
      {/* Máscara que revela o texto conforme a bolinha anda */}
      <motion.span
        initial={{
          width: 0,
        }}
        animate={{
          width: textWidth,
        }}
        transition={{
          duration: 0.95,
          delay: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-0 top-1/2 inline-block -translate-y-1/2 overflow-hidden whitespace-nowrap"
      >
        <span className="inline-block text-2xl font-black tracking-tight text-white">
          kaioodev
        </span>
      </motion.span>

      {/* Bolinha revelando o texto */}
      <motion.span
        initial={{
          x: 0,
          scale: 0.85,
          opacity: 0,
        }}
        animate={{
          x: textWidth - 10,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          opacity: {
            duration: 0.2,
            delay: 0.75,
          },
          x: {
            duration: 0.95,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1],
          },
          scale: {
            duration: 0.55,
            delay: 0.9,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        className="absolute left-0 top-1/2 z-10 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]"
      />
    </span>
  );
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const whatsappUrl =
    'https://wa.me/5583999511523?text=Ol%C3%A1%2C%20Kaio%21%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20fazer%20um%20or%C3%A7amento.';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === 'inicio') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
      }
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/5 bg-black/70 py-4 shadow-lg backdrop-blur-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 md:px-12 xl:px-24">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Logo animada */}
            <a
              id="navbar-logo"
              href="#inicio"
              onClick={(e) => handleNavClick(e, 'inicio')}
              className="group flex w-fit items-center transition-opacity hover:opacity-90"
              aria-label="Ir para o início"
            >
              <AnimatedLogo />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center space-x-8 md:flex lg:space-x-12">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 hover:text-white ${
                    activeSection === item.id
                      ? 'font-semibold text-white'
                      : 'text-zinc-400'
                  }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA Nav button */}
            <div className="hidden justify-self-end md:block">
              <a
                id="nav-budget-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] focus:outline-none"
              >
                Orçamento
              </a>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="col-start-3 cursor-pointer justify-self-end rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white focus:outline-none md:hidden"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[72px] z-30 border-b border-white/5 bg-zinc-950/95 px-6 py-6 shadow-2xl backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-2 text-base font-semibold transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="my-2 h-px bg-white/5" />

              <a
                id="mobile-nav-budget-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Pedir orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}