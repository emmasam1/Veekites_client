
// const team = [
//   {
//     name: "Ngozi Nwosu",
//     role: "Environmental Consultant",
//     email: "info@veekites.com",
//     img: "assets/team1.jpg",
//   },
//   {
//     name: "Aisha Bello",
//     role: "Civil Engineering Manager",
//     email: "info@veekites.com",
//     img: "assets/team2.jpg",
//   },
//   {
//     name: "Chinedu Okafor",
//     role: "Project Manager",
//     email: "info@veekites.com",
//     img: "assets/team3.jpg",
//   },
//   {
//     name: "Tunde Adeyemi",
//     role: "Operations Director",
//     email: "info@veekites.com",
//     img: "assets/team4.jpg",
//   },
// ];

// const TeamSection = () => {
//   return (
//     <div className="py-20 max-w-7xl mx-auto px-6">
//       {/* Section Header */}
//       <div className="max-w-3xl mx-auto text-center mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#A02B2D] mb-6">
//           Our Team
//         </h2>
//         <p className="text-gray-600 leading-relaxed text-lg">
//           Our team is our greatest asset. Comprising seasoned professionals and
//           dynamic innovators, our experts bring a wealth of knowledge and a
//           passion for excellence to every project. We believe in fostering a
//           collaborative environment where creativity and expertise thrive,
//           ensuring that our team is always equipped to deliver top-tier
//           solutions. Meet the people who make it all happen and drive our
//           success.
//         </p>
//       </div>

//       {/* Team Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {team.map((member, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
//           >
//             <img
//               src={member.img}
//               alt={member.name}
//               className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-orange-100"
//             />
//             <h3 className="font-semibold text-lg text-gray-800">
//               {member.name}
//             </h3>
//             <p className="text-sm text-orange-600 font-medium">
//               {member.role}
//             </p>
//             <p className="text-sm text-gray-400">{member.email}</p>
//             {/* Social Icons */}
//             <div className="flex justify-center space-x-3 mt-4 text-gray-500">
//               <i className="fab fa-facebook-f hover:text-blue-600"></i>
//               <i className="fab fa-twitter hover:text-sky-500"></i>
//               <i className="fab fa-linkedin-in hover:text-blue-700"></i>
//               <i className="fab fa-instagram hover:text-pink-500"></i>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamSection;

const team = [
  {
    name: "Ngozi Nwosu",
    role: "Environmental Consultant",
    email: "info@veekites.com",
    img: "assets/team1.jpg",
  },
  {
    name: "Aisha Bello",
    role: "Civil Engineering Manager",
    email: "info@veekites.com",
    img: "assets/team2.jpg",
  },
  {
    name: "Chinedu Okafor",
    role: "Project Manager",
    email: "info@veekites.com",
    img: "assets/team3.jpg",
  },
  {
    name: "Tunde Adeyemi",
    role: "Operations Director",
    email: "info@veekites.com",
    img: "assets/team4.jpg",
  },
];

const TeamSection = () => {
  return (
    <div className="py-20 w-11/12 mx-auto">
      {/* Section Header */}
      <div className="mx-auto mb-16 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-left md:text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#A02B2D] mb-6">
          Our Team
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Our team is our greatest asset. Comprising seasoned professionals and
          dynamic innovators, our experts bring a wealth of knowledge and a
          passion for excellence to every project. We believe in fostering a
          collaborative environment where creativity and expertise thrive,
          ensuring that our team is always equipped to deliver top-tier
          solutions. Meet the people who make it all happen and drive our
          success.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#A02B2D]"
            />
            <h3 className="font-semibold text-md text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-[#A02B2D] font-medium">
              {member.role}
            </p>
            <p className="text-sm text-gray-400">{member.email}</p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-3 mt-4 text-gray-500">
              <i className="fab fa-facebook-f hover:text-blue-600"></i>
              <i className="fab fa-twitter hover:text-sky-500"></i>
              <i className="fab fa-linkedin-in hover:text-blue-700"></i>
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;


