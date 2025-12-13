import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bruno Amado | Desenvolvedor Fullstack",
  description:
    "Portfólio de Bruno Amado — desenvolvedor de software fullstack (React, Vue, Java Spring e .NET).",
}

const TECHS = [
  { name: "React", desc: "Interfaces modernas e componentizadas" },
  { name: "Vue", desc: "Aplicações rápidas e bem estruturadas" },
  { name: "Java Spring", desc: "APIs robustas, seguras e escaláveis" },
  { name: ".NET", desc: "Backends performáticos e integrações" },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-100">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <a href="#" className="font-semibold tracking-tight">
          Bruno Amado
        </a>
      </header>

      <section className="mx-auto w-full max-w-5xl px-6 pt-10 pb-8 sm:pt-16">
        <div className="grid gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Disponível para projetos e oportunidades
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
                Bruno Amado
              </span>
              .
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300">
              Desenvolvedor de software{" "}
              <strong className="text-zinc-100">fullstack</strong>, construindo
              aplicações web de ponta a ponta — do frontend ao backend — com
              foco em qualidade, performance e experiência do usuário.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/bruamado/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/bruamado"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900"
              >
                GitHub
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-400">
              Stack principal: React • Vue • Java Spring • .NET
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-300">Resumo rápido</p>
                <p className="mt-1 text-lg font-semibold">
                  Fullstack Developer
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300">
                BR
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm text-zinc-300">
              <div className="flex items-center justify-between">
                <span>Foco</span>
                <span className="text-zinc-100">Web apps & APIs</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Qualidades</span>
                <span className="text-zinc-100">
                  organização, clareza, entrega
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Preferência</span>
                <span className="text-zinc-100">código limpo & DX</span>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-xs text-zinc-400">Links</p>
              <div className="mt-2 flex flex-col gap-2 text-sm">
                <a
                  className="truncate text-zinc-200 hover:text-white"
                  href="https://www.linkedin.com/in/bruamado/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/bruamado/
                </a>
                <a
                  className="truncate text-zinc-200 hover:text-white"
                  href="https://github.com/bruamado"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/bruamado
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">Sobre mim</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-zinc-300">
            Sou o Bruno Amado, desenvolvedor fullstack com experiência na
            criação de interfaces ricas e APIs sólidas. Gosto de trabalhar com
            boas práticas, componentização, testes quando fazem sentido, e
            arquitetura simples que escale com o produto.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <p className="text-sm font-medium">Frontend</p>
              <p className="mt-1 text-sm text-zinc-300">
                React e Vue com foco em UX, performance e manutenção.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <p className="text-sm font-medium">Backend</p>
              <p className="mt-1 text-sm text-zinc-300">
                APIs com Java Spring e .NET, pensando em segurança e
                escalabilidade.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
              <p className="text-sm font-medium">Entrega</p>
              <p className="mt-1 text-sm text-zinc-300">
                Comunicação clara, alinhamento e atenção aos detalhes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tecnologias" className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Tecnologias
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              Ferramentas com as quais atuo no dia a dia.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TECHS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50"
            >
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">{t.name}</p>
                <span className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-300">
                  Stack
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto w-full max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900/40 to-zinc-950/40 p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            Entre em contato
          </h2>
          <p className="mt-2 text-sm text-zinc-300">
            Me chame no LinkedIn ou veja meus repositórios no GitHub.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/bruamado/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-300 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-emerald-200"
            >
              Falar no LinkedIn
            </a>
            <a
              href="https://github.com/bruamado"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-900"
            >
              Ver GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-5xl px-6 pb-10 text-xs text-zinc-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bruno Amado</p>
          <p className="text-zinc-600">React • Vue • Java Spring • .NET</p>
        </div>
      </footer>
    </main>
  )
}
