import { ReservationDocTypes } from './DataListModel';

export interface CheckListModelTypes {
  getCheckListDoc(): Promise<Array<ReservationDocTypes>>,
  setCheckListDoc(updateData: Array<ReservationDocTypes>): Promise<void>,
}
