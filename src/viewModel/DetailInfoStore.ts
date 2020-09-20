import { observable } from 'mobx';
import CheckListModel from '../model/CheckListModel';
import { DetailInfoStoreStates } from './@types';

const DetailInfoStore: DetailInfoStoreStates = observable({
  transactionDetailInfo: [],
  transactionCheckList: [],
  renderUserTransactionList: [],
  targetTransaction: {},

  async getUserTransactionList(id) {
    DetailInfoStore.initRenderUserTransactionList();

    const dataArray = await CheckListModel.getCheckListDoc();

    dataArray.forEach((reservation) => {
      if (reservation.user.uid === id) {
        DetailInfoStore.renderUserTransactionList.push(reservation);
      }
    });
  },

  initRenderUserTransactionList() {
    DetailInfoStore.renderUserTransactionList = [];
  },

  filterTargetTransaction(id) {
    DetailInfoStore.renderUserTransactionList.forEach((transaction) => {
      if (id === transaction.id) {
        DetailInfoStore.targetTransaction = transaction;
      }
    });
  },

});

export default DetailInfoStore;
