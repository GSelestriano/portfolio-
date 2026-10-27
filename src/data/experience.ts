export interface ExperienceItem {
  period: string
  title: string
  organization: string
  description: string
  technologies?: string[]
}

// Ordem cronológica inversa: o item mais recente primeiro.
export const experience: ExperienceItem[] = [
  {
    period: 'Nov 2025 – Out 2026',
    title: 'Desenvolvedor Full Stack',
    organization: 'Ba Express · LogixSphere (UK)',
    description:
      'Desenvolvimento de sistemas distribuídos e integrações entre sistemas corporativos, revisões de código, testes automatizados e análise de qualidade.',
    technologies: ['Node.js', 'React', 'Next.js', 'Jest', 'SonarQube'],
  },
  {
    period: 'Jan 2024 – Jun 2026',
    title: 'Análise e Desenvolvimento de Sistemas',
    organization: 'Unipar · Universidade Paranaense',
    description:
      'Formação com foco em engenharia de software, banco de dados, arquitetura de sistemas e inteligência artificial.',
  },
]
