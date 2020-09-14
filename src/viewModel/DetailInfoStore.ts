import { observable } from 'mobx';
import { setCheckListDoc, getCheckListDoc } from '../model/checkListModel';

interface IDetailInfoStore {
  transactionDetailInfo: [];
  transactionCheckList: [];
  userTransactionList: [];
}

const DetailInfoStore: IDetailInfoStore = observable({
  transactionDetailInfo: [],
  transactionCheckList: [],
  userTransactionList: [],

  getUserTransactionList(userId) {
    // db에서 data를 get -> [{}, ...]
    getCheckListDoc((dataArray: []) => {
      dataArray.forEach((reservation) => {
        if (reservation.user.id === userId) {
          this.userTransactionList.push(reservation);
        }
      });
    });
  },

});

export default DetailInfoStore;
