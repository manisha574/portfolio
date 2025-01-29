import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="bg-teal-100 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-600 text-center mb-12">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Skills */}
          <motion.div 
            className="bg-white shadow-md rounded-lg p-6" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Programming</h2>
            <ul className="list-none text-gray-700 flex flex-wrap items-center gap-4">
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (1).png" alt="C++" className="w-12 h-12" />
                <span>C++</span>
              </li>
            </ul>
          </motion.div>

          {/* Database Management */}
          <motion.div 
            className="bg-white shadow-md rounded-lg p-6" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Database Management</h2>
            <ul className="list-none text-gray-700 flex flex-wrap items-center gap-4">
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (2).png" alt="MySQL" className="w-12 h-12" />
                <span>MySQL</span>
              </li>
            </ul>
          </motion.div>

          {/* Web Development */}
          <motion.div 
            className="bg-white shadow-md rounded-lg p-6" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h2>
            <ul className="list-none text-gray-700 flex flex-wrap items-center gap-4">
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (5).png" alt="HTML" className="w-12 h-12" />
                <span>HTML</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (6).png" alt="CSS" className="w-12 h-12" />
                <span>CSS</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (7).png" alt="TailwindCSS" className="w-12 h-12" />
                <span>TailwindCSS</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (4).png" alt="JavaScript" className="w-12 h-12" />
                <span>JavaScript</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com.png" alt="React" className="w-12 h-12" />
                <span>React.js</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (8).png" alt="Bootstrap" className="w-12 h-12" />
                <span>Bootstrap</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (9).png" alt="PHP" className="w-12 h-12" />
                <span>Basic PHP</span>
              </li>
            </ul>
          </motion.div>

          {/* Tools & Frameworks */}
          <motion.div 
            className="bg-white shadow-md rounded-lg p-6" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Frameworks</h2>
            <ul className="list-none text-gray-700 flex flex-wrap items-center gap-4">
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (11).png" alt="GitHub" className="w-12 h-12" />
                <span>GitHub</span>
              </li>
              <li className="flex flex-col items-center">
                <img src="src/Images/pngwing.com (10).png" alt="Apache XAMPP" className="w-12 h-12" />
                <span>Apache XAMPP</span>
              </li>
            </ul>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Skills;
