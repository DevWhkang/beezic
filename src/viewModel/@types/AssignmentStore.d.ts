export interface AssignmentStoreStates {
  isAssignment: boolean;
  selectedStaff: Record<string, Record<string, unknown>>;
  staffs: Array<StaffTypes>;

  setSelectedStaff: () => void;
  setAssignmentStaff: () => void;
  initAssignmentState: () => void;
}

export interface StaffTypes {
  staffProfile: {
    id: number
  }
}
