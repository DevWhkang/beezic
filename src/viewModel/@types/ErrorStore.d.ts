export interface ErrorStoreStates {
  error: string,
  short: string,

  handle(error: {
    code: string,
    message: string,
    namespace: string,
    userInfo: {
      code: string,
      message: string,
    }
  }),
  message(keyword: string, errorMessage: string): string,
  reset(): void,
}
