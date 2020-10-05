import {
  TransactionTypes,
} from './Transaction';
import {
  ReservationDocTypes,
} from './DataListModel';

export interface DetailInfoStoreTypes {
  renderUserTransactionList: Array<ReservationDocTypes>,
  targetTransaction: TransactionTypes,
  pickupHtml: string,
  locationHtml: string,

  getUserTransactionList(id: number): void,
  initRenderUserTransactionList(): void,
  filterTargetTransaction(id: number): void,
  setMapLocationHTML(locationHtml: string): void,
  setMapPickupHTML(pickupHtml: string): void,
}
