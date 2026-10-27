import { Icon, type IconName } from '../../components/Icon/Icon'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { profile } from '../../data/profile'
import './About.css'

const highlights: {
  icon: IconName
  title: string
  description: string
  period?: string
}[] = [
  {
    icon: 'graduation',
    title: 'Formação',
    description: 'Análise e Desenvolvimento de Sistemas — Unipar',
    period: 'Jan 2024 – Jun 2026',
  },
  {
    icon: 'mapPin',
    title: 'Localização',
    description: profile.location,
  },
  {
    icon: 'target',
    title: 'Objetivo',
    description: 'Crescer profissionalmente e participar de projetos desafiadores.',
  },
]

export function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <SectionTitle
        id="about-title"
        number="01"
        label="Sobre mim"
        title="Prazer, eu sou o Guilherme"
      />

      <div className="about__text">
        <p>
          Sou desenvolvedor Full Stack, formado em Análise e Desenvolvimento de
          Sistemas pela Unipar. Trabalho no desenvolvimento de aplicações web, utilizando
          tecnologias como React, Next.js, Node.js e TypeScript.
        </p>
        <p>
          Tenho interesse em todas as etapas do desenvolvimento, desde a construção de
          interfaces até APIs, bancos de dados, autenticação e deploy. Busco
          constantemente evoluir minhas habilidades, aplicar boas práticas e transformar
          ideias em soluções eficientes e bem estruturadas.
        </p>
      </div>

      <ul className="about__highlights">
        {highlights.map((item) => (
          <li key={item.title} className="about__highlight">
            <span className="about__highlight-icon">
              <Icon name={item.icon} size={24} />
            </span>
            <div>
              <h3 className="about__highlight-title">{item.title}</h3>
              <p className="about__highlight-text">{item.description}</p>
              {item.period && <p className="about__highlight-period">{item.period}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
