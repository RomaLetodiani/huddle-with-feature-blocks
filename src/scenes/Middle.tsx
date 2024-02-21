import { twMerge } from 'tailwind-merge';
import SectionWrapper from '../components/SectionWrapper';
import { GlobalObj } from '../components/shared/consts';
import TwoColumnLayout from '../layout/TwoColumnLayout';
import Bottom from './Bottom';

const Middle = () => {
  const { middle } = GlobalObj;
  return (
    <SectionWrapper>
      <div className="mt-28 relative pb-72 flex flex-col justify-center items-center gap-10">
        <Bottom />
        {middle.map((section, index) => (
          <TwoColumnLayout
            key={index}
            className={twMerge(
              'px-10 sm:px-20 shadow-[0_0_25px_-10px_rgba(0,0,0,0.3)] rounded-xl flex-col-reverse',
              index === 1 && 'lg:flex-row-reverse'
            )}
            textsDiv={
              <div className="max-w-xs flex-1 sm:max-w-md sm:min-w-72 text-center md:text-left">
                <h1 className="text-Very-Dark-Cyan text-xl min-[450px]:text-3xl md:text-4xl">
                  {section.title}
                </h1>
                <p className="text-Very-Dark-Cyan/80 my-8 text-sm">
                  {section.desc}
                </p>
              </div>
            }
            rightDiv={
              <div className="max-w-[450px] min-w-52">
                <img
                  className="w-full h-full"
                  src={section.img}
                  alt={section.title}
                />
              </div>
            }
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Middle;
