// import beign from "../../assets/beign.jpg"; // Replace with any nice background image

// const WhyVeekites = () => {
//   return (
//     <div
//       className="relative bg-center bg-cover bg-fixed"
//       style={{ backgroundImage: `url(${beign})` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto px-6 py-20 text-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e62a2d]">
//           What Sets Veekites Apart
//         </h2>
//         <p className="text-center text-lg md:text-xl leading-relaxed text-gray-100 sm:text-left">
//           What distinguishes Veekites is our holistic approach to solving
//           complex challenges. We bring together a diverse team of experts from
//           various disciplines, ensuring that we approach each project with fresh
//           perspectives and tailored solutions. Our commitment to sustainability,
//           combined with our innovative technologies, allows us to deliver
//           projects that not only meet today’s needs but also anticipate
//           tomorrow’s challenges. We’re more than just a service
//           provider—we’re a partner dedicated to your success.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WhyVeekites;

import beign from "../../assets/beign.jpg"; // Replace with any nice background image

const WhyVeekites = () => {
  return (
    <div
      className="relative bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${beign})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative mx-auto px-6 py-20 text-white max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
        <h2 className="text-left md:text-center text-3xl md:text-4xl font-bold mb-6 text-[#e62a2d]">
          What Sets Veekites Apart
        </h2>
        <p className="text-left md:text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-100">
          What distinguishes Veekites is our holistic approach to solving
          complex challenges. We bring together a diverse team of experts from
          various disciplines, ensuring that we approach each project with fresh
          perspectives and tailored solutions. Our commitment to sustainability,
          combined with our innovative technologies, allows us to deliver
          projects that not only meet today’s needs but also anticipate
          tomorrow’s challenges. We’re more than just a service
          provider—we’re a partner dedicated to your success.
        </p>
      </div>
    </div>
  );
};

export default WhyVeekites;
