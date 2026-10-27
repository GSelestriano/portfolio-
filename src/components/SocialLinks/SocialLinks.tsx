import { profile } from '../../data/profile'
import { Icon, type IconName } from '../Icon/Icon'
import './SocialLinks.css'

const links: { label: string; href: string; icon: IconName; external: boolean }[] = [
  { label: 'GitHub', href: profile.githubUrl, icon: 'github', external: true },
  { label: 'LinkedIn', href: profile.linkedinUrl, icon: 'linkedin', external: true },
  { label: 'E-mail', href: `mailto:${profile.email}`, icon: 'mail', external: false },
]

interface SocialLinksProps {
  size?: number
  className?: string
}

export function SocialLinks({ size = 24, className = '' }: SocialLinksProps) {
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Redes e contato">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="social-links__link"
            aria-label={link.label}
            {...(link.external && { target: '_blank', rel: 'noreferrer' })}
          >
            <Icon name={link.icon} size={size} />
          </a>
        </li>
      ))}
    </ul>
  )
}
