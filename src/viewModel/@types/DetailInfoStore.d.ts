export interface DetailInfoStoreStates {
  transactionDetailInfo: Array<string, unknown>,
  transactionCheckList: Array<string, unknown>,
  userTransactionList: Array<string, unknown>,

  getUserTransactionList(userId: number): void,
}
