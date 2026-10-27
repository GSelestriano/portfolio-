export interface Project {
  id: string
  title: string
  description: string
  /** Caminho da screenshot em /public. Sem imagem, o card mostra uma prévia ilustrativa. */
  image?: string
  /** Ponto de foco do corte da imagem (CSS object-position). Padrão: canto superior esquerdo. */
  imagePosition?: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  status: 'em-desenvolvimento' | 'concluido'
}

// TODO: conteúdo provisório, baseado no mockup. Revisar descrições, tecnologias,
// links e screenshots quando os projetos estiverem prontos.
export const projects: Project[] = [
  {
    id: 'girofacil',
    title: 'GiroFácil',
    description:
      'Sistema de gestão empresarial para pequenas empresas, com controle de estoque, registro de movimentações, comprovantes de saída, multiempresa e permissões de acesso.',
    image: '/projects/girofacil.png',
    technologies: ['Full Stack', 'Next.js', 'Node.js', 'PostgreSQL'],
    status: 'concluido',
  },
  {
    id: 'logix-sphere',
    title: 'LogixSphere',
    description:
      'Sistema empresarial com gestão de frotas, parceiros e operações diárias. Desenvolvido com Next.js no frontend e Node.js no backend, utilizando PostgreSQL.',
    image: '/projects/logixsphere.png',
    imagePosition: 'center 40%',
    technologies: ['Full Stack', 'Next.js', 'TypeScript', 'PostgreSQL'],
    status: 'concluido',
  },
]
