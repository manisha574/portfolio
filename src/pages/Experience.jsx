import Header from "../Component/TempHeader";
import React from 'react'



const Experience = () => {

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "CodeAspire (Noida)",
      duration: "July 10, 2024 – Sept 2024",
      responsibilities: [
        "Developed and maintained responsive React applications using React 6 and Vite.",
        "Integrated RESTful APIs and WebSockets for real-time data updates.",
        "Utilized React Hooks (useState, useEffect, useContext) and Redux for state management.",
        "Enhanced responsiveness using Bootstrap, TailwindCSS, and custom media queries.",
        "Collaborated in Agile teams, performed code reviews, and managed versions with Git.",
      ],
    },
    {
        title: "Full Stack Development Intern",
        company: "Acmegrade (Remote)",
        duration: "Aug 15, 2023 – Oct 15, 2023",
        responsibilities: [
          "Worked on developing an E-commerce website using PHP.",
          "Designed and implemented dynamic web pages with HTML, CSS, and JavaScript.",
          "Managed MySQL databases for product listings and user authentication.",
          "Integrated payment gateways and user authentication features.",
        ],
      },
  ];

  return (
    <section className="bg-gray-50 min-h-screen ">
      <Header />
      <div className="max-w-6xl mx-auto text-center py-16 px-8 ">
        <h1 className="text-5xl font-bold text-teal-600 mb-8">Experience</h1>
        <p className="text-lg text-gray-700 mb-12">
          Here’s a look at my professional journey and the skills I honed during my internships.
        </p>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-teal-700">{exp.title}</h2>
              <p className="text-gray-600 text-lg font-medium">{exp.company}</p>
              <p className="text-gray-500 mb-4">{exp.duration}</p>
              <ul className="text-gray-700 list-disc list-inside">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Experience;
