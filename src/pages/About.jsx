import Header from "../Component/TempHeader";

export default function About() {
  return (
    <section>
      <Header />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 py-16 px-8">
        {/* Left Section */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl font-bold text-teal-600 mb-6">Hi, I'm Manisha</h1>
          <p className="text-lg text-gray-700 mb-4">
            I'm a final-year B.Tech student specializing in <span className="font-semibold">Information Technology</span> at IMS Engineering College, Ghaziabad, with a stellar academic record and a CGPA of 8.10 (76%).
            As a web developer, I thrive on creating scalable and responsive applications, blending creativity and technical expertise.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With hands-on experience as a Full Stack and Web Development Intern, I have honed my skills in <span className="font-semibold">React.js, TailwindCSS, and MySQL</span>.
            I’ve built dynamic UIs, integrated RESTful APIs, and collaborated in Agile environments to deliver impactful projects.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            My projects, like <span className="font-semibold">Vakiltalk</span>, a real-time communication platform, and an <span className="font-semibold">E-Commerce Website</span>, demonstrate my ability to develop complete, user-friendly applications.
            {/* Beyond coding, I enjoy exploring cutting-edge technologies like <span className="font-semibold">blockchain</span> and <span className="font-semibold">cryptography</span>. */}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <a
              href="mailto:msingh82789@gmail.com"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-teal-700 transition duration-300"
            >
              Email Me
            </a>
            <a
              href="https://github.com/manisha574"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-teal-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-300 transition duration-300"
            >
              GitHub Profile
            </a>
            <a
              href="https://www.linkedin.com/in/manisha-884767224/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-teal-600 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-gray-300 transition duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-8">
          <img
            src="/Images/IMG-20240629-WA0032[1](1)(1).png"
            alt="Manisha Singh"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-md mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
}
