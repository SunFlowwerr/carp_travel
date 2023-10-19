import "../app/globals.css";

const About = () => {
  return (
    <section
      id="about-section"
      className="p-6 flex flex-row"
      style={{ height: 664 }}
    >
      <div
        className="flex flex-col justify-between mr-6"
        style={{ height: "100%", width: 609 }}
      >
        <h1 className="leading-tight font-thin text-white uppercase tracking-tighter">
          Who <span className="font-medium uppercase">we are </span>
        </h1>
        <p
          className="text-white font-extralight text-lg text-left leading-6"
          style={{ width: 605 }}
        >
          <span className="font-normal">We use methods </span>that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
      <div
        className="flex flex-col mt-4 gap-y-6 "
        style={{ height: "100%", width: 292 }}
      >
        <p className="text-white font-extralight text-lg text-left leading-6">
          <span className="font-normal">a team of enthusiasts </span>who are
          fully committed to the mission of creating unforgettable and
          extraordinary trips to the most beautiful parts of the Carpathians.
          Our goal is not just to show you the natural wonders of the mountains,
          but to provide you with a deep immersion in their magical atmosphere.
        </p>
        <p className="text-white font-extralight text-lg text-left leading-6">
          <span className="font-normal">We believe </span>that nature has the
          power to inspire, strengthen character and provide new perspectives.
          Therefore, each of our tours is aimed at unlocking your potential,
          enriching your spiritual world and creating unforgettable memories.
        </p>
      </div>
      <div className="flex flex-col self-end" style={{ width: 296 }}>
        <p className="text-white font-normal text-lg text-left leading-6 uppercase">
          From vacationers
        </p>
        <p className="text-white font-normal text-lg text-left leading-6 uppercase self-end">
          to active travelers
        </p>
        <p className="text-white font-extralight text-lg text-left leading-6">
          we have a tour for everyone.
        </p>
      </div>
    </section>
  );
};

export default About;
