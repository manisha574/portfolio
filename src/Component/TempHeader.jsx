import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-gray-100 shadow-md">
      <h1 className="text-5xl font-black text-teal-600">Manisha</h1>
      <nav className="mt-4">
        <ul className="flex gap-4 text-lg ">
          <li>
            <Link
              to="/"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cv"
              className="hover:text-indigo-600 transition-colors duration-300"
            > 
              CV
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="hover:text-indigo-600 transition-colors duration-300"
            >
              Experience
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
