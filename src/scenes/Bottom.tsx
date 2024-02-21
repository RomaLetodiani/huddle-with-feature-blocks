import Button from '../UI/Button';
import { GlobalObj } from '../components/shared/consts';

const Bottom = () => {
  const { bottom } = GlobalObj;
  return (
    <div className="w-full sm:w-max shadow-[0_0_30px_0px_#22222229] absolute -bottom-[5%] left-1/2 -translate-x-1/2 rounded-3xl flex flex-col justify-center items-center gap-5 p-10 sm:p-20 bg-white">
      <p className="text-center text-2xl">{bottom.title}</p>
      <Button className="bg-Pink hover:opacity-80" text={bottom.button} />
    </div>
  );
};

export default Bottom;
