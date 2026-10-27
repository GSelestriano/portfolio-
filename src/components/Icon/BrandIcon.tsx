import type { SimpleIcon } from 'simple-icons'

interface BrandIconProps {
  icon: SimpleIcon
  size?: number
  /** Cor do ícone. Usa a cor oficial da marca quando omitida. */
  color?: string
}

export function BrandIcon({ icon, size = 20, color }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color ?? `#${icon.hex}`}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  )
}
