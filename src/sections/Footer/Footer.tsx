import { Icon } from '../../components/Icon/Icon'
import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import { profile } from '../../data/profile'
import './Footer.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <a href="#inicio" className="footer__brand">
          <span className="footer__logo">
            <Icon name="brand" size={34} strokeWidth={2.4} />
          </span>
          <span className="footer__identity">
            <span className="footer__name">
              {profile.firstName}{' '}
              <span className="text-accent">{profile.lastName}</span>
            </span>
            <span className="footer__role">{profile.role}</span>
          </span>
        </a>

        <p className="footer__message">
          Obrigado por visitar meu portfólio!
          <span className="footer__copy">
            © {currentYear} {profile.firstName} {profile.lastName}
          </span>
        </p>

        <SocialLinks size={20} className="footer__social" />
      </div>
    </footer>
  )
}
