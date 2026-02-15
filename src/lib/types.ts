export type StudentStatus = "pending" | "approved" | "rejected"
export type FeeStatus = "paid" | "unpaid" | "partial"
export type FineStatus = "unpaid" | "paid" | "waived"
export type AttendanceStatus = "present" | "absent" | "excused"
export type ClearanceItemStatus = "cleared" | "pending" | "not-cleared"
export type EventType = "general-assembly" | "seminar" | "workshop" | "social" | "meeting"

export interface Student {
  id: string
  studentId: string
  firstName: string
  lastName: string
  email: string
  course: string
  yearLevel: number
  section: string
  status: StudentStatus
  registrationDate: string
  avatarUrl?: string
}

export interface MembershipFee {
  id: string
  studentId: string
  studentName: string
  amount: number
  semester: string
  academicYear: string
  status: FeeStatus
  paidDate?: string
  receiptNo?: string
}

export interface Event {
  id: string
  name: string
  description: string
  date: string
  location: string
  type: EventType
  attendeesCount: number
  totalStudents: number
}

export interface EventAttendance {
  id: string
  eventId: string
  eventName: string
  studentId: string
  studentName: string
  status: AttendanceStatus
  timeIn?: string
}

export interface Fine {
  id: string
  studentId: string
  studentName: string
  reason: string
  amount: number
  status: FineStatus
  dateIssued: string
  datePaid?: string
}

export interface ClearanceRequirement {
  name: string
  status: ClearanceItemStatus
}

export interface Clearance {
  id: string
  studentId: string
  studentName: string
  academicYear: string
  semester: string
  requirements: ClearanceRequirement[]
  overallStatus: ClearanceItemStatus
}

export interface FinancialSummary {
  totalCollected: number
  totalFines: number
  totalPending: number
  totalStudents: number
  monthlyCollections: { month: string; amount: number }[]
  feeStatusBreakdown: { status: string; count: number }[]
  fineStatusBreakdown: { status: string; count: number }[]
}
