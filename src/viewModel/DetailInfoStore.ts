import { observable } from 'mobx';
import CheckListModel from '../model/CheckListModel';
import { DetailInfoStoreStates } from './@types';

const DetailInfoStore: DetailInfoStoreStates = observable({
  transactionDetailInfo: [],
  transactionCheckList: [],
  userTransactionList: [],
  renderUserTransactionList: [],

  getUserTransactionList(userId) {
    // db에서 data를 get -> [{}, ...]
    this.renderUserTransactionList = [];
    CheckListModel.getCheckListDoc((dataArray) => {
      dataArray.forEach((reservation) => {
        if (reservation.user.uid === userId) {
          this.renderUserTransactionList.push(reservation);
        }
      });
      this.userTransactionList = this.renderUserTransactionList;
    });
  },
});

export default DetailInfoStore;
