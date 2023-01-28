import '@testing-library/jest-dom/extend-expect';
declare module '*.jpg';
declare module '*.svg';
declare module '*.png';

declare module 'react' {
  interface HTMLAttributes<T> {
    children?: ReactI18NextChild | Iterable<ReactI18NextChild>;
  }
}
