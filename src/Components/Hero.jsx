// Hero.jsx
import { useMemo } from 'react';
import { useGlobalContext } from '../DarkModeContext';
import { FaInstagram } from 'react-icons/fa6';
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { facilities } from '../facilites';
// import artist from '../assets/artist.svg';
import video from  '../assets/home.mp4';
const Hero = () => {
   // Spring animation for the discount message
   const { isDarkTheme } = useGlobalContext();

  // Memoized spring animation for the discount message
  const discountSpring = useMemo(
    () =>
      useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }, 
        loop: { reverse: true }, // Infinite loop with reverse
      }),
    [isDarkTheme]
  );

  // Memoized spring animation for the button
  const buttonSpring = useMemo(
    () =>
      useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800 }, 
      
      }),
    [isDarkTheme]
  );
  

  return (
    <>
    <div className={`py-4 ${isDarkTheme ? 'bg-gray-800 text-white' : 'bg-Fuchsia-100 text-slate-700'} `}>
        <div className='py-10 mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
          <article>
            <h1 className={`text-5xl tracking-normal font-mono ${isDarkTheme ? 'text-white' : 'text-rose-600'}`}>
              Find love in your reflection.
            </h1>
            <p className={`mt-4 text-3xl font-semibold capitalize tracking-wide ${isDarkTheme ? 'text-gray-300' : 'text-rose-600'}`}>
              Makeover By PriyaSingh
            </p>
            <p className={`mt-2 text-lg capitalize tracking-wide ${isDarkTheme ? 'text-gray-300' : 'text-rose-600'}`}>
              Redefining Elegance
            </p>
            {/* Add discount message */}
            <animated.p
              style={discountSpring}
              className={`mt-4 text-lg capitalize tracking-wide ${isDarkTheme ? 'text-gray-300' : 'text-black'}`}
            >
              Exclusive Offer: Enjoy upto <span className="font-bold text-emerald-500">5% to 10% Discount</span> on our services!
            </animated.p>
            {/* Add a button for more details or to avail the discount */}
            <Link to='/services'>
              <animated.button
                style={buttonSpring}
                className={`mt-6 px-4 py-2 text-lg font-semibold rounded-full ${
                  isDarkTheme ? 'bg-emerald-500 text-white' : 'bg-white text-black'
                } border border-emerald-500 hover:bg-rose-600 focus:outline-none focus:border-emerald-600 transition duration-300`}
              >
                Learn More
              </animated.button>
            </Link>
          </article>
          {/* Video Section */}
          <div className="relative mt-12 overflow-hidden">
            <video
              className="w-full h-auto max-w-full mx-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Facilities Section */}
        <div className={`mt-8 mx-auto max-w-7xl px-8`}>
          <h2 className={`text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-rose-700'}`}>
            Facilities We Provide
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-md hover:shadow-2xl duration-300 ${
                  isDarkTheme ? 'bg-gray-800 text-white' : 'bg-rose-50 text-black'
                }`}
              >
                <div className='p-4'>
                  <h2 className={`text-lg font-semibold ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                    {facility.title}
                  </h2>
                  <p className={`mt-2 text-sm ${isDarkTheme ? 'text-gray-300' : 'text-slate-700'}`}>
                    {facility.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
{/* footer-section */}
  <footer className={`py-4 ${isDarkTheme ? 'bg-slate-950 text-white' : 'bg-rose-300 text-black'}`}>
        <div className='mx-auto max-w-7xl px-8 flex flex-col lg:flex-row justify-between items-center'>
          <div className='mb-8 lg:mb-0 lg:mr-8 '>
            <p className={`text-lg  ${isDarkTheme ? 'text-gray-300' : 'text-black'} `}>Contact us:</p>
            <p>Email:<span className='hover:underline'>Makeupbypanwarpriya@gmail.com</span></p>
            <p>Phone: <a href='tel:+918986779278' className={`hover:underline  ${isDarkTheme ? 'text-gray-300' : 'text-black'}`}>+91 8986779278</a></p>
            <p>Text us: </p>
          </div>

          <div className='mb-8 lg:mb-0'>
            {/* <p className={`mb-6  ${isDarkTheme ? 'text-gray-300' : 'text-black'}`}>Follow us:</p> */}
            <div className='flex'>
              <a href='https://www.instagram.com/makeoverbypriyasingh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' className='mr-4'>
                {/* makeoverbypriyasingh <FaInstagram className='inline' /> */}
              <div class="tooltip-container ml-16">
  <div class="tooltip ">
    <div class="profile">
      <div class="user">
        <div class="img">PS</div>
        <div class="details">
          <div class="name">Follow us</div>
          <div class="username">@makeoverbypriyasingh</div>
        </div>
      </div>
      <div class="about">600+ Followers</div>
    </div>
  </div>
  <div class="text">
    <a class="icon" href="https://www.instagram.com/makeoverbypriyasingh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
      <div class="layer">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="instagramSVG">
          <svg
            fill="white"
            class="svgIcon"
            viewBox="0 0 448 512"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </span>
      </div>
      <div class="text">Instagram</div>
    </a>
  </div>

</div>



              </a>
              <a href='https://api.whatsapp.com/message/6ZHGZRIZHBD6K1?autoload=1&app_absent=0' target='_blank' className={`${isDarkTheme ? 'text-gray-300' : 'text-black'}`}>
        <button className="button2 ml-3">
          {/* WhatsApp */}
     WhatsApp <FaWhatsapp className="inline text-3xl " />
        </button>
      </a>
            </div>
            
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mx-auto max-w-7xl px-8 mt-4 text-center'>
          <p className={`${isDarkTheme ? 'text-gray-300' : 'text-black'} text-sm`}>
            &copy; 2024 Makeover By PriyaSingh. All rights reserved.
          </p>
          <br></br>
          <div className='flex justify-center'>
            <p className={`${isDarkTheme ? 'text-gray-300' : 'text-black'} text-sm flex items-center`}>
              <a href='https://www.instagram.com/_visaal_?igsh=dzdwdmN6MzVhZ3F6' target='_blank' className='flex justify-center'>
                Designed and Developed By: <span className=' hover:text-rose-500'>_visaal_</span> <FaInstagram className='mt-1'/>
              </a>
            </p>
          </div>
        </div>
      </footer>

      </>
  );
};

export default Hero;
