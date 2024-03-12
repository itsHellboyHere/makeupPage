import SectionTitle from '../Components/SectionTitle';
import aboutSvg from '../assets/about.svg';
import { useGlobalContext } from '../DarkModeContext';
import { Link } from 'react-router-dom';
import '../index.css';
const About = () => {
  const { isDarkTheme } = useGlobalContext();

  return (
    <section className={`py-20 ${isDarkTheme ? 'bg-gray-800' : 'bg-Fuchsia-100'}`}>
      <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 md:items-center gap-16'>
        <img src={aboutSvg} className='w-full h-full rounded-xl' alt="About" />

        <article
          className={`rounded-xl shadow-md hover:shadow-2xl duration-300 ${
            isDarkTheme ? 'bg-gray-800 text-white' : 'bg-rose-50 text-black'
          }`}
        >
          <div className='capitalize p-8'>
            <h2 className='text-4xl font-extrabold mb-6 text-primary'>
              Welcome to MakeOver by Priya Singh
            </h2>
            <p className={`mt-4 leading-loose ${isDarkTheme ? 'text-gray-300' : 'text-slate-700'}`}>
              <span className='block mb-4 text-2xl font-semibold text-secondary'>
                Where beauty meets artistry in a seamless blend of passion and skill.
              </span>
              Priya Singh, a renowned makeup artist, brings a touch of magic to every face she graces.
              With an unwavering commitment to enhancing natural beauty and a keen eye for detail, Priya
              transforms her clients into the best version of themselves.

              <span className='block mt-8 text-lg text-accent'>
                Explore the world of Makeup by Priya Singh and let the transformative journey begin.
              </span>
              <span className='block mt-4 text-gray-600'>
                Your beauty, elevated.
              </span>
            </p>
            <div className='flex items-center justify-between mt-8'>
              <Link to='/book'>
             
              {/* <button
  className={`py-2 px-4 rounded-md border-2 border-solid border-transparent transition duration-300 ${
    isDarkTheme
      ? 'bg-gray-600 text-white border-gray-600 hover:border-rose-500 hover:text-gray-300'
      : 'bg-rose-200 text-black border-rose-200 hover:border-rose-500 hover:text-black'
  }`}
>
  Book Now
</button> */}
<button class="btn mr-2">
  BookNow
</button>


               </Link>
 <span className='text-sm text-gray-500'>
                Follow us on social media:
                <a
                  href='https://www.instagram.com/makeoverbypriyasingh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  target='_blank'
                  className={`ml-2 underline hover:text-rose-500 ${
                    isDarkTheme ? 'text-gray-300' : 'text-black'
                  }`}
                >
                  @MakeOverPriya
                </a>
              </span>
              </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
