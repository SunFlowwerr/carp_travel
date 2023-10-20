import "../app/globals.css";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-col justify-between mr-6 md:w-full md:mr-0 md:relative">
        <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
          Who <span className="font-medium uppercase">we are </span>
        </h1>
        <div className="flex flex-col-reverse md:w-full xl:flex-row xl:gap-[25px]">
          <p className="text-sm mt-[40px] w-full text-white font-extralight text-left md:text-base md:w-[463px] md:self-end md:mt-[509px] xl:text-lg xl:leading-6 xl:mt-[424px] xl:w-[605px]">
            <span className="font-normal">We use methods </span>that are
            time-tested and proven. Our expert guides with in-depth knowledge of
            the Carpathian landscapes lead you safely through the mysteries of
            these mountains.
          </p>
          <div className="flex flex-col w-auto md:flex-row-reverse md:justify-between md:absolute md:top-0 md:w-full xl:flex-row xl:top-[16px] xl:right-0 xl:w-auto xl:gap-[14px] xl:h-[98%]">
            <div className="flex flex-col w-[180px] mt-4 gap-y-5 md:w-[220px] md:mt-0 xl:w-[292px] xl:gap-y-6">
              <p className="text-sm text-white font-extralight text-left md:text-base xl:text-lg xl:leading-6">
                <span className="font-normal">a team of enthusiasts </span>who
                are fully committed to the mission of creating unforgettable and
                extraordinary trips to the most beautiful parts of the
                Carpathians. Our goal is not just to show you the natural
                wonders of the mountains, but to provide you with a deep
                immersion in their magical atmosphere.
              </p>
              <p className="text-sm text-white font-extralight text-left md:text-base xl:text-lg xl:leading-6">
                <span className="font-normal">We believe </span>that nature has
                the power to inspire, strengthen character and provide new
                perspectives. Therefore, each of our tours is aimed at unlocking
                your potential, enriching your spiritual world and creating
                unforgettable memories.
              </p>
            </div>
            <div className="w-[184px] flex flex-col self-end mt-[40px] md:w-[221px] md:self-end xl:w-[292px]">
              <p className="text-sm text-white font-normal text-left uppercase md:text-base xl:text-lg leading-6">
                From vacationers
              </p>
              <p className="text-sm text-white font-normal text-left uppercase self-end md:text-base xl:text-lg leading-6">
                to active travelers
              </p>
              <p className="text-sm text-white font-extralight text-left xl:text-lg md:text-base leading-6">
                we have a tour for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
