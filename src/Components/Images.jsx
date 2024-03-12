import { images } from '../data';
import SectionTitle from './SectionTitle';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../DarkModeContext';

const Images = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <section className={`py-20 mx-auto max-w-7xl px-8 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
      <SectionTitle text="Photo-Section" />
      <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
        {images.map((item) => (
          <motion.div
            key={item.id}
            className={`group ${isDarkTheme ? 'text-white' : 'text-black'} overflow-hidden rounded-md shadow-md`}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden w-full h-72">
              <img
                className="object-cover w-full h-full"
                src={item.url}
                alt="gallery"
              />
            </div>
            <div className={`p-4 ${isDarkTheme ? 'bg-white text-white' : 'bg-rose-100 text-black'}`}>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Images;
