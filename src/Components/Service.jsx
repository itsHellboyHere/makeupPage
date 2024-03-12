import { useGlobalContext } from '../DarkModeContext';

const Service = ({ title, text, img, price }) => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <article
      className={`rounded-lg shadow-md hover:shadow-2xl duration-300 ${
        isDarkTheme ? 'bg-gray-800 text-white' : 'bg-rose-50 text-black'
      }`}
    >
      <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
      <div className='capitalize p-8'>
        <h2 className={`text-xl tracking-wide font-medium ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          {title}
        </h2>
        <p className={`mt-2 text-lg ${isDarkTheme ? 'text-gray-300' : 'text-slate-700'}`}>
          {text}
        </p>
        {/* Price section */}
        <div className={`mt-4 text-2xl font-semibold ${isDarkTheme ? 'text-emerald-500' : 'text-emerald-600'}`}>
           ₹{price}
        </div>
      </div>
    </article>
  );
};

export default Service;
