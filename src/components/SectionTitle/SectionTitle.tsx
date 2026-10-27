import './SectionTitle.css'

interface SectionTitleProps {
  id: string
  number: string
  label: string
  title: string
}

export function SectionTitle({ id, number, label, title }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="section-title__eyebrow">
        {number}. {label}
      </p>
      <h2 id={id} className="section-title__heading">
        {title}
      </h2>
    </div>
  )
}
