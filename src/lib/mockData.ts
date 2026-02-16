// Mock Data for Atlas System
// This data structure is designed to be easily replaced by backend API calls

import { Organization, Student, Event, MembershipFee, MembershipFeeLog, Fine, FinePayment, Clearance, EventAttendance, FinancialReport, ActivityLog, User } from "../../types";

export const mockOrganizations: Organization[] = [
  {
    id: 'org-1',
    name: 'Computer Science Society',
    code: 'CSS',
    description: 'Official organization for Computer Science students',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: 'org-2',
    name: 'Information Technology Guild',
    code: 'ITG',
    description: 'Organization for Information Technology students',
    createdAt: '2024-01-15T08:00:00Z',
  },
];

export const mockStudents: Student[] = [
  {
    id: 'student-1',
    studentId: '2021-00123',
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan.delacruz@student.edu.ph',
    googleId: 'google-123456',
    course: 'BS Computer Science',
    yearLevel: 3,
    contactNumber: '+639171234567',
    registrationStatus: 'approved',
    membershipStatus: 'active',
    clearanceStatus: 'cleared',
    registeredAt: '2024-08-15T10:30:00Z',
    approvedAt: '2024-08-16T14:20:00Z',
    approvedBy: 'admin-1',
  },
  {
    id: 'student-2',
    studentId: '2021-00456',
    firstName: 'Maria',
    lastName: 'Santos',
    email: 'maria.santos@student.edu.ph',
    googleId: 'google-234567',
    course: 'BS Computer Science',
    yearLevel: 3,
    contactNumber: '+639181234567',
    registrationStatus: 'approved',
    membershipStatus: 'active',
    clearanceStatus: 'with-dues',
    registeredAt: '2024-08-15T11:00:00Z',
    approvedAt: '2024-08-16T15:00:00Z',
    approvedBy: 'admin-1',
  },
  {
    id: 'student-3',
    studentId: '2022-00789',
    firstName: 'Pedro',
    lastName: 'Reyes',
    email: 'pedro.reyes@student.edu.ph',
    googleId: 'google-345678',
    course: 'BS Information Technology',
    yearLevel: 2,
    contactNumber: '+639191234567',
    registrationStatus: 'approved',
    membershipStatus: 'inactive',
    clearanceStatus: 'with-dues',
    registeredAt: '2024-08-16T09:00:00Z',
    approvedAt: '2024-08-17T10:00:00Z',
    approvedBy: 'admin-1',
  },
  {
    id: 'student-4',
    studentId: '2023-00321',
    firstName: 'Ana',
    lastName: 'Torres',
    email: 'ana.torres@student.edu.ph',
    googleId: 'google-456789',
    course: 'BS Computer Science',
    yearLevel: 1,
    contactNumber: '+639201234567',
    registrationStatus: 'pending',
    membershipStatus: 'inactive',
    clearanceStatus: 'pending',
    registeredAt: '2025-08-20T13:00:00Z',
  },
  {
    id: 'student-5',
    studentId: '2021-00654',
    firstName: 'Carlos',
    lastName: 'Mercado',
    email: 'carlos.mercado@student.edu.ph',
    googleId: 'google-567890',
    course: 'BS Computer Science',
    yearLevel: 3,
    contactNumber: '+639211234567',
    registrationStatus: 'approved',
    membershipStatus: 'active',
    clearanceStatus: 'cleared',
    registeredAt: '2024-08-15T14:00:00Z',
    approvedAt: '2024-08-16T16:00:00Z',
    approvedBy: 'admin-1',
  },
];

export const mockMembershipFees: MembershipFee[] = [
  {
    id: 'memfee-1',
    studentId: 'student-1',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    amount: 500,
    paymentStatus: 'paid',
    paymentMethod: 'gcash',
    paymentDate: '2024-08-20T10:00:00Z',
    referenceNumber: 'GC-202408201000',
    processedBy: 'treasurer-1',
    remarks: 'Paid in full',
  },
  {
    id: 'memfee-2',
    studentId: 'student-2',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    amount: 500,
    paymentStatus: 'paid',
    paymentMethod: 'cash',
    paymentDate: '2024-08-21T14:30:00Z',
    processedBy: 'treasurer-1',
    remarks: 'Paid in full',
  },
  {
    id: 'memfee-3',
    studentId: 'student-3',
    organizationId: 'org-2',
    academicYear: '2024-2025',
    semester: '1st Semester',
    amount: 450,
    paymentStatus: 'overdue',
    remarks: 'Payment reminder sent',
  },
  {
    id: 'memfee-4',
    studentId: 'student-4',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    amount: 500,
    paymentStatus: 'pending',
  },
  {
    id: 'memfee-5',
    studentId: 'student-5',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    amount: 500,
    paymentStatus: 'paid',
    paymentMethod: 'bank-transfer',
    paymentDate: '2024-08-19T09:00:00Z',
    referenceNumber: 'BT-202408190900',
    processedBy: 'treasurer-1',
    remarks: 'Early bird payment',
  },
];

export const mockMembershipFeeLogs: MembershipFeeLog[] = [
  {
    id: 'memlog-1',
    membershipFeeId: 'memfee-1',
    studentId: 'student-1',
    action: 'created',
    newStatus: 'pending',
    amount: 500,
    performedBy: 'admin-1',
    timestamp: '2024-08-15T10:30:00Z',
    remarks: 'Membership fee created upon registration approval',
  },
  {
    id: 'memlog-2',
    membershipFeeId: 'memfee-1',
    studentId: 'student-1',
    action: 'paid',
    previousStatus: 'pending',
    newStatus: 'paid',
    amount: 500,
    performedBy: 'treasurer-1',
    timestamp: '2024-08-20T10:00:00Z',
    remarks: 'Payment received via GCash',
  },
  {
    id: 'memlog-3',
    membershipFeeId: 'memfee-3',
    studentId: 'student-3',
    action: 'overdue-notice',
    previousStatus: 'pending',
    newStatus: 'overdue',
    amount: 450,
    performedBy: 'system',
    timestamp: '2024-09-15T00:00:00Z',
    remarks: 'Automatic overdue status after deadline',
  },
];

export const mockFines: Fine[] = [
  {
    id: 'fine-1',
    studentId: 'student-2',
    organizationId: 'org-1',
    title: 'Unexcused Absence - General Assembly',
    description: 'Failed to attend the mandatory general assembly',
    amount: 100,
    paymentStatus: 'unpaid',
    amountPaid: 0,
    issuedDate: '2024-09-05T10:00:00Z',
    dueDate: '2024-09-20T23:59:59Z',
    issuedBy: 'officer-1',
    eventId: 'event-1',
  },
  {
    id: 'fine-2',
    studentId: 'student-2',
    organizationId: 'org-1',
    title: 'Unexcused Absence - General Assembly',
    description: 'Failed to attend the mandatory general assembly',
    amount: 50,
    paymentStatus: 'unpaid',
    amountPaid: 0,
    issuedDate: '2024-10-03T10:00:00Z',
    dueDate: '2024-10-18T23:59:59Z',
    issuedBy: 'officer-1',
    eventId: 'event-2',
  },
  {
    id: 'fine-3',
    studentId: 'student-3',
    organizationId: 'org-2',
    title: 'Unexcused Absence - General Assembly',
    description: 'Failed to attend the mandatory general assembly',
    amount: 500,
    paymentStatus: 'partial',
    amountPaid: 200,
    issuedDate: '2024-09-25T15:00:00Z',
    dueDate: '2024-10-25T23:59:59Z',
    issuedBy: 'officer-2',
    remarks: 'Paid 200 out of 500, remaining balance 300',
  },
  {
    id: 'fine-4',
    studentId: 'student-1',
    organizationId: 'org-1',
    title: 'Uniform Violation - Org Day',
    description: 'Not wearing complete organization uniform during Org Day',
    amount: 75,
    paymentStatus: 'paid',
    amountPaid: 75,
    issuedDate: '2024-09-10T14:00:00Z',
    dueDate: '2024-09-25T23:59:59Z',
    paymentDate: '2024-09-12T16:00:00Z',
    issuedBy: 'officer-1',
  },
  {
    id: 'fine-5',
    studentId: 'student-3',
    organizationId: 'org-2',
    title: 'Unexcused Absence - Workshop',
    description: 'Did not attend the mandatory skills workshop',
    amount: 150,
    paymentStatus: 'waived',
    amountPaid: 0,
    issuedDate: '2024-10-01T09:00:00Z',
    dueDate: '2024-10-16T23:59:59Z',
    issuedBy: 'officer-2',
    remarks: 'Waived due to medical emergency with valid documentation',
  },
];

export const mockFinePayments: FinePayment[] = [
  {
    id: 'fpay-1',
    fineId: 'fine-4',
    studentId: 'student-1',
    amount: 75,
    paymentMethod: 'cash',
    paymentDate: '2024-09-12T16:00:00Z',
    receivedBy: 'treasurer-1',
    remarks: 'Paid in full',
  },
  {
    id: 'fpay-2',
    fineId: 'fine-3',
    studentId: 'student-3',
    amount: 200,
    paymentMethod: 'gcash',
    paymentDate: '2024-09-28T11:00:00Z',
    referenceNumber: 'GC-202409281100',
    receivedBy: 'treasurer-2',
    remarks: 'Partial payment - 1st installment',
  },
];

export const mockClearances: Clearance[] = [
  {
    id: 'clear-1',
    studentId: 'student-1',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    status: 'cleared',
    totalDues: 0,
    membershipFeePaid: true,
    finesPaid: true,
    equipmentReturned: true,
    documentsSubmitted: true,
    clearedDate: '2024-10-15T10:00:00Z',
    clearedBy: 'admin-1',
    remarks: 'All requirements completed',
  },
  {
    id: 'clear-2',
    studentId: 'student-2',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    status: 'with-dues',
    totalDues: 150,
    membershipFeePaid: true,
    finesPaid: false,
    equipmentReturned: true,
    documentsSubmitted: true,
    remarks: 'Has unpaid fines totaling 150',
  },
  {
    id: 'clear-3',
    studentId: 'student-3',
    organizationId: 'org-2',
    academicYear: '2024-2025',
    semester: '1st Semester',
    status: 'with-dues',
    totalDues: 750,
    membershipFeePaid: false,
    finesPaid: false,
    equipmentReturned: false,
    documentsSubmitted: true,
    remarks: 'Unpaid membership fee (450) and fines (300)',
  },
  {
    id: 'clear-4',
    studentId: 'student-4',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    status: 'pending',
    totalDues: 500,
    membershipFeePaid: false,
    finesPaid: true,
    equipmentReturned: true,
    documentsSubmitted: false,
    remarks: 'Pending registration approval',
  },
  {
    id: 'clear-5',
    studentId: 'student-5',
    organizationId: 'org-1',
    academicYear: '2024-2025',
    semester: '1st Semester',
    status: 'cleared',
    totalDues: 0,
    membershipFeePaid: true,
    finesPaid: true,
    equipmentReturned: true,
    documentsSubmitted: true,
    clearedDate: '2024-10-10T14:00:00Z',
    clearedBy: 'admin-1',
    remarks: 'Early clearance completion',
  },
];

export const mockEvents: Event[] = [
  {
    id: 'event-1',
    organizationId: 'org-1',
    title: 'General Assembly - 1st Semester',
    description: 'Mandatory general assembly for all organization members',
    eventType: 'meeting',
    venue: 'Engineering Building - Room 301',
    startDateTime: '2024-09-05T14:00:00Z',
    endDateTime: '2024-09-05T17:00:00Z',
    requiresAttendance: true,
    maxAttendees: 150,
    registrationDeadline: '2024-09-04T23:59:59Z',
    createdBy: 'officer-1',
    createdAt: '2024-08-25T10:00:00Z',
    status: 'completed',
  },
  {
    id: 'event-2',
    organizationId: 'org-1',
    title: 'Web Development Workshop',
    description: 'Hands-on workshop covering React and Next.js',
    eventType: 'workshop',
    venue: 'Computer Laboratory 2',
    startDateTime: '2024-10-03T13:00:00Z',
    endDateTime: '2024-10-03T17:00:00Z',
    requiresAttendance: true,
    maxAttendees: 40,
    registrationDeadline: '2024-10-01T23:59:59Z',
    createdBy: 'officer-1',
    createdAt: '2024-09-15T09:00:00Z',
    status: 'completed',
  },
  {
    id: 'event-3',
    organizationId: 'org-1',
    title: 'Team Building Activity',
    description: 'Annual team building and bonding activity',
    eventType: 'social',
    venue: 'Mountain Resort, Tagaytay',
    startDateTime: '2024-11-15T08:00:00Z',
    endDateTime: '2024-11-16T17:00:00Z',
    requiresAttendance: false,
    maxAttendees: 100,
    registrationDeadline: '2024-11-10T23:59:59Z',
    createdBy: 'officer-1',
    createdAt: '2024-10-20T14:00:00Z',
    status: 'upcoming',
  },
  {
    id: 'event-4',
    organizationId: 'org-2',
    title: 'Hackathon 2024',
    description: '24-hour coding competition',
    eventType: 'competition',
    venue: 'Innovation Hub',
    startDateTime: '2024-11-20T08:00:00Z',
    endDateTime: '2024-11-21T08:00:00Z',
    requiresAttendance: false,
    maxAttendees: 60,
    registrationDeadline: '2024-11-15T23:59:59Z',
    createdBy: 'officer-2',
    createdAt: '2024-10-01T10:00:00Z',
    status: 'upcoming',
  },
  {
    id: 'event-5',
    organizationId: 'org-1',
    title: 'Community Outreach Program',
    description: 'Technology literacy program for elementary students',
    eventType: 'community-service',
    venue: 'San Jose Elementary School',
    startDateTime: '2024-12-05T09:00:00Z',
    endDateTime: '2024-12-05T16:00:00Z',
    requiresAttendance: true,
    maxAttendees: 30,
    registrationDeadline: '2024-11-30T23:59:59Z',
    createdBy: 'officer-1',
    createdAt: '2024-11-01T13:00:00Z',
    status: 'upcoming',
  },
];

export const mockEventAttendance: EventAttendance[] = [
  {
    id: 'attend-1',
    eventId: 'event-1',
    studentId: 'student-1',
    status: 'present',
    checkInTime: '2024-09-05T13:55:00Z',
    checkOutTime: '2024-09-05T17:05:00Z',
    recordedBy: 'officer-1',
  },
  {
    id: 'attend-2',
    eventId: 'event-1',
    studentId: 'student-2',
    status: 'absent',
    recordedBy: 'officer-1',
    remarks: 'No show, no excuse letter',
  },
  {
    id: 'attend-3',
    eventId: 'event-1',
    studentId: 'student-3',
    status: 'late',
    checkInTime: '2024-09-05T14:45:00Z',
    checkOutTime: '2024-09-05T17:00:00Z',
    recordedBy: 'officer-1',
    remarks: 'Arrived 45 minutes late',
  },
  {
    id: 'attend-4',
    eventId: 'event-1',
    studentId: 'student-5',
    status: 'present',
    checkInTime: '2024-09-05T13:50:00Z',
    checkOutTime: '2024-09-05T17:10:00Z',
    recordedBy: 'officer-1',
  },
  {
    id: 'attend-5',
    eventId: 'event-2',
    studentId: 'student-1',
    status: 'present',
    checkInTime: '2024-10-03T12:55:00Z',
    checkOutTime: '2024-10-03T17:08:00Z',
    recordedBy: 'officer-1',
  },
  {
    id: 'attend-6',
    eventId: 'event-2',
    studentId: 'student-2',
    status: 'late',
    checkInTime: '2024-10-03T13:30:00Z',
    checkOutTime: '2024-10-03T17:00:00Z',
    recordedBy: 'officer-1',
    remarks: 'Arrived 30 minutes late',
  },
  {
    id: 'attend-7',
    eventId: 'event-2',
    studentId: 'student-5',
    status: 'present',
    checkInTime: '2024-10-03T12:58:00Z',
    checkOutTime: '2024-10-03T17:05:00Z',
    recordedBy: 'officer-1',
  },
];

export const mockFinancialReports: FinancialReport[] = [
  {
    id: 'report-1',
    organizationId: 'org-1',
    reportType: 'comprehensive',
    title: 'Financial Report - 1st Semester 2024-2025',
    startDate: '2024-08-15T00:00:00Z',
    endDate: '2024-10-15T23:59:59Z',
    totalRevenue: 2075,
    totalMembershipFees: 2000,
    totalFines: 75,
    totalEventFees: 0,
    totalExpenses: 15000,
    generatedBy: 'treasurer-1',
    generatedAt: '2024-10-16T09:00:00Z',
    status: 'final',
  },
  {
    id: 'report-2',
    organizationId: 'org-1',
    reportType: 'fines',
    title: 'Fines Collection Report - September 2024',
    startDate: '2024-09-01T00:00:00Z',
    endDate: '2024-09-30T23:59:59Z',
    totalRevenue: 75,
    totalMembershipFees: 0,
    totalFines: 75,
    totalEventFees: 0,
    generatedBy: 'treasurer-1',
    generatedAt: '2024-10-01T10:00:00Z',
    status: 'published',
  },
  {
    id: 'report-3',
    organizationId: 'org-2',
    reportType: 'membership-fees',
    title: 'Membership Fees Collection Report - 1st Semester 2024-2025',
    startDate: '2024-08-15T00:00:00Z',
    endDate: '2024-10-15T23:59:59Z',
    totalRevenue: 0,
    totalMembershipFees: 0,
    totalFines: 0,
    totalEventFees: 0,
    generatedBy: 'treasurer-2',
    generatedAt: '2024-10-16T11:00:00Z',
    status: 'draft',
  },
];

export const mockActivityLogs: ActivityLog[] = [
  {
    id: 'log-1',
    userId: 'admin-1',
    userType: 'admin',
    action: 'Approved student registration',
    module: 'students',
    entityType: 'student',
    entityId: 'student-1',
    details: 'Approved registration for Juan Dela Cruz (2021-00123)',
    timestamp: '2024-08-16T14:20:00Z',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'log-2',
    userId: 'treasurer-1',
    userType: 'treasurer',
    action: 'Recorded membership fee payment',
    module: 'membership',
    entityType: 'membership-fee',
    entityId: 'memfee-1',
    details: 'Processed payment of 500 PHP from Juan Dela Cruz via GCash',
    timestamp: '2024-08-20T10:00:00Z',
    ipAddress: '192.168.1.101',
  },
  {
    id: 'log-3',
    userId: 'officer-1',
    userType: 'officer',
    action: 'Issued fine',
    module: 'fines',
    entityType: 'fine',
    entityId: 'fine-1',
    details: 'Issued absence fine (100 PHP) to Maria Santos for General Assembly',
    timestamp: '2024-09-05T10:00:00Z',
    ipAddress: '192.168.1.102',
  },
  {
    id: 'log-4',
    userId: 'treasurer-1',
    userType: 'treasurer',
    action: 'Recorded fine payment',
    module: 'fines',
    entityType: 'fine-payment',
    entityId: 'fpay-1',
    details: 'Received fine payment of 75 PHP from Juan Dela Cruz',
    timestamp: '2024-09-12T16:00:00Z',
    ipAddress: '192.168.1.101',
  },
  {
    id: 'log-5',
    userId: 'admin-1',
    userType: 'admin',
    action: 'Cleared student',
    module: 'clearance',
    entityType: 'clearance',
    entityId: 'clear-1',
    details: 'Granted clearance to Juan Dela Cruz for 1st Semester 2024-2025',
    timestamp: '2024-10-15T10:00:00Z',
    ipAddress: '192.168.1.100',
  },
  {
    id: 'log-6',
    userId: 'officer-1',
    userType: 'officer',
    action: 'Created event',
    module: 'events',
    entityType: 'event',
    entityId: 'event-3',
    details: 'Created event: Team Building Activity',
    timestamp: '2024-10-20T14:00:00Z',
    ipAddress: '192.168.1.102',
  },
  {
    id: 'log-7',
    userId: 'officer-1',
    userType: 'officer',
    action: 'Recorded attendance',
    module: 'events',
    entityType: 'event-attendance',
    entityId: 'attend-1',
    details: 'Marked Juan Dela Cruz as present for General Assembly',
    timestamp: '2024-09-05T13:55:00Z',
    ipAddress: '192.168.1.102',
  },
  {
    id: 'log-8',
    userId: 'treasurer-1',
    userType: 'treasurer',
    action: 'Generated financial report',
    module: 'reports',
    entityType: 'financial-report',
    entityId: 'report-1',
    details: 'Generated comprehensive financial report for 1st Semester 2024-2025',
    timestamp: '2024-10-16T09:00:00Z',
    ipAddress: '192.168.1.101',
  },
  {
    id: 'log-9',
    userId: 'student-1',
    userType: 'student',
    action: 'Viewed clearance status',
    module: 'clearance',
    details: 'Student accessed clearance status via portal',
    timestamp: '2024-10-17T11:30:00Z',
    ipAddress: '192.168.1.150',
  },
  {
    id: 'log-10',
    userId: 'student-2',
    userType: 'student',
    action: 'Viewed fines',
    module: 'fines',
    details: 'Student viewed outstanding fines via portal',
    timestamp: '2024-10-17T14:20:00Z',
    ipAddress: '192.168.1.151',
  },
];

export const mockUsers: User[] = [
  {
    id: 'admin-1',
    email: 'admin@organization.edu.ph',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    organizationId: 'org-1',
    googleId: 'google-admin-1',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: 'treasurer-1',
    email: 'treasurer.css@organization.edu.ph',
    firstName: 'Jane',
    lastName: 'Treasurer',
    role: 'treasurer',
    organizationId: 'org-1',
    googleId: 'google-treas-1',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: 'treasurer-2',
    email: 'treasurer.itg@organization.edu.ph',
    firstName: 'Mark',
    lastName: 'Finance',
    role: 'treasurer',
    organizationId: 'org-2',
    googleId: 'google-treas-2',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: 'officer-1',
    email: 'officer.css@organization.edu.ph',
    firstName: 'John',
    lastName: 'Officer',
    role: 'officer',
    organizationId: 'org-1',
    googleId: 'google-officer-1',
    createdAt: '2024-01-15T08:00:00Z',
  },
  {
    id: 'officer-2',
    email: 'officer.itg@organization.edu.ph',
    firstName: 'Lisa',
    lastName: 'Officer',
    role: 'officer',
    organizationId: 'org-2',
    googleId: 'google-officer-2',
    createdAt: '2024-01-15T08:00:00Z',
  },
];

// ==================== HELPER FUNCTIONS ====================

export const getStudentById = (id: string): Student | undefined => {
  return mockStudents.find((student) => student.id === id);
};

export const getStudentByStudentId = (studentId: string): Student | undefined => {
  return mockStudents.find((student) => student.studentId === studentId);
};

export const getMembershipFeesByStudentId = (studentId: string): MembershipFee[] => {
  return mockMembershipFees.filter((fee) => fee.studentId === studentId);
};

export const getFinesByStudentId = (studentId: string): Fine[] => {
  return mockFines.filter((fine) => fine.studentId === studentId);
};

export const getUnpaidFinesByStudentId = (studentId: string): Fine[] => {
  return mockFines.filter(
    (fine) => fine.studentId === studentId && fine.paymentStatus !== 'paid' && fine.paymentStatus !== 'waived'
  );
};

export const getClearanceByStudentId = (studentId: string): Clearance | undefined => {
  return mockClearances.find((clearance) => clearance.studentId === studentId);
};

export const getEventsByOrganizationId = (organizationId: string): Event[] => {
  return mockEvents.filter((event) => event.organizationId === organizationId);
};

export const getAttendanceByEventId = (eventId: string): EventAttendance[] => {
  return mockEventAttendance.filter((attendance) => attendance.eventId === eventId);
};

export const getAttendanceByStudentId = (studentId: string): EventAttendance[] => {
  return mockEventAttendance.filter((attendance) => attendance.studentId === studentId);
};

export const getActivityLogsByModule = (module: ActivityLog['module']): ActivityLog[] => {
  return mockActivityLogs.filter((log) => log.module === module);
};

export const getRecentActivityLogs = (limit: number = 10): ActivityLog[] => {
  return mockActivityLogs
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, limit);
};

// Statistics helpers
export const getStudentStatistics = () => {
  return {
    total: mockStudents.length,
    approved: mockStudents.filter((s) => s.registrationStatus === 'approved').length,
    pending: mockStudents.filter((s) => s.registrationStatus === 'pending').length,
    active: mockStudents.filter((s) => s.membershipStatus === 'active').length,
    withDues: mockStudents.filter((s) => s.clearanceStatus === 'with-dues').length,
  };
};

export const getFinancialStatistics = () => {
  const totalFinesIssued = mockFines.reduce((sum, fine) => sum + fine.amount, 0);
  const totalFinesCollected = mockFines.reduce((sum, fine) => sum + fine.amountPaid, 0);
  const totalMembershipFeesCollected = mockMembershipFees
    .filter((fee) => fee.paymentStatus === 'paid')
    .reduce((sum, fee) => sum + fee.amount, 0);
  
  return {
    totalFinesIssued,
    totalFinesCollected,
    totalFinesOutstanding: totalFinesIssued - totalFinesCollected,
    totalMembershipFeesCollected,
    totalRevenue: totalFinesCollected + totalMembershipFeesCollected,
  };
};

export const getClearanceStatistics = () => {
  return {
    total: mockClearances.length,
    cleared: mockClearances.filter((c) => c.status === 'cleared').length,
    pending: mockClearances.filter((c) => c.status === 'pending').length,
    withDues: mockClearances.filter((c) => c.status === 'with-dues').length,
  };
};

// Export feature helpers - for generating data in various formats
export const exportToCSV = <T>(data: T[], filename: string): string => {
  // This would generate CSV format data
  // Implementation would depend on the actual export requirements
  return `CSV export would be generated here for ${filename}`;
};

export const exportToExcel = <T>(data: T[], filename: string): string => {
  // This would generate Excel format data
  return `Excel export would be generated here for ${filename}`;
};

export const exportToPDF = <T>(data: T[], filename: string): string => {
  // This would generate PDF format data
  return `PDF export would be generated here for ${filename}`;
};
