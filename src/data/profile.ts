export const profile = {
  firstName: 'Guilherme',
  lastName: 'Selestriano',
  role: 'Desenvolvedor Full Stack',
  location: 'Umuarama, Paraná',
  summary:
    'Transformo ideias em aplicações reais. Sou desenvolvedor Full Stack com foco em construir soluções escaláveis, eficientes e com boa experiência para o usuário.',
  email: 'gselestriano@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/guilherme-selestriano-a6330b269/',
  githubUrl: 'https://github.com/GSelestriano',
  resumeUrl: '/curriculo-guilherme-selestriano.pdf',
} as const

export interface NavItem {
  id: string
  label: string
}

export const navItems: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'tecnologias', label: 'Tecnologias' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
]
