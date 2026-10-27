import { useEffect, useState } from 'react'
import { navItems, profile } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Button } from '../Button/Button'
import { Icon } from '../Icon/Icon'
import './Header.css'

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeId, setActiveId] = useActiveSection(sectionIds)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const closeOnDesktop = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    window.addEventListener('resize', closeOnDesktop)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header__inner">
        <a href="#inicio" className="header__brand" onClick={closeMenu}>
          <span className="header__logo">
            <Icon name="brand" size={34} strokeWidth={2.4} />
          </span>
          <span className="header__identity">
            <span className="header__name">
              {profile.firstName}{' '}
              <span className="text-accent">{profile.lastName}</span>
            </span>
            <span className="header__role">{profile.role}</span>
          </span>
        </a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} size={22} />
          <span className="sr-only">
            {isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          </span>
        </button>

        <nav
          id="main-nav"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="header__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="header__link"
                  aria-current={activeId === item.id ? 'location' : undefined}
                  onClick={() => {
                    setActiveId(item.id)
                    closeMenu()
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            href={profile.resumeUrl}
            download
            variant="secondary"
            size="sm"
            className="header__resume"
          >
            <Icon name="download" size={16} className="text-accent" />
            Baixar Currículo
          </Button>
        </nav>
      </div>
    </header>
  )
}
