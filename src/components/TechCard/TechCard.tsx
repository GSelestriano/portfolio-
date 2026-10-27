import type { TechCategory } from '../../data/technologies'
import { BrandIcon } from '../Icon/BrandIcon'
import { Icon } from '../Icon/Icon'
import './TechCard.css'

export function TechCard({ title, technologies, icon }: TechCategory) {
  return (
    <article className="tech-card">
      <span className="tech-card__icon">
        {'brand' in icon ? (
          <BrandIcon icon={icon.brand} size={30} color={icon.color} />
        ) : (
          <Icon name={icon.line} size={30} strokeWidth={1.6} />
        )}
      </span>
      <h3 className="tech-card__title">{title}</h3>
      <p className="tech-card__list">{technologies.join(', ')}</p>
    </article>
  )
}
