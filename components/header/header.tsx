import GetInTouch from "./get-in-touch"
import { ThemeSwitch } from "./theme-switch"
import { LanguageSwitcher } from "./language-switcher"

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <GetInTouch />
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitch />
      </div>
    </header>
  )
}
