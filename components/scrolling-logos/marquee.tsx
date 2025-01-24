import Image from "next/image"
import { cn } from "@/lib/utils"
import { IPartnerLogo } from "../partners-section"

interface ScrollingLogosProps {
  logos: IPartnerLogo[]
  reverse?: boolean
  className?: string
}

export function Marquee({ logos, reverse = false, className }: ScrollingLogosProps) {
  return (
    <div className={cn("group relative flex h-24 w-full overflow-hidden [--duration:20s] [--gap:3rem]", className)}>
      <div
        className={cn(
          "animate-marquee flex shrink-0 items-center [gap:var(--gap)]",
          reverse && "animate-marquee-reverse",
        )}
      >
        {logos.map((logo, index) => (
          <Image
            key={`${logo.name}-${index}`}
            src={logo.logo || "/placeholder.svg"}
            alt={`${logo.name} logo`}
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}
      </div>
      <div
        className={cn(
          "animate-marquee flex shrink-0 items-center [gap:var(--gap)]",
          reverse && "animate-marquee-reverse",
        )}
      >
        {logos.map((logo, index) => (
          <Image
            key={`${logo.name}-${index}-repeat`}
            src={logo.logo || "/placeholder.svg"}
            alt={`${logo.name} logo`}
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}
      </div>
      <div
        className={cn(
          "animate-marquee flex shrink-0 items-center [gap:var(--gap)]",
          reverse && "animate-marquee-reverse",
        )}
      >
        {logos.map((logo, index) => (
          <Image
            key={`${logo.name}-${index}-repeat`}
            src={logo.logo || "/placeholder.svg"}
            alt={`${logo.name} logo`}
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}
      </div>
      <div
        className={cn(
          "animate-marquee flex shrink-0 items-center [gap:var(--gap)]",
          reverse && "animate-marquee-reverse",
        )}
      >
        {logos.map((logo, index) => (
          <Image
            key={`${logo.name}-${index}-repeat`}
            src={logo.logo || "/placeholder.svg"}
            alt={`${logo.name} logo`}
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  )
}

