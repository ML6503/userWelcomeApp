import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react/cleanup-after-each';
import '@testing-library/jest-dom';
declare module '*.jpg';
declare module '*.svg';
declare module '*.png';

declare module 'react' {
  interface HTMLAttributes<T> {
    children?: ReactI18NextChild | Iterable<ReactI18NextChild>;
  }
}
