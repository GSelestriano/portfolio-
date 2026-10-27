import {
  siDocker,
  siNodedotjs,
  siPostgresql,
  siReact,
  type SimpleIcon,
} from 'simple-icons'
import type { IconName } from '../components/Icon/Icon'

export interface TechCategory {
  title: string
  technologies: string[]
  /** Logo de marca (simple-icons) ou ícone de linha próprio. */
  icon: { brand: SimpleIcon; color?: string } | { line: IconName }
}

export const techCategories: TechCategory[] = [
  {
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    icon: { brand: siReact },
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Express', 'APIs REST', 'JWT', 'Argon2'],
    icon: { brand: siNodedotjs },
  },
  {
    title: 'Banco de Dados',
    technologies: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase', 'Prisma'],
    icon: { brand: siPostgresql, color: '#6b9be8' },
  },
  {
    title: 'Ferramentas & DevOps',
    technologies: ['Docker', 'Git', 'GitHub', 'Vercel', 'Render', 'PM2'],
    icon: { brand: siDocker },
  },
  {
    title: 'Testes & Qualidade',
    technologies: ['Jest', 'Vitest', 'SonarQube', 'Postman'],
    icon: { line: 'shieldCheck' },
  },
  {
    title: 'Inteligência Artificial',
    technologies: ['RAG', 'Soluções com LLM'],
    icon: { line: 'sparkles' },
  },
]
