import Button from '../UI/Button';
import SectionWrapper from '../components/SectionWrapper';
import { GlobalObj } from '../components/shared/consts';
import Header from '../layout/Header';
import TwoColumnLayout from '../layout/TwoColumnLayout';

const Hero = () => {
  const { hero } = GlobalObj;
  return (
    <div className="bg-mobile-hero-image md:bg-desktop-hero-image bg-norepeat bg-center md:bg-bottom bg-Very-Pale-Cyan">
      <SectionWrapper>
        <div>
          <Header />
          <TwoColumnLayout
            textsDiv={
              <div className="max-w-xs flex-1 sm:max-w-md text-center md:text-left">
                <h1 className="text-Very-Dark-Cyan text-xl min-[450px]:text-3xl md:text-4xl">
                  {hero.title}
                </h1>
                <p className="text-Very-Dark-Cyan/80 my-8 text-sm">
                  {hero.desc}
                </p>
                <Button
                  className="bg-Pink shadow-lg hover:opacity-65 tracking-wider md:px-16 text-sm text-nowrap"
                  text={hero.button}
                />
              </div>
            }
            rightDiv={
              <div className="flex-1">
                <img src={hero.img} alt={hero.imgAlt} />
              </div>
            }
          />
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Hero;
