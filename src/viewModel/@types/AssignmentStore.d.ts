export interface AssignmentStoreStates {
  isAssignment: boolean;
  isUpdateStaffsList: boolean,
  selectedStaff: Record<string, Record<string, unknown>>;
  staffs: Array<StaffTypes>;

  setSelectedStaff: () => void;
  setAssignmentStaff: () => void;
  initAssignmentState: () => void;
  toggleIsAssignment(): void,
  toggleIsUpdateStaffsList(): void,
}

export interface StaffTypes {
  staffProfile: {
    id: number
  }
}
