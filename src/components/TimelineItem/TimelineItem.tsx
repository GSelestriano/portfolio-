import type { ExperienceItem } from '../../data/experience'
import './TimelineItem.css'

export function TimelineItem({
  period,
  title,
  organization,
  description,
  technologies,
}: ExperienceItem) {
  return (
    <li className="timeline-item">
      <span className="timeline-item__marker" aria-hidden="true" />
      <p className="timeline-item__period">{period}</p>
      <h3 className="timeline-item__title">{title}</h3>
      <p className="timeline-item__organization">{organization}</p>
      <p className="timeline-item__description">{description}</p>
      {technologies && (
        <p className="timeline-item__tech">{technologies.join(' · ')}</p>
      )}
    </li>
  )
}
