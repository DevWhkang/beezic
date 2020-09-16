import { observable } from 'mobx';
import CheckListModel from '../model/CheckListModel';
import { DetailInfoStoreStates } from './@types';

const DetailInfoStore: DetailInfoStoreStates = observable({
  transactionDetailInfo: [],
  transactionCheckList: [],
  userTransactionList: [],

  getUserTransactionList(userId) {
    // db에서 data를 get -> [{}, ...]
    CheckListModel.getCheckListDoc((dataArray) => {
      dataArray.forEach((reservation) => {
        if (reservation.user.id === userId) {
          this.userTransactionList.push(reservation);
        }
      });
    });
  },

});

export default DetailInfoStore;
