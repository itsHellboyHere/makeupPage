import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import ThemeToggle from '../Toggle';
import { useGlobalContext } from '../DarkModeContext';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkTheme } = useGlobalContext();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic classes based on dark mode state
  const navbarClasses = `bg-${isDarkTheme ? 'gray-800 border-b border-white ' : 'emerald-200 border-b border-black'} ${
    isScrolled ? 'fixed top-0 left-0 right-0 shadow-md z-10 ' : `bg-${isDarkTheme ? 'gray-800 border-b border-white ' : 'emerald-200 border-b border-black'}`
  }`;
//   const navbarClasses = `bg-emerald-100 border-b border-${isDarkTheme ? 'white bg-gray-800' : 'black'} ${
//   isScrolled ? 'fixed top-0 left-0 right-0 shadow-md' : ''
// }`;


  // Dynamic text color based on dark mode state
  const linkTextClasses = `  text- ${isDarkTheme ? 'white' : 'black'}`;

  return (
    <nav className={navbarClasses}>
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-wrap items-center ">
          <div className="flex-shrink-0 flex items-center">
          <img className="h-20 w-28 " src={logo} alt="Logo" />
        </div>

        <div className="flex gap-x-3">
  <NavLink to="/" className={`hover:text-fuchsia-700 ${linkTextClasses}`} activeClassName="text-fuchsia-700 font-bold">
    Home
  </NavLink>
  <NavLink to="/services" className={`hover:text-fuchsia-700 ${linkTextClasses}`} activeClassName="text-fuchsia-700 font-bold">
    Services
  </NavLink>
  <NavLink to="/about" className={`hover:text-fuchsia-700 ${linkTextClasses}`} activeClassName="text-fuchsia-700 font-bold">
    About
  </NavLink>
  <NavLink to="/gallery" className={`hover:text-fuchsia-700 ${linkTextClasses}`} activeClassName="text-fuchsia-700 font-bold">
    Gallery
  </NavLink>
  <NavLink to="/book" className={`hover:text-fuchsia-700 ${linkTextClasses}`} activeClassName="text-fuchsia-700 font-bold">
    Book
  </NavLink>
  <ThemeToggle />
</div>

      </div>
    </nav>
  );
};

export default NavBar;
