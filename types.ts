export interface Student {
  id: string;
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  googleId?: string; // For Google OAuth
  course: string;
  yearLevel: number;
  contactNumber: string;
  registrationStatus: 'pending' | 'approved' | 'rejected';
  membershipStatus: 'active' | 'inactive' | 'suspended';
  clearanceStatus: 'cleared' | 'pending' | 'with-dues';
  registeredAt: string;
  approvedAt?: string;
  approvedBy?: string;
  profilePicture?: string;
}

export interface Organization {
  id: string;
  name: string;
  code: string;
  description: string;
  logo?: string;
  createdAt: string;
}

export interface MembershipFee {
  id: string;
  studentId: string;
  organizationId: string;
  academicYear: string;
  semester: string;
  amount: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  paymentMethod?: 'cash' | 'bank-transfer' | 'gcash' | 'maya';
  paymentDate?: string;
  referenceNumber?: string;
  processedBy?: string;
  remarks?: string;
}

export interface MembershipFeeLog {
  id: string;
  membershipFeeId: string;
  studentId: string;
  action: 'created' | 'paid' | 'updated' | 'cancelled' | 'overdue-notice';
  previousStatus?: string;
  newStatus?: string;
  amount?: number;
  performedBy: string;
  timestamp: string;
  remarks?: string;
}

export interface Fine {
  id: string;
  studentId: string;
  organizationId: string;
  title: string;
  description: string;
  amount: number;
  paymentStatus: 'paid' | 'partial' | 'unpaid' | 'waived';
  amountPaid: number;
  issuedDate: string;
  dueDate: string;
  paymentDate?: string;
  issuedBy: string;
  eventId?: string;
  remarks?: string;
}

export interface FinePayment {
  id: string;
  fineId: string;
  studentId: string;
  amount: number;
  paymentMethod: 'cash' | 'bank-transfer' | 'gcash' | 'maya';
  paymentDate: string;
  referenceNumber?: string;
  receivedBy: string;
  remarks?: string;
}

export interface Clearance {
  id: string;
  studentId: string;
  organizationId: string;
  academicYear: string;
  semester: string;
  status: 'cleared' | 'pending' | 'with-dues';
  totalDues: number;
  membershipFeePaid: boolean;
  finesPaid: boolean;
  equipmentReturned: boolean;
  documentsSubmitted: boolean;
  clearedDate?: string;
  clearedBy?: string;
  remarks?: string;
}

export interface Event {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  eventType: 'meeting' | 'seminar' | 'workshop' | 'social' | 'competition' | 'community-service';
  venue: string;
  startDateTime: string;
  endDateTime: string;
  requiresAttendance: boolean;
  maxAttendees?: number;
  registrationDeadline?: string;
  createdBy: string;
  createdAt: string;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface EventAttendance {
  id: string;
  eventId: string;
  studentId: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  checkInTime?: string;
  checkOutTime?: string;
  recordedBy: string;
  remarks?: string;
}

export interface FinancialReport {
  id: string;
  organizationId: string;
  reportType: 'membership-fees' | 'fines' | 'events' | 'comprehensive';
  title: string;
  startDate: string;
  endDate: string;
  totalRevenue: number;
  totalMembershipFees: number;
  totalFines: number;
  totalEventFees: number;
  totalExpenses?: number;
  generatedBy: string;
  generatedAt: string;
  status: 'draft' | 'final' | 'published';
}

export interface ActivityLog {
  id: string;
  userId: string;
  userType: 'student' | 'admin' | 'treasurer' | 'officer';
  action: string;
  module: 'students' | 'fines' | 'clearance' | 'membership' | 'events' | 'reports';
  entityType?: string;
  entityId?: string;
  details: string;
  timestamp: string;
  ipAddress?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'admin' | 'treasurer' | 'officer';
  organizationId?: string;
  googleId?: string;
  createdAt: string;
}