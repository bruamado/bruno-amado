"use client"

import { Glow, GlowArea } from "./ui/glow"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import React from "@/public/icons/react.svg"
import Javascript from "@/public/icons/javascript.svg"
import Typescript from "@/public/icons/typescript.svg"
import CSharp from "@/public/icons/c-sharp.svg"
import DotNet from "@/public/icons/dot-net.svg"
import Git from "@/public/icons/git.svg"
import Java from "@/public/icons/java.svg"
import Python from "@/public/icons/python.svg"
import Vue from "@/public/icons/vue.svg"
import Spring from "@/public/icons/spring.svg"
import Docker from "@/public/icons/docker.svg"
import { useTranslation } from "react-i18next"

export default function TechnologieCards() {
  const { t } = useTranslation()

  const TECHS = [
    {
      names: ["Javascript", "Typescript", "React"],
      icons: [Javascript, Typescript, React],
    },
    {
      names: ["Java", "Java Spring"],
      icons: [Java, Spring],
    },
    {
      names: ["Vue"],
      desc: t("technologies.vueDescription"),
      icons: [Vue],
    },
    {
      names: ["C#", " .NET"],
      icons: [CSharp, DotNet],
    },
    {
      names: ["Python"],
      icons: [Python],
    },
    {
      names: ["Docker"],
      icons: [Docker],
    },
    {
      names: ["Git"],
      icons: [Git],
    },
  ]

  return (
    <>
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("technologies.title")}
          </h2>
          <p className="mt-4">{t("technologies.subtitle")}</p>
        </div>
      </div>

      <GlowArea className="flex flex-wrap gap-8 justify-center">
        {TECHS.map((t) => (
          <Glow
            color="red"
            className="rounded-xl md:min-w-60 md:min-h-20"
            key={t.names.join("-")}
          >
            <Card className="h-full w-full md:w-fit pb-2 md:min-w-60 md:min-h-20">
              <CardHeader>
                <CardTitle>
                  <div className="flex flex-col gap-6 justify-center items-center">
                    <div className="flex justify-center items-center gap-6">
                      {t.icons?.map((Icon, index) => (
                        <Icon
                          className="size-10"
                          key={`${t.names}-icon${index}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-center flex-wrap">
                      {t.names?.map((name, index) => (
                        <div
                          key={`${t.names}-name-${name}`}
                          className="flex items-center justify-center flex-wrap"
                        >
                          <p>{name}</p>
                          {index < t.names.length - 1 && (
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mx-3" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          </Glow>
        ))}
      </GlowArea>
    </>
  )
}
