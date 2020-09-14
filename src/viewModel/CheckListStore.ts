import { observable } from 'mobx';
import { setCheckListDoc, getCheckListDoc } from '../model/checkListModel';
import ChatBotStore from './ChatBotStore';

interface ICheckListStore {
  description: string;
  newCheckItem: Record<string, unknown>;
  checkItems: [];
  setDescription: (text: string) => void;
  setNewCheckItem: () => void;
  addCheckItems: () => void;
  removeCheckItem: (id: number) => void;
}

const checkListStore: ICheckListStore = observable({
  description: '',
  newCheckItem: {},
  checkItems: [],

  setDescription(text: string) {
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
    // 디비의 데이터 가져오기
    getCheckListDoc((dataArray: []) => {
      dataArray.forEach((reservation: Record<string, Record<string, unknown>>) => {
        // 디비에서 가져온 데이터에서 로그인된 해당 유저의 예약 정보만을 가져온다.
        if (reservation.user.id === 1 && reservation.id === ChatBotStore.userFinalData.id) {
          reservation.checklist.checkItems = this.checkItems;
        }
      });
      // 수정된 데이터를 디비에 업데이트하기
      setCheckListDoc(dataArray);
    });
    // 아이템 객체 리셋
    this.newCheckItem = {};
  },

  removeCheckItem(id: number) {
    // 상태에서 지우기
    this.checkItems = this.checkItems.filter((item) => item.id !== id);
    // 디비의 데이터 가져오기
    getCheckListDoc((dataArray) => {
      dataArray.forEach((reservation) => {
        // 디비에서 가져온 데이터에서 로그인된 해당 유저의 예약 정보만을 가져온다.
        if (reservation.user.id === 1 && reservation.id === ChatBotStore.userFinalData.id) {
          // 지워진 리스트를 업데이트
          reservation.checklist.checkItems = this.checkItems;
        }
      });
      // 수정된 데이터를 디비에 업데이트하기
      setCheckListDoc(dataArray);
    });
  },

});

export default checkListStore;
