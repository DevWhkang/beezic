import { ReservationDocTypes } from './DataListModel';

export interface DetailInfoModelTypes {
  getTransactionListDoc(): Promise<Array<ReservationDocTypes>>,
  getGeocoding(address: string): Promise<CoordinationTypes>,
}

interface CoordinationTypes {
  lat: string,
  lng: string,
}
