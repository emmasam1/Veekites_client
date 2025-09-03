import React from "react";

const team = [
  {
    name: "Jonathan Scott",
    role: "CEO & Architect",
    email: "info@example.com",
    img: "assets/team1.jpg"
  },
  {
    name: "Benjamin Austin",
    role: "Chief Engineer",
    email: "info@example.com",
    img: "assets/team2.jpg"
  },
  {
    name: "John Oliver",
    role: "Project Manager",
    email: "info@example.com",
    img: "assets/team3.jpg"
  },
  {
    name: "Philip Alvarez",
    role: "Finances",
    email: "info@example.com",
    img: "assets/team4.jpg"
  }
];

const TeamSection = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-center text-2xl font-bold text-orange-600 mb-12">Our Team</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-6 text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-sm text-gray-400">{member.email}</p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-3 mt-3 text-blue-600">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
