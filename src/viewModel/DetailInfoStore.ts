import { observable } from 'mobx';
import DetailInfoModel from '../model/DetailInfoModel';
import { DetailInfoStoreStates } from './@types';

const DetailInfoStore: DetailInfoStoreStates = observable({
  transactionDetailInfo: [],
  transactionCheckList: [],
  renderUserTransactionList: [],
  targetTransaction: {},
  location: {},
  pickup: {},
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
  async setAddressLocation() {
    const location = await DetailInfoModel.getGeocoding(DetailInfoStore.targetTransaction.address.location.roadAddress);
    DetailInfoStore.location = location;
  },

  async setAddressPickup() {
    const pickup = await DetailInfoModel.getGeocoding(DetailInfoStore.targetTransaction.address.pickup.roadAddress);
    DetailInfoStore.pickup = pickup;
  },

  setMapLocationHTML(locationHtml) {
    DetailInfoStore.locationHtml = locationHtml;
  },

  setMapPickupHTML(pickupHtml) {
    DetailInfoStore.pickupHtml = pickupHtml;
  },

});

export default DetailInfoStore;
