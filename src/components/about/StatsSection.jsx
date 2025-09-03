import React, { useEffect, useState } from "react";
import { Home, User, Medal, Award } from "lucide-react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { icon: <Home className="w-8 h-8 text-orange-500" />, number: 598, label: "Projects" },
  { icon: <User className="w-8 h-8 text-orange-500" />, number: 128, label: "Clients" },
  { icon: <Medal className="w-8 h-8 text-orange-500" />, number: 114, label: "Success" },
  { icon: <Award className="w-8 h-8 text-orange-500" />, number: 109, label: "Awards" },
];

// 🔹 Counter with framer-motion + in-view trigger
const Counter = ({ end, inView }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [end, inView, count]);

  return <span className="text-4xl font-bold">{display}</span>;
};

const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="bg-[url('assets/stats-bg.jpg')] bg-cover bg-center py-16 relative"
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 text-center text-white relative z-10 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {s.icon}
            <Counter end={s.number} inView={inView} />
            <p className="text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
