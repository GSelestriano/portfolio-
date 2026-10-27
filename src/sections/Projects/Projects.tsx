import { Icon } from '../../components/Icon/Icon'
import { ProjectCard, UpcomingProjectCard } from '../../components/ProjectCard/ProjectCard'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { profile } from '../../data/profile'
import { projects } from '../../data/projects'
import './Projects.css'

export function Projects() {
  return (
    <section id="projetos" className="projects" aria-labelledby="projects-title">
      <div className="projects__header">
        <div>
          <SectionTitle
            id="projects-title"
            number="03"
            label="Projetos"
            title="Projetos em destaque"
          />
          <p className="projects__intro">
            Aqui estão alguns dos projetos que desenvolvi, mostrando minha capacidade de
            construir aplicações completas, do frontend ao backend, com banco de dados,
            autenticação e deploy.
          </p>
        </div>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="projects__all"
        >
          Ver todos os projetos
          <Icon name="arrowRight" size={16} />
        </a>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
        <UpcomingProjectCard />
      </div>
    </section>
  )
}
