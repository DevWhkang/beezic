import { ReservationDocTypes } from './DataListModel';

export interface ChatbotModelTypes {
  getReservationListDoc(): Promise<Array<ReservationDocTypes>>,
  setReservationListDoc(updateData: Array<ReservationDocTypes>): Promise<void>,
}
