export interface DetailInfoStoreStates {
  transactionDetailInfo: Array<unknown>,
  transactionCheckList: Array<unknown>,
  userTransactionList: Array<unknown>,

  getUserTransactionList(userId: number): void,
}
