import { observable } from 'mobx';

const ErrorStore = observable({

  /* States */

  error: '',
  short: '',

  /* Store Handler */

  handle(error): void {
    const { message }: { message: string; } = error as unknown;
    const regex = /\[auth.*?\]/g;
    if (regex.test(message)) {
      ErrorStore.error = message;
      [ErrorStore.short] = message.match(regex, '');
    } else {
      ErrorStore.error = message;
      ErrorStore.short = 'Unexpected error occurred!';
    }
    console.error('Error: ', message);
  },

  message(keyword: string, errorMessage: string): string {
    const { short } = ErrorStore;
    return short.includes(keyword) ? errorMessage : ' ';
  },

  reset(): void {
    ErrorStore.error = '';
    ErrorStore.short = '';
  },
});

export default ErrorStore;
