"use client"

import { FormEvent, useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import formatDateTimeWithGMT from "@/utils/format-datetime-with-gmt"
import { getClientInfo } from "@/utils/get-client-info"
import { Field, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function ContactForm() {
  const { t } = useTranslation()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")
  const [subject, setSubject] = useState("")

  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    })
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setLoading(true)
    setStatus("")

    try {
      const {
        ip,
        city,
        region,
        country,
        network,
        version,
        org,
        country_calling_code,
        country_name,
        languages,
        utc_offset,
        region_code,
      } = await getClientInfo()

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          message,
          subject,
          dateTimeWithGmt: formatDateTimeWithGMT(),
          ip,
          city,
          region,
          country,
          network,
          version,
          org,
          country_calling_code,
          country_name,
          languages,
          utc_offset,
          region_code,
        },
      )

      setStatus(t("contactForm.successMessage"))
      setName("")
      setEmail("")
      setMessage("")
      setSubject("")
    } catch (error) {
      console.error(error)
      setStatus(t("contactForm.errorMessage"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 border border-primary-foreground rounded-xl p-4"
    >
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {t("contactForm.title")}
      </p>
      <Field>
        <FieldLabel htmlFor="name">{t("contactForm.name")}</FieldLabel>
        <Input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="email">{t("contactForm.email")}</FieldLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="subject">{t("contactForm.subject")}</FieldLabel>
        <Input
          id="subject"
          type="text"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
        />
      </Field>

      <Field>
        <FieldLabel htmlFor="message">{t("contactForm.message")}</FieldLabel>
        <Textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={5}
        />
      </Field>

      <Button type="submit" disabled={loading} className="mt-2">
        {loading ? t("contactForm.sending") : t("contactForm.send")}
      </Button>

      {status && <p>{status}</p>}

      <Link
        href="https://www.linkedin.com/in/bruamado/"
        target="_blank"
        rel="noreferrer"
        className="mt-8 m-auto max-w-sm inline-flex items-center justify-center rounded-xl bg-emerald-300 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-200"
      >
        {t("contactForm.linkedinAlternative")}
      </Link>
    </form>
  )
}
