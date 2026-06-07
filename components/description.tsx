"use client"

import AnimatedTypingMotion from "./ui/animated-typing-motion"
import { CardCv } from "./ui/card-cv"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
      <div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          <AnimatedTypingMotion
            words={[t("hero.greeting")]}
            deleteWhenDone={false}
            delayMsEachLetter={200}
          />
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary">
          {t("hero.description")}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/bruamado/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg- px-4 py-2 text-sm font-medium bg-foreground text-primary-foreground hover:bg-foreground/90"
          >
            {t("hero.linkedin")}
          </a>
          <a
            href="https://github.com/bruamado"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-primary px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            {t("hero.github")}
          </a>
        </div>
      </div>

      <CardCv />
    </div>
  )
}
