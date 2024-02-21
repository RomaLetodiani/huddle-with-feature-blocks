import SectionWrapper from '../components/SectionWrapper';
import { GlobalObj } from '../components/shared/consts';

const Footer = () => {
  const { footer, socials, logo } = GlobalObj;
  return (
    <div className="pb-20 pt-56 text-white bg-Very-Dark-Cyan">
      <SectionWrapper>
        <img className="invert brightness-0 mb-10" src={logo} alt="logo" />
        <div className="flex flex-wrap gap-20 justify-center md:justify-between">
          <ul className="flex flex-col gap-10">
            {footer.left.map((item, index) => (
              <li className="flex items-center gap-3" key={index}>
                <img src={item.icon} alt={item.alt} />
                {item.text}
              </li>
            ))}
          </ul>
          {footer.middle.map((item, index) => (
            <div key={index} className="flex flex-col ">
              <ul className="flex flex-col gap-5">
                {item.map((item, index) => (
                  <li key={index}>
                    <a className="cursor-pointer hover:underline" href="/">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-10 items-center lg:items-start justify-between">
            <div className="flex gap-3">
              {socials.map((item, index) => (
                <a key={index} href={item.link}>
                  <div className="cursor-pointer border border-white rounded-full p-3">
                    <img
                      className="invert brightness-0 w-6 h-6"
                      src={item.icon}
                      alt={item.alt}
                    />
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs md:text-sm">{footer.copyright}</p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Footer;
