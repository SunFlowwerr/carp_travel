import CareerForm from "./CareerForm";
import { useEffect, useState } from "react";

const Career = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="md:relative">
      <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
        Choose <span className="font-medium uppercase">us</span>
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="w-[179px] text-white self-end mt-[24px] font-extralight text-[14px] tracking-tight text-left leading-6 md:leading-5 md:tracking-normal md:text[13px] md:text-justify md:w-[221px] md:absolute md:top-0 md:right-0 md:mt-0 xl:self-end xl:w-[293px] xl:top-[15px] xl:text-[18px] xl:leading-6">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>
        <div className="mt-[36px] md:mt-[12px] md:w-[221px] md:flex md:justify-left md:flex-col xl:mt-[24px] xl:w-auto">
          <h2 className="text-[30px] leading-[56px] font-thin text-white uppercase tracking-tighter xl:leading-tight xl:text-[36px] ml-[100px] md:ml-0 md:text-end xl:text-justify xl:ml-[147px]">
            Why us ?
          </h2>
          <ul className="w-[181px] self-end md:w-full xl:flex xl:flex-col xl:justify-end">
            <li className="mt-[16px] xl:mt-[21px] xl:flex xl:flex-row xl:gap-[24px] self-end">
              <h3 className="text-[14px] md:text-[16px] text-white font-regular text-right xl:text-[18px]">
                Professional development
              </h3>
              <p className="text-[12px] text-white font-extralight text-right mt-[8px] xl:flex xl:w-[285px] xl:text-left">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </li>
            <li className="mt-[16px] xl:mt-[21px] xl:flex xl:flex-row xl:gap-[24px] self-end">
              <h3 className="text-[14px] md:text-[16px] text-white font-regular text-right xl:text-[18px]">
                Teamwork
              </h3>
              <p className="text-[12px] text-white font-extralight text-right mt-[8px] xl:flex xl:w-[285px] xl:text-left">
                Join our close-knit family, where support and inspiration
                abound.
              </p>
            </li>
            <li className="mt-[16px] xl:mt-[21px] xl:flex xl:flex-row xl:gap-[24px] self-end">
              <h3 className="text-[14px] md:text-[16px] text-white font-regular text-right xl:text-[18px]">
                Stimulating work environment
              </h3>
              <p className="text-[12px] text-white font-extralight text-right mt-[8px] xl:flex xl:w-[285px] xl:text-left">
                Flexibility and remote options for a comfortable experience
              </p>
            </li>
            <li className="mt-[16px] xl:mt-[21px] xl:flex xl:flex-row xl:gap-[24px] self-end">
              <h3 className="text-[14px] md:text-[16px] text-white font-regular text-right xl:text-[18px]">
                Exciting challenges
              </h3>
              <p className="text-[12px] text-white font-extralight text-right mt-[8px] xl:flex xl:w-[285px] xl:text-left">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </li>
          </ul>
        </div>
        {windowWidth >= 768 && <CareerForm></CareerForm>}
      </div>
    </section>
  );
};

export default Career;
