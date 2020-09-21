import { CheckListTypes } from './DataListModel';

export interface CheckListStoreTypes {
  isModalShown: boolean;
  description: string;
  newCheckItem: CheckListTypes;
  checkItems: Array<CheckListTypes>;

  toggleModal(): void;
  initCheckListState(): void;
  setDescription(text: string): void;
  setNewCheckItem(): void;
  addCheckItems(): Promise<void>;
  removeCheckItem(id: number): Promise<void>;
}
