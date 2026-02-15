import { Banknote, Receipt, Check, Clock, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Separator } from "@/src/components/ui/separator"
import { currentStudentFees, currentStudent } from "@/lib/mock-data"
import { cn } from "@/lib/lib/utils"
import type { FeeStatus } from "@/lib/types"

const statusConfig: Record<FeeStatus, { label: string; variant: "secondary" | "destructive" | "outline"; icon: typeof Check; color: string }> = {
  paid: { label: "Paid", variant: "secondary", icon: Check, color: "text-success" },
  unpaid: { label: "Unpaid", variant: "destructive", icon: X, color: "text-destructive" },
  partial: { label: "Partial", variant: "outline", icon: Clock, color: "text-warning-foreground" },
}

export default function PortalFeesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Membership Fees</h1>
        <p className="text-sm text-muted-foreground">Your USSC membership fee records</p>
      </div>

      {/* Student Info Card */}
      <Card className="border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">{currentStudent.firstName} {currentStudent.lastName}</p>
              <p className="text-xs text-muted-foreground">{currentStudent.studentId} -- {currentStudent.course}</p>
            </div>
            <Badge variant="secondary" className="w-fit">Active Member</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Fee Records */}
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-foreground">Fee History</h3>
        {currentStudentFees.map(fee => {
          const config = statusConfig[fee.status]
          const Icon = config.icon
          return (
            <Card key={fee.id} className="border-border">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "flex size-10 items-center justify-center rounded-full",
                        fee.status === "paid" ? "bg-success/10" :
                          fee.status === "unpaid" ? "bg-destructive/10" : "bg-warning/10"
                      )}>
                        <Banknote className={cn("size-5", config.color)} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{fee.semester}</p>
                        <p className="text-xs text-muted-foreground">{fee.academicYear}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-lg font-bold text-foreground">P{fee.amount}</span>
                      <Badge variant={config.variant} className="capitalize">{config.label}</Badge>
                    </div>
                  </div>

                  {fee.status === "paid" && (
                    <>
                      <Separator />
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Receipt className="size-3" />
                          Receipt: {fee.receiptNo || "N/A"}
                        </span>
                        <span>Paid: {fee.paidDate}</span>
                      </div>
                    </>
                  )}

                  {fee.status === "unpaid" && (
                    <>
                      <Separator />
                      <p className="text-xs text-muted-foreground">
                        Please proceed to the USSC office to settle your membership fee.
                      </p>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}

        {currentStudentFees.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Banknote className="size-12 text-muted-foreground" />
            <h3 className="mt-3 text-sm font-medium text-foreground">No fee records</h3>
            <p className="mt-1 text-xs text-muted-foreground">No membership fee records found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
