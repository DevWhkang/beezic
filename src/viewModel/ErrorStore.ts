import { observable } from 'mobx';
import { ErrorStoreStates } from './@types/ErrorStore';

const ErrorStore: ErrorStoreStates = observable({

  /* States */

  error: '',
  short: '',

  /* Store Handler */

  // 인자로 받은 error를 auth error와 common error로 분기하고 이를 state에 저장합니다.
  handle(error) {
    const { message, userInfo } = error;
    ErrorStore.error = message;
    ErrorStore.short = namespace === 'auth'
      ? userInfo.message
      : 'Unexpected error occurred!';
    console.error('Error: ', message);
  },

  // 입력받은 keyword를 통해 error를 찾고 해당 error가 맞을 시 두 번째 인자인 errorMessage를 그대로 반환한다.
  message(keyword, errorMessage) {
    const { short } = ErrorStore;
    return short.includes(keyword) ? errorMessage : ' ';
  },

  reset() {
    ErrorStore.error = '';
    ErrorStore.short = '';
  },
});

export default ErrorStore;
