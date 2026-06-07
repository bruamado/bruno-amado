"use client"

import ContactForm from "@/components/contact-form"
import Hero from "@/components/description"
import Header from "@/components/header/header"
import TechnologieCards from "@/components/technologie-cards"
import { useTranslation } from "react-i18next"

export default function Page() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-linear-to-b bg-background">
      <Header />

      <section className="mx-auto w-full max-w-5xl px-6 pb-8">
        <Hero />
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <TechnologieCards />
      </section>

      <section id="contato" className="max-w-3xl mx-auto">
        <ContactForm />
      </section>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-xs text-zinc-500 text-center">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </footer>
    </main>
  )
}
