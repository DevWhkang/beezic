export interface CheckListModelTypes {
  getCheckListDoc(callback: (ReservationListDoc: Array<ReservationDocTypes>) => void): void,
  setCheckListDoc(updateData: Array<ReservationDocTypes>): void,
}

export interface ReservationDocTypes {
  id: number,
  checklist: Array<Record<string, unknown>>
  user: {
    uid: number,
  }
}

export interface ReservationListDocTypes {
  'reservation-list': Array<ReservationDocTypes>
}
