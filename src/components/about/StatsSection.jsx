import React from "react";
import { Home, User, Medal, Award } from "lucide-react";

const stats = [
  { icon: <Home className="w-8 h-8 text-orange-500" />, number: 598, label: "Projects" },
  { icon: <User className="w-8 h-8 text-orange-500" />, number: 128, label: "Clients" },
  { icon: <Medal className="w-8 h-8 text-orange-500" />, number: 114, label: "Success" },
  { icon: <Award className="w-8 h-8 text-orange-500" />, number: 109, label: "Awards" }
];

const StatsSection = () => {
  return (
    <div
      className="bg-[url('assets/stats-bg.jpg')] bg-cover bg-center py-16 relative"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center text-white relative z-10 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            {s.icon}
            <h3 className="text-3xl font-bold">{s.number}</h3>
            <p className="text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
