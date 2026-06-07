"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function GetInTouch() {
  const { t } = useTranslation()

  return (
    <Link
      href="/#contato"
      className="cursor-pointer inline-flex items-center gap-2 rounded-full border bg-foreground border-foreground/10 px-3 py-1 text-xs text-primary-foreground"
    >
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {/*
       */}
      {t("header.getInTouch")}
    </Link>
  )
}
