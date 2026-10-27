import {
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siReact,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'
import { Button } from '../../components/Button/Button'
import { BrandIcon } from '../../components/Icon/BrandIcon'
import { Icon } from '../../components/Icon/Icon'
import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import { profile } from '../../data/profile'
import { CodeWindow } from './CodeWindow'
import './Hero.css'

const stack: { name: string; icon: SimpleIcon; color?: string }[] = [
  { name: 'React', icon: siReact },
  { name: 'Next.js', icon: siNextdotjs, color: '#f3f7fa' },
  { name: 'Node.js', icon: siNodedotjs },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'PostgreSQL', icon: siPostgresql, color: '#6b9be8' },
]

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__content fade-up">
          <p className="hero__greeting">Olá, eu sou</p>
          <h1 id="hero-title" className="hero__name">
            {profile.firstName}{' '}
            <span className="text-accent">{profile.lastName}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__actions">
            <Button href="#projetos" variant="primary">
              <Icon name="window" size={18} />
              Ver meus projetos
            </Button>
            <Button href="#contato" variant="secondary">
              Entrar em contato
            </Button>
          </div>

          <SocialLinks className="hero__social" />
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow" />
          <div className="hero__grid" />

          <div className="hero__code-frame">
            <CodeWindow />
          </div>

          <ul className="hero__stack">
            {stack.map((tech) => (
              <li key={tech.name} className="hero__stack-item">
                <BrandIcon icon={tech.icon} size={20} color={tech.color} />
                {tech.name}
              </li>
            ))}
          </ul>

          <p className="hero__terminal">
            <span>&gt;</span> build() <span className="hero__terminal-sep">•</span> deploy()
            <span className="hero__terminal-sep">•</span> repeat()
          </p>
        </div>
      </div>
    </section>
  )
}
