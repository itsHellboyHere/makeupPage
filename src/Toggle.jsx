// ThemeToggle.js

import { useGlobalContext } from './DarkModeContext';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section>
      <button
        onClick={toggleDarkTheme}
        className="text-white focus:outline-none hover:text-gray-300"
      >
        {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill className='text-yellow-500 h-6'/>}
      </button>
    </section>
  );
};

export default ThemeToggle;
