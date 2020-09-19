export interface AssignmentStoreStates {
  isUpdateBoth: boolean;
  isTimer: boolean;
  staffs: Array<StaffTypes>;
  ReservationList: Array<Record<string, unknown>>;
  currentReservation: Record<string, unknown>;
  selectedStaff: Record<string, Record<string, unknown>>;

  initAssignmentState: () => void;
  toggleIsTimer: () => void;
  assignmentStaff: () => void;
  getStaffList: () => void;
  setAssignment: () => void;
  setSelectedStaff: () => void;
  toggleIsUpdateBoth: () => void;
}

export interface StaffTypes {
  staffProfile: {
    id: number
    name: string
    email: string
    phone: string
    image: string
    introduce: string
  }
  assignmentTransaction: []
}
