// const features = [
//   {
//     icon: "⭐", // replace with real icon/svg
//     title: "Top Rated",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia odio eum corporis consequatur."
//   },
//   {
//     icon: "🏗️",
//     title: "Best Quality",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia odio eum corporis consequatur."
//   },
//   {
//     icon: "💰",
//     title: "Low Cost",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia odio eum corporis consequatur."
//   }
// ];

// const FeaturesSection = () => {
//   return (
//     <div className="bg-gray-50 py-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center px-6">
//         {features.map((f, i) => (
//           <div key={i} className="flex flex-col items-center space-y-3">
//             <div className="text-5xl">{f.icon}</div>
//             <h3 className="font-semibold text-lg">{f.title}</h3>
//             <p className="text-gray-600 text-sm">{f.desc}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;

import React from "react";
import { Star, Award, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Star className="w-10 h-10 text-orange-500" />,
    title: "Top Rated",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia odio eum corporis consequatur."
  },
  {
    icon: <Award className="w-10 h-10 text-orange-500" />,
    title: "Best Quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia odio eum corporis consequatur."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-orange-500" />,
    title: "Low Cost",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Officia odio eum corporis consequatur."
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center space-y-4">
            {f.icon}
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
