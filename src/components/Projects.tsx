/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ZoomIn, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectItem } from '../types';
import { projectsList } from '../data/projects';

export default function Projects({ isFullPage = false }: { isFullPage?: boolean }) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const displayProjects = isFullPage ? projectsList : projectsList.slice(0, 3);



  return (
    <section id="projetos" className="relative px-6 py-24 md:px-12 xl:px-24">
      {/* Background neon light on the right */}
      <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl">
        {!isFullPage && (
          <div className="text-center md:text-left mb-16 max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-widest text-blue-400"
            >
              Portfólio Selecionado
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-3xl font-black tracking-tight text-white md:text-4xl"
            >
              Últimos projetos e trabalhos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm text-zinc-400 leading-relaxed"
            >
              Uma galeria de projetos digitais sob medida, criados com foco na usabilidade, identidade de marca expressiva e alta performance web.
            </motion.p>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes do projeto ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 shadow-xl backdrop-blur-md cursor-pointer"
            >
              {/* Image Container with Hover Zoom and Blur mask */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/5 bg-zinc-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:blur-xs"
                />
                
                {/* Image Overlay HUD */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition-transform hover:scale-105 cursor-pointer"
                  >
                    <ZoomIn className="h-4 w-4" />
                    Expandir Detalhes
                  </button>
                </div>

                {/* Category tag */}
                <span className="absolute top-4 left-4 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Text Area */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Badges/Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="rounded bg-white/5 px-2 py-0.5 text-[9px] font-medium text-zinc-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between border-t border-white/5 px-6 py-4 bg-black/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Ver Detalhes
                </button>
                
                <div className="flex items-center gap-4">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="Código no GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-zinc-400 hover:text-white transition-colors"
                      aria-label="Visitar demonstração"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isFullPage && (
          <div className="mt-16 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Ver portfólio completo
            </Link>
          </div>
        )}
      </div>

      {/* Selected Project Drawer Overlay / Detailed modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-6 md:p-8 shadow-2xl backdrop-blur-md"
            >
              {/* Close pin */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-regular">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Stack specs */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Especificações Técnicas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/5 bg-white/5 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Buttons Row */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] hover:from-blue-500 hover:to-blue-400 cursor-pointer text-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver projeto
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-zinc-900 py-3 text-sm font-semibold text-white hover:bg-zinc-800 hover:border-white/20 cursor-pointer text-center"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
