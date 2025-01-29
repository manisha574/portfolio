import React from 'react';

const Project = () => {
  return (
    <section id="projects" className= " py-12">
      <h2 className="text-center text-3xl font-semibold text-teal-700 mb-10">Projects</h2>

      <div className="space-y-8 mx-11">
        {/* Vakiltalk Project */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-600">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Vakiltalk</h3>
          <p className="text-teal-600"><strong>Technologies:</strong> ReactJS, TailwindCSS, RESTful APIs, WebSocket</p>
          <p className="text-gray-700 mt-2">
            Vakiltalk is a communication platform designed to connect lawyers and clients with real-time messaging features. It allows seamless interaction with dynamic, scalable components powered by ReactJS.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Implemented RESTful APIs and WebSocket for real-time communication.</li>
            <li>Designed responsive UIs using ReactJS and TailwindCSS.</li>
            <li>Utilized React Hooks for state management and component scalability.</li>
            <li>Collaborated using GitHub for version control and backend integration.</li>
          </ul>
        </div>

        {/* E-Commerce Website Project */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-600">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">E-Commerce Website</h3>
          <p className="text-teal-600"><strong>Technologies:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
          <p className="text-gray-700 mt-2">
            This project involves the development of an E-commerce platform where vendors can add products and customers can shop, manage carts, and complete purchases. The website is designed to be user-friendly and efficient.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Vendor product management.</li>
            <li>Shopping cart and checkout functionalities.</li>
            <li>Responsive and user-friendly design.</li>
          </ul>
        </div>

        {/* Student Management System Project */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-600">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">Student Management System</h3>
          <p className="text-teal-600"><strong>Technologies:</strong> Django, MySQL, Pillow, Gunicorn, Whitenoise</p>
          <p className="text-gray-700 mt-2">
            A web application built using Django for managing students, staff, courses, and attendance. Integrated MySQL for the database and additional tools for deployment and static file management.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Student and staff management.</li>
            <li>Course and attendance tracking.</li>
            <li>Deployment using Gunicorn and static file management with Whitenoise.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;
