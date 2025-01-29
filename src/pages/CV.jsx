import React from 'react';

const CV = () => {
  return (
    <section id="cv" className="bg-teal-50 py-12">
      <h2 className="text-center text-3xl font-semibold text-teal-700 mb-10 underline">cv</h2>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-teal-700 mb-6">Manisha Singh</h3>
        
        <p className="text-gray-700 mb-4"><strong>Email:</strong> msingh82789@gmail.com</p>
        <p className="text-gray-700 mb-4"><strong>Phone:</strong> +91 9549843771</p>
        <p className="text-gray-700 mb-4"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/manisha-884767224/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">linkedin.com/in/manisha-singh-884767224</a></p>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-teal-700 mb-4">Education</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>B.Tech in Information Technology</strong> - IMS Engineering College, Ghaziabad (2021–2025) - CGPA: 8.104</li>
            <li><strong>12th (CBSE)</strong> - Army Public School, Jodhpur (2021) - 81.8%</li>
            <li><strong>10th (CBSE)</strong> - Meerut Public School for Girls, Meerut (2019) - 86.2%</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-teal-700 mb-4">Skills</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Programming: C++</li>
            <li>Database Management: MySQL</li>
            <li>Web Development: HTML, CSS, TailwindCSS, JavaScript, React.js, Bootstrap, Basic PHP</li>
            <li>Tools & Frameworks: GitHub, Apache XAMPP</li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-teal-700 mb-4">Internship Experience</h4>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Full Stack Development Intern</strong> - Acmegrade (Remote)
              <br />
              <span className="italic text-gray-600">Aug 15, 2023 – Oct 15, 2023</span>
              <ul className="list-inside list-disc mt-2">
                <li>Developed and maintained responsive React applications using React 6 and Vite.</li>
                <li>Integrated RESTful APIs and WebSockets for real-time data updates.</li>
                <li>Collaborated in Agile teams and performed code reviews.</li>
              </ul>
            </li>
            <li>
              <strong>Web Developer Intern</strong> - CodeAspire (Noida)
              <br />
              <span className="italic text-gray-600">July 10, 2024 – Sept 2024</span>
              <ul className="list-inside list-disc mt-2">
                <li>Worked with ReactJS and TailwindCSS to develop responsive UIs.</li>
                <li>Enhanced site responsiveness using Bootstrap and custom media queries.</li>
                <li>Utilized React Hooks and Redux for state management and real-time updates.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-teal-700 mb-4">Projects</h4>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>Vakiltalk</strong>
              <p className="italic text-gray-600">A communication platform for lawyers and clients.</p>
              <ul className="list-inside list-disc mt-2">
                <li>Implemented RESTful APIs and WebSocket for real-time messaging.</li>
                <li>Designed responsive UIs using ReactJS and TailwindCSS.</li>
              </ul>
            </li>
            <li>
              <strong>E-Commerce Website</strong>
              <p className="italic text-gray-600">An e-commerce website for vendors and customers.</p>
              <ul className="list-inside list-disc mt-2">
                <li>Developed using HTML, CSS, JavaScript, PHP, and MySQL.</li>
                <li>Implemented shopping cart and checkout functionalities.</li>
              </ul>
            </li>
            <li>
              <strong>Student Management System</strong>
              <p className="italic text-gray-600">A web application for managing students, staff, and courses.</p>
              <ul className="list-inside list-disc mt-2">
                <li>Built with Django, MySQL, and tools like Pillow and Gunicorn.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-xl font-semibold text-teal-700 mb-4">Certifications</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Introduction to Artificial Intelligence (AI) – IBM (via Coursera)</li>
          </ul>
        </div>

        {/* Download CV Button */}
        <div className="text-center mt-6">
          <a 
            href="src/Images/main.pdf" 
            download="Manisha_Singh_CV.pdf" 
            className="inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
