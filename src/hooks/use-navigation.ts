'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

const useNavigation = () => {
  const pathname = usePathname()
  const [isHomeActive, setIsHomeActive] = useState(false)
  const [isGruposActive, setIsGruposActive] = useState(false)
  const [isClassificacaoActive, setIsClassificacaoActive] = useState(false)
  const [isTimesActive, setIsTimesActive] = useState(false)

  useEffect(() => {
    setIsHomeActive(false)
    setIsGruposActive(false)
    setIsClassificacaoActive(false)
    setIsTimesActive(false)

    switch (pathname) {
      case '/':
        setIsHomeActive(true)
        break
      case '/artilheiro':
        setIsGruposActive(true)
        break
      case '/classificacao':
        setIsClassificacaoActive(true)
        break
      case '/times':
        setIsTimesActive(true)
        break
      default:
        // Handle any other cases here
        break
    }
  }, [pathname])

  return {
    isHomeActive,
    isGruposActive,
    isClassificacaoActive,
    isTimesActive,
  }
}

export { useNavigation }
