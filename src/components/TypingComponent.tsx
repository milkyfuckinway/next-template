'use client';

import { TypeAnimation } from 'react-type-animation';

type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>);
type Sequence = Array<SequenceElement>;

function TypingComponent({ sequence }: { sequence: Sequence }) {
  return (
    <TypeAnimation
      preRenderFirstString
      sequence={sequence}
      speed={50}
      style={{ fontSize: '2em' }}
      repeat={Infinity}
    />
  );
}

export default TypingComponent;
