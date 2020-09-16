export interface ChatbotModelTypes {
  getReservationListDoc(callback: (items: Array<ReservationDocTypes>) => void): void,
  setReservationListDoc(updateData: Array<ReservationDocTypes>): void,
}

export interface ReservationDocTypes {
  id: number,
  checklist: Array<Record<string, unknown>>
  user: {
    id: number,
  }
}
