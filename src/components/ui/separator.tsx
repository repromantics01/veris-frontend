"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

<<<<<<< HEAD
import { cn } from "@/src/lib/utils"
=======
import { cn } from "@/lib/lib/utils"
>>>>>>> 0aa48e003730ea5aa0da3184911fa532bd2b1354

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
