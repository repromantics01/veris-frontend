<<<<<<< HEAD
import { cn } from "@/src/lib/utils"
=======
import { cn } from "@/lib/lib/utils"
>>>>>>> 0aa48e003730ea5aa0da3184911fa532bd2b1354

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
