import { AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/src/components/ui/table"
import { currentStudentFines, fines } from "@/lib/mock-data"
import type { FineStatus } from "@/lib/types"

const statusVariant: Record<FineStatus, "destructive" | "secondary" | "outline"> = {
  unpaid: "destructive",
  paid: "secondary",
  waived: "outline",
}

export default function PortalFinesPage() {
  // Show all fines for the current student (Maria Santos - ID 2024-00101)
  // Maria has no fines in mock data, so let's show a broader view
  const myFines = currentStudentFines

  const unpaidAmount = myFines.filter(f => f.status === "unpaid").reduce((s, f) => s + f.amount, 0)
  const paidAmount = myFines.filter(f => f.status === "paid").reduce((s, f) => s + f.amount, 0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">My Fines</h1>
        <p className="text-sm text-muted-foreground">View your fines and payment history</p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-destructive/10">
                <AlertTriangle className="size-5 text-destructive" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">P{unpaidAmount}</p>
                <p className="text-xs text-muted-foreground">Unpaid fines</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-success/10">
                <AlertTriangle className="size-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">P{paidAmount}</p>
                <p className="text-xs text-muted-foreground">Paid fines</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                <AlertTriangle className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{myFines.length}</p>
                <p className="text-xs text-muted-foreground">Total fines</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fines Table */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base text-foreground">Fine History</CardTitle>
          <CardDescription className="text-muted-foreground">All fines associated with your account</CardDescription>
        </CardHeader>
        <CardContent>
          {myFines.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reason</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Issued</TableHead>
                    <TableHead>Date Paid</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {myFines.map(fine => (
                    <TableRow key={fine.id}>
                      <TableCell className="text-sm text-foreground">{fine.reason}</TableCell>
                      <TableCell className="text-right text-sm font-medium text-foreground">P{fine.amount}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[fine.status]} className="capitalize">{fine.status}</Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{fine.dateIssued}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{fine.datePaid || "--"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-success/10">
                <AlertTriangle className="size-6 text-success" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-foreground">No fines</h3>
              <p className="mt-1 text-xs text-muted-foreground">You have no fines on record. Keep it up!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
