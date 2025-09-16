   import { Link } from "react-router";

const features = [
  {
    id: "01",
    title: "Quality Assurance",
    desc:
      "Every vase in our collection is carefully curated to ensure the highest quality standards.",
  },
  {
    id: "02",
    title: "Exclusive Designs",
    desc:
      "We work closely with talented ceramic artists to bring you exclusive and one-of-a-kind designs.",
  },
  {
    id: "03",
    title: "Ease of Cleaning",
    desc:
      "Ceramic vases are relatively easy to clean. You can simply wash them with mild soap.",
  },
];

export default function SetApart() {
  return (
    <section className="w-full bg-gray-100 py-16">
      {/* Inner white card */}
      <div className="max-w-6xl mx-auto bg-white px-6 md:px-12 py-12 md:py-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-lg md:text-2xl font-bold text-black mb-6">
            What Sets Us Apart?
          </h2>
          <p className="text-sm text-gray-500">
            At [Your Ceramic Vases Website Name], we take pride in offering more than just products; we
            offer an experience. Here’s what makes us unique:
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {features.map((f, i) => (
            <article
              key={f.id}
              className="relative bg-white p-6 md:p-8 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Number badge */}
              <div className="flex md:block justify-center md:justify-start">
                <div className="relative">
                  {/* pastel circle behind */}
                  <span
                    aria-hidden
                    className={`absolute -top-3 -left-3 w-9 h-9 rounded-full ${
                      i === 0 ? "bg-indigo-100" : i === 1 ? "bg-pink-100" : "bg-yellow-100"
                    } opacity-80`}
                  />
                  {/* small lighter halo */}
                  <span
                    aria-hidden
                    className={`absolute -top-5 -left-5 w-14 h-14 rounded-full opacity-30 ${
                      i === 0 ? "bg-indigo-100" : i === 1 ? "bg-pink-100" : "bg-yellow-100"
                    }`}
                  />
                  {/* number itself */}
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-100">
                    <span className="text-sm font-bold text-gray-800">{f.id}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 md:mt-4 text-center md:text-left">
                <h3 className="text-base font-semibold text-gray-900 mb-6">{f.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{f.desc}</p>

              <Link
                to="/our-services"
                className="inline-flex items-center leading text-sm text-gray-700 hover:text-gray-900 font-bold"
                >
                Learn more
                <svg
                    className="ml-2 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </Link>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
