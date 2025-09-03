import experience2 from "../../assets/experience2.jpg";
import experience1 from "../../assets/experience1.jpg";

const ExperienceSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Column */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-600">50</span> Years of Experience
        </h2>
        <p className="text-gray-600">
          Ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
          aut officiis debitis aut rerum saepe eveniet ut et voluptates repudiandae sint et molestiae.
        </p>
        <img
          src={experience1}
          alt="Experience"
          className="rounded-lg"
        />
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        <img
          src={experience2}
          alt="Bridge Construction"
          className="rounded-lg"
        />
        <p className="text-gray-600">
          Ligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
          aut officiis debitis aut rerum saepe eveniet ut et voluptates repudiandae sint et molestiae.
        </p>
        <button className="bg-orange-600 text-white px-6 py-3 font-medium rounded hover:bg-orange-700 transition">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default ExperienceSection;
