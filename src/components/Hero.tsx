/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface HeroProps {
  onServicesClick: () => void;
}

interface TitleLine {
  words: string[];
  underlineStart?: number;
  underlineEnd?: number;
  underlineDelay?: number;
}

interface RevealWordProps {
  children: string;
  delay: number;
}

function RevealWord({ children, delay }: RevealWordProps) {
  return (
    <span className="inline-block overflow-hidden align-baseline px-[0.04em] -mx-[0.04em] py-[0.16em] -my-[0.16em]">
      <motion.span
        initial={{ y: '115%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{
          duration: 0.95,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

interface UnderlinedWordsProps {
  words: string[];
  lineIndex: number;
  startWordIndex: number;
  underlineDelay: number;
}

function UnderlinedWords({
  words,
  lineIndex,
  startWordIndex,
  underlineDelay,
}: UnderlinedWordsProps) {
  return (
    <span className="relative inline-flex items-baseline overflow-visible pr-[0.14em]">
      {words.map((word, wordIndex) => {
        const realWordIndex = startWordIndex + wordIndex;
        const delay = 0.9 + lineIndex * 0.24 + realWordIndex * 0.11;

        return (
          <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-block">
            <RevealWord delay={delay}>{word}</RevealWord>
          </span>
        );
      })}

      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 0.85,
          delay: underlineDelay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          absolute left-0 right-[0.12em] -bottom-[0.02em] h-[0.085em] origin-left
          rounded-full bg-blue-500
          shadow-[0_0_14px_rgba(37,99,235,0.45)]
        "
      />
    </span>
  );
}

interface RevealLineProps {
  key?: number;
  line: TitleLine;
  lineIndex: number;
}

function RevealLine({ line, lineIndex }: RevealLineProps) {
  const hasUnderline =
    typeof line.underlineStart === 'number' &&
    typeof line.underlineEnd === 'number';

  const lineSpacingClass = lineIndex === 2 ? 'mb-[0.06em]' : '-mb-[0.14em]';

  if (!hasUnderline) {
    return (
      <span className={`block overflow-visible ${lineSpacingClass}`}>
        {line.words.map((word, wordIndex) => {
          const delay = 0.9 + lineIndex * 0.24 + wordIndex * 0.11;

          return (
            <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-block">
              <RevealWord delay={delay}>{word}</RevealWord>
            </span>
          );
        })}
      </span>
    );
  }

  const beforeWords = line.words.slice(0, line.underlineStart);
  const underlinedWords = line.words.slice(line.underlineStart, line.underlineEnd);
  const afterWords = line.words.slice(line.underlineEnd);

  return (
    <span className={`block overflow-visible ${lineSpacingClass}`}>
      <span className="inline-flex items-baseline overflow-visible">
        {beforeWords.map((word, wordIndex) => {
          const delay = 0.9 + lineIndex * 0.24 + wordIndex * 0.11;

          return (
            <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-block">
              <RevealWord delay={delay}>{word}</RevealWord>
            </span>
          );
        })}

        <UnderlinedWords
          words={underlinedWords}
          lineIndex={lineIndex}
          startWordIndex={line.underlineStart ?? 0}
          underlineDelay={line.underlineDelay ?? 1.7}
        />

        {afterWords.map((word, wordIndex) => {
          const realWordIndex = wordIndex + (line.underlineEnd ?? 0);
          const delay = 0.9 + lineIndex * 0.24 + realWordIndex * 0.11;

          return (
            <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-block">
              <RevealWord delay={delay}>{word}</RevealWord>
            </span>
          );
        })}
      </span>
    </span>
  );
}

export default function Hero({ onServicesClick }: HeroProps) {
  const whatsappUrl =
    'https://wa.me/5583999511523?text=Ol%C3%A1%2C%20Kaio%21%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20fazer%20um%20or%C3%A7amento.';

  const titleLines: TitleLine[] = [
    {
      words: ['Soluções', 'digitais'],
    },
    {
      words: ['para', 'fazer', 'sua'],
    },
    {
      words: ['empresa', 'crescer', 'e'],
      underlineStart: 0,
      underlineEnd: 2,
      underlineDelay: 1.7,
    },
    {
      words: ['facilitar', 'seu', 'trabalho.'],
      underlineStart: 0,
      underlineEnd: 3,
      underlineDelay: 2.12,
    },
  ];

  const heroTitle =
    'Soluções digitais para fazer sua empresa crescer e facilitar seu trabalho.';

  const heroDescriptionDesktopLines = [
    'Crio sites, sistemas e automações que ajudam negócios a se tornarem mais',
    'profissionais, atenderem melhor seus clientes e transformarem processos',
    'complicados em experiências mais simples, rápidas e eficientes.',
  ];

  const heroDescriptionMobileLines = [
    'Crio sites, sistemas e automações',
    'que ajudam negócios a se tornarem',
    'mais profissionais, atenderem melhor',
    'seus clientes e transformarem',
    'processos complicados em experiências',
    'mais simples, rápidas e eficientes.',
  ];

  return (
    <section
      id="inicio"
      className="
        relative z-10 flex min-h-[100svh] w-full flex-col
        px-5 pt-24 pb-12
        sm:px-6
        md:min-h-screen md:justify-end md:px-12 md:pt-24 md:pb-16
        xl:justify-center xl:px-24 xl:pb-0
      "
    >
      {/* sombra de leitura */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0 -z-10
          w-full bg-gradient-to-b from-black/10 via-black/18 to-black/72
          md:w-[52%] md:bg-gradient-to-r md:from-black/55 md:via-black/25 md:to-transparent
        "
      />

      <div className="grid w-full grid-cols-1 md:grid-cols-12 md:gap-8 lg:gap-12">
        <div
          id="hero-text-block"
          className="
            mt-[33vh] flex max-w-[330px] flex-col justify-center
            sm:mt-[35vh] sm:max-w-[355px]
            md:mt-0 md:col-span-6 md:max-w-[470px]
            lg:col-span-5 lg:max-w-[500px]
            xl:col-span-5 xl:max-w-[520px]
          "
        >
          <h1
            id="hero-heading"
            aria-label={heroTitle}
            className="
              text-[29px] font-black leading-[0.92] tracking-tight text-white
              drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]
              sm:text-[31px] sm:leading-[0.92]
              md:text-[44px] md:leading-[0.94]
              xl:text-[48px] xl:leading-[0.94]
            "
          >
            {titleLines.map((line, index) => (
              <RevealLine key={index} line={line} lineIndex={index} />
            ))}
          </h1>

          <div className="mt-4 w-full overflow-visible pr-[0.15em] md:mt-6 md:w-[640px] md:pr-[0.35em]">
            <motion.p
              id="hero-paragraph-mobile"
              initial={{ y: '115%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.95,
                delay: 2.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                block max-w-[330px] text-[15px] leading-[1.5] text-zinc-100
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]
                md:hidden
              "
            >
              {heroDescriptionMobileLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </motion.p>

            <motion.p
              id="hero-paragraph-desktop"
              initial={{ y: '115%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 0.95,
                delay: 2.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                hidden w-full text-base leading-[1.55] text-zinc-100
                drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]
                md:block
              "
            >
              {heroDescriptionDesktopLines.map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </motion.p>
          </div>

          <motion.div
            id="hero-buttons-row"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 2.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4"
          >
            <a
              id="hero-budget-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                cursor-pointer rounded-lg bg-gradient-to-r from-blue-600 to-blue-500
                px-6 py-3 text-[14px] font-semibold text-white
                shadow-[0_4px_24px_rgba(37,99,235,0.4)]
                transition-all duration-300
                hover:scale-[1.02] hover:from-blue-500 hover:to-blue-400
                hover:shadow-[0_4px_30px_rgba(37,99,235,0.65)]
                focus:outline-none
              "
            >
              Pedir orçamento
            </a>

            <button
              id="hero-services-btn"
              onClick={onServicesClick}
              className="
                cursor-pointer rounded-lg border border-white/20 bg-black/10
                px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm
                transition-all duration-300
                hover:scale-[1.02] hover:border-white hover:bg-white/5
                focus:outline-none
              "
            >
              Ver serviços
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}