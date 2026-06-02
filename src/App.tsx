/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

export default function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('inicio');
  const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);

  const backdropRef = useRef<HTMLDivElement | null>(null);
  const personRef = useRef<HTMLImageElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);

  const isHeroActiveRef = useRef(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const sectionIds = ['inicio', 'servicos', 'projetos', 'contato'];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const isMobileOrTablet = window.innerWidth < 1024;

      const viewportMiddle = scrollPosition + window.innerHeight * 0.38;

      let currentSection = 'inicio';

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (viewportMiddle >= section.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);

      if (isMobileOrTablet) {
        setIsBackgroundBlurred(scrollPosition > window.innerHeight * 0.32);
      } else {
        setIsBackgroundBlurred(scrollPosition > window.innerHeight * 0.30);
      }
    };

    updateActiveSection();

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          const offset = 80;
          const offsetPosition = el.offsetTop - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
      window.history.replaceState({}, document.title)
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  const isHeroActive = location.pathname === '/' ? !isBackgroundBlurred : false;

  useEffect(() => {
    isHeroActiveRef.current = isHeroActive;

    if (!isHeroActive) {
      if (backdropRef.current) {
        backdropRef.current.style.transform =
          'translate3d(0px, 0px, 0) scale(1.015)';
      }

      if (personRef.current) {
        personRef.current.style.transform = `
          perspective(2200px)
          translate3d(0px, 0px, 0)
          rotateY(0deg)
          rotateX(0deg)
          scale(1.012)
        `;
      }

      if (lightRef.current) {
        lightRef.current.style.opacity = '0.18';
      }
    }
  }, [isHeroActive]);

  useEffect(() => {
    const canUseMouseParallax = window.matchMedia('(pointer: fine)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (!canUseMouseParallax || !isDesktop) return;

    let animationFrameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!isHeroActiveRef.current) return;

      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
        const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;

        if (backdropRef.current) {
          backdropRef.current.style.transform = `
            translate3d(${normalizedX * -0.4}px, ${normalizedY * -0.25}px, 0)
            scale(1.006)
          `;
        }

        if (personRef.current) {
          personRef.current.style.transform = `
            perspective(2400px)
            translate3d(${normalizedX * 1.1}px, ${normalizedY * 0.7}px, 0)
            rotateY(${normalizedX * -0.12}deg)
            rotateX(${normalizedY * 0.08}deg)
            scale(1.006)
          `;
        }

        if (lightRef.current) {
          lightRef.current.style.opacity = '0.26';
          lightRef.current.style.background = `
            radial-gradient(
              circle at ${50 + normalizedX * 1}% ${45 + normalizedY * 1}%,
              rgba(80, 150, 255, 0.035),
              transparent 28%
            )
          `;
        }
      });
    };

    const handleMouseLeave = () => {
      if (backdropRef.current) {
        backdropRef.current.style.transform =
          'translate3d(0px, 0px, 0) scale(1.006)';
      }

      if (personRef.current) {
        personRef.current.style.transform = `
          perspective(2400px)
          translate3d(0px, 0px, 0)
          rotateY(0deg)
          rotateX(0deg)
          scale(1.006)
        `;
      }

      if (lightRef.current) {
        lightRef.current.style.opacity = '0.22';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleServicesScrollClick = () => {
    const el = document.getElementById('servicos');

    if (el) {
      const offset = 80;
      const offsetPosition = el.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* 
        Fundo mobile/tablet:
        Usa imagem única pronta, sem kaio-recorte por cima.
      */}
      <picture className="pointer-events-none fixed inset-0 z-0 block h-screen w-screen overflow-hidden lg:hidden">
        <source
          media="(max-width: 767px)"
          srcSet="/fundomobile.png"
        />

        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet="/fundotablet.png"
        />

        <img
          src="/fundomobile.png"
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover object-center transition-[filter,transform] duration-700 ease-out ${isHeroActive ? 'scale-100 blur-0' : 'scale-105 blur-md'
            }`}
        />
      </picture>

      {/* Fundo desktop: mantém o esquema atual */}
      <div
        ref={backdropRef}
        id="app-fixed-backdrop"
        className={`fixed inset-0 z-0 hidden h-screen w-screen bg-cover bg-[position:52%_center] bg-no-repeat md:bg-center lg:block ${isHeroActive ? 'blur-0' : 'blur-md'
          }`}
        style={{
          backgroundImage: "url('/fundosemeu.png')",
          transform: 'translate3d(0px, 0px, 0) scale(1.006)',
          transition: isHeroActive
            ? 'filter 700ms ease-out'
            : 'transform 700ms ease-out, filter 700ms ease-out',
          willChange: 'transform, filter',
        }}
      />

      {/* Pessoa recortada só no desktop */}
      <img
        ref={personRef}
        id="app-person-parallax"
        src="/kaio-recorte.png"
        alt=""
        aria-hidden="true"
        className={`pointer-events-none fixed inset-0 z-0 hidden h-screen w-screen object-cover object-[52%_center] md:object-center lg:block ${isHeroActive ? 'blur-0' : 'blur-md'
          }`}
        style={{
          transform: `
            perspective(2400px)
            translate3d(0px, 0px, 0)
            rotateY(0deg)
            rotateX(0deg)
            scale(1.006)
          `,
          transformOrigin: 'center center',
          transition: isHeroActive
            ? 'filter 700ms ease-out'
            : 'transform 700ms ease-out, filter 700ms ease-out',
          willChange: 'transform, filter',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Luz radial quase invisível */}
      <div
        ref={lightRef}
        id="app-depth-light"
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{
          opacity: isHeroActive ? 0.22 : 0.18,
          background: `
            radial-gradient(
              circle at 50% 45%,
              rgba(80, 150, 255, 0.03),
              transparent 28%
            )
          `,
        }}
      />

      {/* Camada leve na Hero e mais escura nas outras seções */}
      <div
        id="app-soft-overlay"
        className={`pointer-events-none fixed inset-0 z-0 transition-colors duration-700 ${isHeroActive ? 'bg-black/10' : 'bg-black/45'
          }`}
      />

      {/* Vinheta sutil nas bordas */}
      <div
        id="app-vignette-overlay"
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(0,0,0,0.45)_100%)]"
      />

      {/* Conteúdo do site */}
      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          onBudgetClick={() => setIsBudgetModalOpen(true)}
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onBudgetClick={() => setIsBudgetModalOpen(true)} 
                onServicesClick={handleServicesScrollClick} 
              />
            } 
          />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>

      <ContactModal
        isOpen={isBudgetModalOpen}
        onClose={() => setIsBudgetModalOpen(false)}
      />
    </div>
  );
}