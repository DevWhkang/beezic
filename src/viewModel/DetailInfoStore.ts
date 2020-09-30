import { observable } from 'mobx';
import DetailInfoModel from '../model/DetailInfoModel';
import { DetailInfoStoreTypes } from './@types/DetailInfoStore';

const DetailInfoStore: DetailInfoStoreTypes = observable({
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
    const { targetTransaction: { address: { location: { roadAddress } } } } = DetailInfoStore;
    const location = await DetailInfoModel.getGeocoding(roadAddress);
    DetailInfoStore.location = location;
  },

  async setAddressPickup() {
    const { targetTransaction: { address: { pickup: { roadAddress } } } } = DetailInfoStore;
    const pickup = await DetailInfoModel.getGeocoding(roadAddress);
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
