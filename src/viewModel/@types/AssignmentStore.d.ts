export interface AssignmentStoreStates {
  isModalShown: boolean;
  isUpdateBoth: boolean;
  isTimer: boolean;
  staffs: Array<StaffTypes>;
  ReservationList: Array<Record<string, unknown>>;
  currentReservation: Record<string, unknown>;
  selectedStaff: Record<string, Record<string, unknown>>;

  toggleModal: () => void;
  initAssignmentState: () => void;
  toggleIsTimer: () => void;
  assignmentStaff: () => void;
  getStaffList: () => void;
  setAssignment: () => void;
  getSelectedStaff: () => void;
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
