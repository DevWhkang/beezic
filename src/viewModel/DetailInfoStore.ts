import { observable } from 'mobx';
import DetailInfoModel from '../model/DetailInfoModel';
import { DetailInfoStoreTypes } from './@types/DetailInfoStore';

const DetailInfoStore: DetailInfoStoreTypes = observable({
  renderUserTransactionList: [],
  targetTransaction: {},
  pickupHtml: '',
  locationHtml: '',

  async getUserTransactionList(id) {
    DetailInfoStore.initRenderUserTransactionList();

    const dataArray = await DetailInfoModel.getTransactionListDoc();

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

  setMapLocationHTML(locationHtml) {
    DetailInfoStore.locationHtml = locationHtml;
  },

  setMapPickupHTML(pickupHtml) {
    DetailInfoStore.pickupHtml = pickupHtml;
  },

});

export default DetailInfoStore;
