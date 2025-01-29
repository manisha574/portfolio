const Header = () => {
  return (
    <header className="p-4 bg-gray-100 shadow-md">
      <h1 className="text-5xl font-black text-teal-600">Manisha</h1>
      <nav className="mt-4">
        <ul className="flex gap-4 text-lg ">
          <li>
            <a
              href="/"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/cv"
              className="hover:text-indigo-600 transition-colors duration-300"
            > 
              CV
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="/experience"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
