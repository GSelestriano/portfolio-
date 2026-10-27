import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { TechCard } from '../../components/TechCard/TechCard'
import { techCategories } from '../../data/technologies'
import './Technologies.css'

export function Technologies() {
  return (
    <section id="tecnologias" className="technologies" aria-labelledby="tech-title">
      <SectionTitle
        id="tech-title"
        number="02"
        label="Tecnologias"
        title="Ferramentas que eu domino"
      />

      <div className="technologies__grid">
        {techCategories.map((category) => (
          <TechCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  )
}
