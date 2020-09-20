import { CheckListTypes } from './DataListModel';

export interface CheckListStoreTypes {
  description: string;
  newCheckItem: CheckListTypes;
  checkItems: Array<CheckListTypes>;

  initCheckListState(): void;
  setDescription(text: string): void;
  setNewCheckItem(): void;
  addCheckItems(): Promise<void>;
  removeCheckItem(id: number): Promise<void>;
}
