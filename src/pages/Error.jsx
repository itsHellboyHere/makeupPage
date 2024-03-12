import { Link, useRouteError } from 'react-router-dom';
import errorimg from '../assets/error.svg';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <section className='flex items-center justify-center h-screen '>
        <div className='text-center'>
          <img src={errorimg} alt='not found' className='mx-auto mb-4' />
          <h3 className='text-3xl text-black font-bold'>Ohh!</h3>
          <p className='text-lg text-black'>We can't seem to find the page you are looking for.</p>
          <Link to='/' className='text-emerald-500 text-xl hover:underline'>Back home</Link>
        </div>
      </section>
    );
  }

  // Additional handling for other error statuses if needed
  return (
    <section className='flex items-center justify-center h-screen bg-emerald-50'>
      <div className='text-center'>
        <h3 className='text-3xl font-bold'>Something went wrong</h3>
      </div>
    </section>
  );
};

export default Error;
