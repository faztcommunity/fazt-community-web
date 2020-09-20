/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module 'react-scroll-section' {
  const content: any;
  export default content;
}
