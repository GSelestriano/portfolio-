import { useRef, type CSSProperties } from 'react'
import { Icon } from '../Icon/Icon'
import './ImageLightbox.css'

interface ImageLightboxProps {
  src: string
  alt: string
  /** Estilo da miniatura (ex.: object-position do corte). */
  thumbnailStyle?: CSSProperties
}

/** Miniatura clicável que abre a imagem em tamanho maior num modal (<dialog> nativo). */
export function ImageLightbox({ src, alt, thumbnailStyle }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button type="button" className="lightbox__trigger" onClick={open}>
        <img src={src} alt={alt} loading="lazy" style={thumbnailStyle} />
        <span className="lightbox__hint" aria-hidden="true">
          <Icon name="maximize" size={18} />
        </span>
        <span className="sr-only">Ampliar imagem</span>
      </button>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label={alt}
        onClick={(event) => {
          // Clique fora da imagem (no fundo escuro) fecha o modal.
          if (event.target === event.currentTarget) close()
        }}
      >
        <button type="button" className="lightbox__close" onClick={close}>
          <Icon name="close" size={22} />
          <span className="sr-only">Fechar imagem</span>
        </button>
        <img src={src} alt={alt} className="lightbox__image" />
      </dialog>
    </>
  )
}
