import {
  TransactionTypes,
  LocationTypes,
} from './Transaction';
import {
  ReservationDocTypes,
} from './DataListModel';

export interface DetailInfoStoreTypes {
  renderUserTransactionList: Array<ReservationDocTypes>,
  targetTransaction: TransactionTypes,
  location: LocationTypes,
  pickup: LocationTypes,
  pickupHtml: string,
  locationHtml: string,

  getUserTransactionList(id: number): void,
  initRenderUserTransactionList(): void,
  filterTargetTransaction(id: number): void,
  setAddressLocation(): void,
  setAddressPickup(): void,
  setMapLocationHTML(locationHtml: string): void,
  setMapPickupHTML(pickupHtml: string): void,
}
