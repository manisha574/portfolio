export default function Intro() {
  return (
    <section className="bg-gray-50 py-16 px-8 h-full">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-teal-600 mb-6">Hi, I'm Manisha</h1>
          <p className="text-lg text-gray-700 mb-4">
            I'm a final-year B.Tech student specializing in <span className="font-semibold">Information Technology</span> at IMS Engineering College, Ghaziabad, with a stellar academic record and a CGPA of 8.10. 
            As a web developer, I thrive on creating scalable and responsive applications, blending creativity and technical expertise.
            I am eager to learn more to upskill myself.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="/Images/manisharesume2 (2).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-teal-700 transition duration-300"
            >
              View CV
            </a>
            <a
              href="/Images/manisharesume2 (2).pdf"
              download="Manisha_Singh_CV.pdf"
              className="bg-gray-200 text-teal-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-300 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <img
            src="/Images/IMG-20240629-WA0032[1](1)(1).png"
            alt="Manisha Singh"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-md mx-auto lg:mx-0 "
          />
        </div>
      </div>
    </section>
  );
}
