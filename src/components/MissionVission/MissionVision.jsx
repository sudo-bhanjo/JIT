import {
  FaChalkboardTeacher,
  FaBrain,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const missionPoints = [
  {
    icon: <FaChalkboardTeacher size={20} />,
    description:
      "Our mission is to create a new generation of skilled, ethical, and socially responsible engineers by offering accessible, high-quality, and affordable technical education.",
  },
  {
    icon: <FaBrain size={20} />,
    description:
      "We aim to cultivate students' potential through modern training, strong discipline, integrity, real-world exposure and personal growth.",
  },
];

const visionPoints = [
  {
    icon: <FaLightbulb size={20} />,
    description:
      "To emerge as a leading polytechnic college in West Bengal, known for academic excellence, hands-on training, and holistic student development.",
  },
  {
    icon: <FaUsers size={20} />,
    description:
      "We envision building a strong community of engineers who excel not only in their careers but also in their contribution to society and technological advancement.",
  },
];

export default function MissionVision() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Mission Section */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 border-t-4"
          style={{ borderTopColor: "#E87722" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#E87722" }}>
            Our Mission
          </h2>
          {/* <p className="text-gray-600 mb-6">
            We bring the best education with top instructors, flexibility, and affordability.
          </p> */}
          <div className="space-y-4">
            {missionPoints.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-[#f9fbff] p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="mt-1" style={{ color: "#E87722" }}>
                  {item.icon}
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 border-t-4"
          style={{ borderTopColor: "#3c254a" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#3c254a" }}>
            Our Vision
          </h2>
          {/* <p className="text-gray-600 mb-6">
            Our goal is to innovate education and empower individuals to lead, learn, and grow.
          </p> */}
          <div className="space-y-4">
            {visionPoints.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 bg-[#f9fbff] p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="mt-1" style={{ color: "#3c254a" }}>
                  {item.icon}
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
