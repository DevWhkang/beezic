export interface AssignmentModelTypes {
  getStaffDoc(callback: (items: Array<StaffDocTypes>) => void): void,
  setStaffDoc(updateData: Array<StaffDocTypes>): void,
  getReservationDoc(callback: (items: Array<ReservationDocTypes>) => void): void,
  setReservationDoc(updateData: Array<ReservationDocTypes>): void,
}

export interface StaffDocTypes {
  user: {
    uid: number,
  },
  assignmentStaff: {
    id: number,
  },
  assignmentTransaction: Array<ReservationDocTypes>,
  staffProfile: {
    id: number,
  }
}

export interface StaffListDocTypes {
  'staff-list': Array<StaffDocTypes>,
}

export interface ReservationDocTypes {
  id: number,
  checklist: Array<Record<string, unknown>>
  assignmentStaff: Record<string, unknown>,
  user: {
    uid: number,
  }
}

export interface ReservationListDocTypes {
  'reservation-list': Array<ReservationDocTypes>
}
