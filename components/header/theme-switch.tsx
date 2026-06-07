"use client"

import * as React from "react"
import { Switch as SwitchPrimitives } from "radix-ui"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { cn } from "../../lib/utils"

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"
  const onCheckedChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  return (
    <Switch
      id="focus-mode"
      checked={isDarkMode}
      onCheckedChange={onCheckedChange}
      checkedIcon={<Moon size={20} />}
      uncheckedIcon={<Sun size={20} />}
      className="
        data-[state=unchecked]:bg-foreground data-[state=unchecked]:text-primary-foreground 
        data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
    />
  )
}

export interface SwitchProps extends React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> {
  checkedIcon?: React.ReactNode
  uncheckedIcon?: React.ReactNode
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    { className, checkedIcon, uncheckedIcon, onCheckedChange, ...props },
    ref,
  ) => {
    const isControlled = props.checked !== undefined

    const [internalChecked, setInternalChecked] = React.useState(
      props.defaultChecked ?? false,
    )
    const isChecked = isControlled ? props.checked : internalChecked

    const handleCheckedChange = (checked: boolean) => {
      if (!isControlled) {
        setInternalChecked(checked)
      }
      if (onCheckedChange) {
        onCheckedChange(checked)
      }
    }

    const effectiveCheckedIcon = checkedIcon
    const effectiveUncheckedIcon = uncheckedIcon || checkedIcon
    const icon = isChecked ? effectiveCheckedIcon : effectiveUncheckedIcon

    return (
      <SwitchPrimitives.Root
        className={cn(
          "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          className,
        )}
        onCheckedChange={handleCheckedChange}
        {...props}
        checked={isChecked}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none flex h-6 w-8 items-center justify-center rounded-full bg-transparent shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:-translate-x-1",
          )}
        >
          {icon && (
            <span className="flex items-center justify-center">{icon}</span>
          )}
        </SwitchPrimitives.Thumb>
      </SwitchPrimitives.Root>
    )
  },
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
