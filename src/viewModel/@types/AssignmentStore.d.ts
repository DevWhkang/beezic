import { ReservationDocTypes, StaffDocTypes } from './DataListModel';

export interface AssignmentStoreTypes {
  isTimer: boolean;
  isModalShown: boolean;
  isUpdateBoth: boolean;
  staffs: Array<StaffDocTypes>;
  selectedStaff: StaffDocTypes;
  reservationList: Array<ReservationDocTypes>;
  currentReservation: ReservationDocTypes;

  toggleModal(): void;
  initAssignmentState(): void;
  toggleIsTimer(): void;
  toggleIsGetStaffList(): void;
  assignmentStaff(): Promise<void>;
  setAssignment(): Promise<void>;
  updateDoc(): Promise<void>
  getStaffList(): Promise<void>;
  setSelectedStaff(): void;
  toggleIsUpdateBoth(): void;
}
