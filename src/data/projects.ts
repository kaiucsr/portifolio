import { ProjectItem } from '../types';

export const projectsList: ProjectItem[] = [
  {
    id: 'doceria',
    title: 'Doceria Grão de Açúcar',
    category: 'Sistema de delivery',
    description: 'Sistema de delivery e cardápio digital desenvolvido para uma doceria, com vitrine de produtos, carrinho, checkout, painel administrativo, controle de produtos, impressão de comanda e pagamento online.',
    imageUrl: '/printgradeacucar.png',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Supabase', 'Mercado Pago'],
    demoUrl: 'https://graodeacucar.com.br',
    githubUrl: '',
  },
  {
    id: 'insetal',
    title: 'Insetal Dedetização',
    category: 'Site institucional',
    description: 'Site institucional desenvolvido para apresentar serviços de dedetização, fortalecer a presença digital da empresa e facilitar o contato/agendamento com clientes da região.',
    imageUrl: '/printinsetal.png',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    demoUrl: 'https://dedetizacaoinsetal.com.br',
    githubUrl: '',
  },
  {
    id: 'ilma',
    title: 'Ilma Cortinas',
    category: 'Site institucional',
    description: 'Site institucional desenvolvido para apresentar a empresa, seus produtos, diferenciais e canais de contato, transmitindo uma imagem mais profissional e fortalecendo a presença digital da marca.',
    imageUrl: '/printioilma.png',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vercel'],
    demoUrl: 'https://ilmacortinas.com.br',
    githubUrl: '',
  },
  {
    id: 'estagiosync',
    title: 'EstágioSync',
    category: 'Hackathon / Estudo',
    description: 'Projeto desenvolvido em hackathon para ajudar estudantes a registrar atividades de estágio, acompanhar horas, organizar informações e gerar relatórios formais em PDF.',
    imageUrl: '/printestagiosync.png',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Express', 'jsPDF'],
    demoUrl: '',
    githubUrl: 'https://github.com/kaiucsr/EstagioSync',
  },
];
