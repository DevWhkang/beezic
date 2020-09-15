export interface CheckListModelTypes {
  getCheckListDoc(callback: (ReservationListDoc: Array<ReservationDocTypes>) => void): void,
  setCheckListDoc(updateData: Array<Record<string, unknown>>): void,
}

export interface ReservationDocTypes {
  id: number,
  checklist: Array<Record<string, unknown>>
  user: {
    id: number,
  }
}

export interface ReservationListDocTypes {
  'reservation-list': Array<ReservationDocTypes>
}
