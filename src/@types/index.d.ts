declare module '@emotion/native' {
  const styled: Record<string, () => Record<string, unknown>>;
  export default styled;
}

declare module '@emotion/native' {
  import { css } from '@emotion/native';

  const css: (strings: string[]) => Record<string, string>;
  export { css };
}

declare module '*.png' {
  const image: string;
  export default image;
}
