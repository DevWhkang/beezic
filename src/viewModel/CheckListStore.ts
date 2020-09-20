/* eslint-disable no-param-reassign */
import { observable } from 'mobx';
import CheckListModel from '../model/CheckListModel';
import ChatBotStore from './ChatBotStore';
import UserStore from './UserStore';
import ErrorStore from './ErrorStore';
import { CheckListStoreTypes } from './@types/CheckListStore';

const CheckListStore: CheckListStoreTypes = observable({
  isModalShown: false,
  description: '',
  newCheckItem: {},
  checkItems: [],

  toggleModal() {
    this.isModalShown = !this.isModalShown;
  },
  initCheckListState() {
    CheckListStore.description = '';
    CheckListStore.newCheckItem = {};
    CheckListStore.checkItems = [];
  },

  setDescription(text) {
    CheckListStore.description = text;
  },

  setNewCheckItem() {
    CheckListStore.newCheckItem.id = CheckListStore.checkItems.length + 1;
    CheckListStore.newCheckItem.description = CheckListStore.description;
  },

  async addCheckItems() {
    // 아이템 객체 만들기
    CheckListStore.setNewCheckItem();
    // 만들어진 아이템 객체를 배열 상태의 추가하기(빠른 랜더링 될 수 있도록)
    CheckListStore.checkItems.unshift(CheckListStore.newCheckItem);
    try {
      // 디비의 데이터 가져오기
      const dataArray = await CheckListModel.getCheckListDoc();
      dataArray.forEach((reservation) => {
        // 디비에서 가져온 데이터에서 로그인된 해당 유저의 예약 정보만을 가져온다.
        if ((reservation.user.uid === UserStore.user.uid)
          && (reservation.id === ChatBotStore.userFinalData.id)) {
          reservation.checklist = CheckListStore.checkItems;
        }
      });
      await CheckListModel.setCheckListDoc(dataArray);
      CheckListStore.newCheckItem = {};
    } catch (error) {
      ErrorStore.handle(error);
    }
  },

  async removeCheckItem(id) {
    // 상태에서 지우기
    CheckListStore.checkItems = CheckListStore.checkItems.filter((item) => item.id !== id);
    // 디비의 데이터 가져오기
    try {
      const dataArray = await CheckListModel.getCheckListDoc();
      dataArray.forEach((reservation) => {
        // 디비에서 가져온 데이터에서 로그인된 해당 유저의 예약 정보만을 가져온다.
        if (reservation.user.uid === UserStore.user.uid
          && reservation.id === ChatBotStore.userFinalData.id) {
          // 지워진 리스트를 업데이트
          reservation.checklist = CheckListStore.checkItems;
        }
      });
      // 수정된 데이터를 디비에 업데이트하기
      await CheckListModel.setCheckListDoc(dataArray);
    } catch (error) {
      ErrorStore.handle(error);
    }
  },
});

export default CheckListStore;
