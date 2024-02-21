import { twMerge } from 'tailwind-merge';

type Props = {
  text?: string;
  className?: string;
};

const Button = (props: Props) => {
  return (
    <button
      className={twMerge('py-4 px-12 rounded-full text-white', props.className)}
    >
      {props.text}
    </button>
  );
};

export default Button;
