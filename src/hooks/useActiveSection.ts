import { useEffect, useRef, useState } from 'react'

/**
 * Retorna o id da seção visível no momento, para destacar o link ativo da navegação.
 * Seções lado a lado (ex.: Sobre e Tecnologias) ficam visíveis ao mesmo tempo; nesse
 * caso mantém a seção já ativa (como a escolhida no clique) ou usa a primeira na ordem.
 */
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])
  const activeRef = useRef(activeId)
  // Enquanto a rolagem iniciada por um clique no menu acontece, o link clicado fica fixo.
  const lockedRef = useRef(false)

  const activate = (id: string) => {
    activeRef.current = id
    setActiveId(id)
  }

  const select = (id: string) => {
    activate(id)
    lockedRef.current = true
    const unlock = () => {
      lockedRef.current = false
      window.removeEventListener('scrollend', unlock)
    }
    window.addEventListener('scrollend', unlock)
    // Navegadores sem o evento scrollend, ou quando a página já está na posição.
    window.setTimeout(unlock, 1200)
  }

  useEffect(() => {
    const visible = new Set<string>()

    const update = () => {
      if (lockedRef.current) return

      // No fim da página, a última seção pode nunca cruzar a linha de referência.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) return activate(ids[ids.length - 1])

      if (visible.has(activeRef.current)) return
      const first = ids.find((id) => visible.has(id))
      if (first) activate(first)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        })
        update()
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
      .forEach((section) => observer.observe(section))

    window.addEventListener('scroll', update, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', update)
    }
  }, [ids])

  return [activeId, select] as const
}
