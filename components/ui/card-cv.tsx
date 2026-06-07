"use client"

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "./button"
import { useTranslation } from "react-i18next"

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

export interface CardContainerProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: CardContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect()

    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25

    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
  }

  const handleMouseEnter = (_e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true)
    if (!containerRef.current) {
      return
    }
  }

  const handleMouseLeave = (_e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return
    }
    setIsMouseEntered(false)
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)"
  }

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName,
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className,
          )}
          role="button"
          tabIndex={0}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          ref={containerRef}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  )
}

export interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const CardBody = ({ children, className }: CardBodyProps) => {
  return (
    <div className={cn("h-96 w-96 transform-3d *:transform-3d", className)}>
      {children}
    </div>
  )
}

export type CardItemProps = {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
} & Record<string, any>

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: CardItemProps) => {
  const ref = useRef<any>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    handleAnimations()
  }, [isMouseEntered])

  const handleAnimations = () => {
    if (!ref.current) {
      return
    }
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform =
        "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
    }
  }

  return React.createElement(
    Tag,
    {
      ref,
      className: cn("w-fit transition duration-200 ease-linear", className),
      ...rest,
    },
    children,
  )
}

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider")
  }
  return context
}

export function CardCv() {
  const { t } = useTranslation()

  return (
    <div>
      <CardContainer containerClassName="py-0 group cursor-pointer">
        <CardBody className="relative h-auto w-auto rounded-xl border bg-card p-6 md:px-12 lg:px-16 shadow-xl">
          <CardItem translateZ={50} className="text-xl font-bold w-full">
            <div className="flex justify-between gap-2">
              <p className="lg:text-nowrap">{t("card.fullstackDeveloper")}</p>
              <div className="rounded-xl border bg-foreground border-foreground/80 px-3 py-1 text-xs text-primary-foreground flex justify-center items-center">
                BR
              </div>
            </div>
          </CardItem>
          <CardItem translateZ={55} className="text-sm font-bold">
            {t("card.senior")}
          </CardItem>
          <CardItem translateZ={100} className="my-2 w-full">
            <Image
              src="/bruno.png"
              width={300}
              height={300}
              alt="Foto de Bruno Amado"
              className="mx-auto rounded-lg object-cover"
            />
          </CardItem>
          <CardItem translateZ={80} className="mt-4 w-full flex justify-center">
            <Button className="group-hover:bg-accent-foreground/80 cursor-pointer">
              Download CV
            </Button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  )
}
