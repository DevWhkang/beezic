import { StaffDocTypes, ReservationDocTypes } from './DataListModel';

export interface AssignmentModelTypes {
  getStaffDoc(): Promise<Array<StaffDocTypes>>,
  setStaffDoc(updateData: Array<StaffDocTypes>): Promise<void>,
  getReservationDoc(): Promise<Array<ReservationDocTypes>>,
  setReservationDoc(updateData: Array<ReservationDocTypes>): Promise<void>,
}
