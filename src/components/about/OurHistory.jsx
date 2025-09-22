import historyImg from "../../assets/historyImg.jpg";

const events = [
  {
    year: "2012 -2016",
    small: "History of the Museum",
    title: "VEEKITES AS AN INDIGENOUS COMPANY",
    desc: "As a proudly indigenous company, VEEKITES GLOBAL SERVICE LIMITED  is recognized as one of the fastest-growing companies in the industry, VEEKITES GLOBAL SERVICE LIMITED specializes in a wide range of services, including architectural design, construction of buildings, roads, bridges, and dams.",
    img: historyImg,
  },
  {
    year: "2018 - 2020",
    small: "Always in",
    title: "VEEKITES AS SERVICE PROVIDERS",
    desc: "We provide a range of services, including electrical installations, water borehole drilling and distribution, estate development, landscaping, horticultural design, project management, general contracting, and supply services. Our commitment to excellence motivates us to deliver outstanding results for every project we undertake.",
    img: historyImg,
  },
  {
    year: "2020 - 2024",
    small: "Milestones & more",
    title: "VEEKITES RECOGNIZED FOR PRECISION AND EFFICIENCY",
    desc: "Drawing on our extensive experience and technical expertise, as well as our deep understanding of local working conditions, VEEKITES GLOBAL SERVICE LIMITED is dedicated to ensuring the successful execution of our clients' projects, even under tight deadlines. We adopt a cost-effective approach to project management, whether we are operating independently or in collaboration with our carefully selected overseas partners. Our project personnel are chosen based on their hands-on experience and suitability for the specific tasks at hand.",
    img: historyImg,
  },
];

export default function OurHistory() {
  return (
    <section className="w-full text-gray-700">
      {/* Hero banner */}
      <div
        className="w-full h-44 md:h-64 bg-center bg-cover relative"
        style={{ backgroundImage: `url(${historyImg})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-white/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-[#A02B2D] text-xl md:text-2xl tracking-widest font-bold uppercase">
            OUR HISTORY
          </h2>
        </div>
      </div>

      {/* Timeline container */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12 relative">
        {/* Center vertical line (only on md+) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200" />

        {/* Intro / Title centered above timeline */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 uppercase">About our history</p>
          <h3 className="text-lg md:text-2xl tracking-widest my-3 leading-tight font-bold">
            TIMELINE
          </h3>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            VEEKITES GLOBAL SERVICE LIMITED was established on June 11, 2013,
            with a primary focus on delivering high-quality engineering services
            and general contracting solutions.
          </p>
        </div>

        {/* Timeline items */}
        <div className="flex flex-col space-y-12">
          {events.map((ev, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={ev.title}
                className={`relative flex flex-col md:flex-row items-center md:items-stretch md:justify-between ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot + Year (center) (visible md+) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 flex-col items-center">
                  <span className="text-xs text-gray-500 mb-2">{ev.year}</span>
                  <div className="w-3 h-3 rounded-full bg-white border border-gray-300 z-10" />
                </div>

                {/* Left (image or text depending on order on md) */}
                <div className="w-full md:w-5/12 px-3 md:px-6 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-64 md:h-72 object-cover"
                    />
                  </div>
                </div>

                {/* Right (text block) */}
                <div className="w-full md:w-5/12 px-3 md:px-6 flex items-center">
                  <div className="max-w-[36rem]">
                    <p className="text-sm text-gray-400 mb-2">{ev.small}</p>
                    <h4 className="text-lg tracking-wide mb-4 leading-tight font-bold">
                      {ev.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {ev.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
