import Button from '../UI/Button';
import { GlobalObj } from '../components/shared/consts';

const Header = () => {
  const { header } = GlobalObj;
  const { logo } = GlobalObj;
  return (
    <div className="flex justify-between items-center gap-2 sm:gap-10 pt-12">
      <img className="w-32 sm:w-auto" src={logo} alt="logo" />
      <Button
        className="shadow-lg hover:opacity-70 bg-white font-bold px-6 sm:px-16 py-1 sm:py-3 text-xs sm:text-base text-nowrap text-Very-Dark-Cyan"
        text={header.button}
      />
    </div>
  );
};

export default Header;
