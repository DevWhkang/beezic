import { observable } from 'mobx';
import { setCheckListDoc } from '../model/checkListModel.ts';

interface checkListStore{
  description: string;
  newCheckItem: object;
  checkItems: [];
  setDescription: (text: string) => void;
  setNewCheckItem: () => void;
  addCheckItems: () => void;
}

const checkListStore: checkListStore = observable({
  description: '',
  newCheckItem: {},
  checkItems: [],

  setDescription(text) {
    this.description = text;
  },

  setNewCheckItem() {
    this.newCheckItem.id = this.checkItems.length + 1;
    this.newCheckItem.description = this.description;
  },

  addCheckItems() {
    // 아이템 객체 만들기
    this.setNewCheckItem();
    // 만들어진 아이템 객체를 배열 상태의 추가하기(빠른 랜더링 될 수 있도록)
    this.checkItems.unshift(this.newCheckItem);
    // 디비에 추가하기
    setCheckListDoc(this.checkItems);
    // 아이템 객체 리셋
    this.newCheckItem = {};
  },

  removeCheckItem(id) {
    this.checkItems = this.checkItems.filter((item) => item.id !== id);
    setCheckListDoc(this.checkItems);
  },

});

export default checkListStore;
