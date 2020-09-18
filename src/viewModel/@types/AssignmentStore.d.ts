export interface AssignmentStoreStates {
  isAssignment: boolean;
  isUpdateBoth: boolean;
  isGetStaffList: boolean;
  isSelected: boolean;
  isCurrentReservation: boolean;
  isResetStaffs: boolean;
  staffs: Array<StaffTypes>;
  ReservationList: Array<Record<string, unknown>>;
  currentReservation: Record<string, unknown>;
  selectedStaff: Record<string, Record<string, unknown>>;

  setSelectedStaff: () => void;
  getStaffList: () => void;
  getReservationList: () => void;
  initAssignmentState: () => void;
  toggleGetStaffList: () => void;
  toggleIsAssignment(): void;
  toggleIsUpdateStaffsList(): void;
  assignmentStaffToReservation(): void;
  assignmentReservationToStaff(): void;

  fetchAssignmentedReservationList(): void;
  fetchAssignmentedStaffList(): void;
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
