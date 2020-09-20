export interface CheckListStoreStates {
  isModalShown: boolean;
  description: string;
  newCheckItem: Record<string, unknown>;
  checkItems: [];

  toggleModal: () => void;
  setDescription: (text: string) => void;
  setNewCheckItem: () => void;
  addCheckItems: () => void;
  removeCheckItem: (id: number) => void;
  initCheckListState: () => void;
}
