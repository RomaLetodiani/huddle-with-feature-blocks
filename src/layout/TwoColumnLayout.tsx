import { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  textsDiv: ReactElement;
  rightDiv: ReactElement;
  className?: string;
};

const TwoColumnLayout = ({ textsDiv, rightDiv, className }: Props) => {
  return (
    <div
      className={twMerge(
        'flex flex-col justify-between py-8 sm:py-16 gap-10 md:gap-20 items-center md:flex-row',
        className
      )}
    >
      {textsDiv}
      {rightDiv}
    </div>
  );
};

export default TwoColumnLayout;
