import { Button } from '../../components/Button/Button'
import { Icon, type IconName } from '../../components/Icon/Icon'
import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { profile } from '../../data/profile'
import './Contact.css'

const contactLinks: { icon: IconName; label: string; text: string; href: string }[] = [
  {
    icon: 'mail',
    label: 'E-mail',
    text: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    text: 'linkedin.com/in/guilherme-selestriano',
    href: profile.linkedinUrl,
  },
  {
    icon: 'github',
    label: 'GitHub',
    text: 'github.com/GSelestriano',
    href: profile.githubUrl,
  },
]

export function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <SectionTitle
        id="contact-title"
        number="05"
        label="Contato"
        title="Vamos conversar?"
      />
      <p className="contact__intro">
        Estou aberto a novas oportunidades, parcerias e desafios. Se quiser entrar em
        contato, será um prazer!
      </p>

      <ul className="contact__links">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="contact__link"
              {...(link.icon !== 'mail' && { target: '_blank', rel: 'noreferrer' })}
            >
              <Icon name={link.icon} size={18} />
              <span className="sr-only">{link.label}: </span>
              <span className="contact__link-text">{link.text}</span>
            </a>
          </li>
        ))}
      </ul>

      <Button href={profile.resumeUrl} download className="contact__resume">
        <Icon name="download" size={18} />
        Baixar Currículo
      </Button>
    </section>
  )
}
