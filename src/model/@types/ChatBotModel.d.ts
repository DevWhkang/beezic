export interface ChatbotModelTypes {
  getReservationListDoc(callback: (items: Array<string>) => void): void,
  setReservationListDoc(updateData: Array<Record<string, unknown>>): void,
}
