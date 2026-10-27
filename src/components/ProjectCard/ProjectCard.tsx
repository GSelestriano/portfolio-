import type { Project } from '../../data/projects'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import { ImageLightbox } from '../ImageLightbox/ImageLightbox'
import './ProjectCard.css'

export function ProjectCard({
  title,
  description,
  image,
  imagePosition,
  technologies,
  githubUrl,
  demoUrl,
  status,
}: Project) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        {image ? (
          <ImageLightbox
            src={image}
            alt={`Captura de tela do projeto ${title}`}
            thumbnailStyle={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
        ) : (
          <ProjectPlaceholder />
        )}
        {status === 'em-desenvolvimento' && (
          <span className="project-card__status">Em desenvolvimento</span>
        )}
      </div>

      <ul className="project-card__tags" aria-label="Tecnologias">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>

      <div className="project-card__actions">
        {demoUrl ? (
          <Button href={demoUrl} target="_blank" rel="noreferrer" size="sm">
            <Icon name="window" size={16} />
            Ver projeto
          </Button>
        ) : (
          <span className="project-card__pending">Demo em breve</span>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__github"
          >
            <Icon name="github" size={18} />
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

/** Card de um projeto ainda não divulgado: só a prévia ilustrativa e o status. */
export function UpcomingProjectCard() {
  return (
    <article className="project-card project-card--upcoming">
      <ProjectPlaceholder />
      <p className="project-card__upcoming-label">
        <span className="project-card__upcoming-dot" aria-hidden="true" />
        Em desenvolvimento
      </p>
    </article>
  )
}

function ProjectPlaceholder() {
  return (
    <div className="project-card__placeholder" aria-hidden="true">
      <span className="project-card__placeholder-bar">
        <span />
        <span />
        <span />
      </span>
      <Icon name="code" size={32} />
    </div>
  )
}
