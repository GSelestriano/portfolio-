import { SectionTitle } from '../../components/SectionTitle/SectionTitle'
import { TimelineItem } from '../../components/TimelineItem/TimelineItem'
import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experience-title">
      <SectionTitle
        id="experience-title"
        number="04"
        label="Experiência"
        title="Minha trajetória"
      />
      <ol className="timeline">
        {experience.map((item) => (
          <TimelineItem key={item.period + item.title} {...item} />
        ))}
      </ol>
    </section>
  )
}
