// Home.jsx

import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { useGlobalContext } from '../DarkModeContext';
import '../index.css';
const Home = () => {
  const navigation = useNavigation();
  const { isDarkTheme } = useGlobalContext();

  const isPageLoading = navigation.state === 'loading';

  return (
    <>
      <NavBar />
      <section className={`bg-${isDarkTheme ? 'gray-800' : 'bg-fuchsia-200'} min-h-screen`}>
        {isPageLoading ? <div>Loading</div> : <Outlet />}
      </section>
    </>
  );
};

export default Home;
