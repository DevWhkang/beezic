export interface CheckListStoreStates {
  description: string;
  newCheckItem: Record<string, unknown>;
  checkItems: [];

  setDescription: (text: string) => void;
  setNewCheckItem: () => void;
  addCheckItems: () => void;
  removeCheckItem: (id: number) => void;
  initCheckListState: () => void;
}
