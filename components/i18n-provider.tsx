"use client"

import { useEffect } from "react"
import "@/i18n/config"

interface I18nProviderProps {
  readonly children: React.ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // i18n config is already initialized on import
  }, [])

  return <>{children}</>
}
