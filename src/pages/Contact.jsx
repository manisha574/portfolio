import React from 'react';
import Header from '../Component/TempHeader';

const Contact = () => {
  return (
    <section id="contact" className="bg-teal-50  h-screen">
        <Header/>
      <h2 className="text-center text-3xl font-semibold text-teal-700 mb-10 underline py-12 ">Contact</h2>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-teal-700 mb-6">Get in Touch</h3>

        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center">
            <span className="text-teal-600 text-xl mr-4">📧</span>
            <a href="mailto:msingh82789@gmail.com" className="text-teal-600 text-lg font-semibold hover:underline">
              msingh82789@gmail.com
            </a>
          </div>

          {/* Phone Number */}
          <div className="flex items-center">
            <span className="text-teal-600 text-xl mr-4">📱</span>
            <a href="tel:+918176253321" className="text-teal-600 text-lg font-semibold hover:underline">
              +91 9549843771
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center">
            <span className="text-teal-600 text-xl mr-4">🔗</span>
            <a href="https://www.linkedin.com/in/manisha-singh-884767224" target="_blank" rel="noopener noreferrer" className="text-teal-600 text-lg font-semibold hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
