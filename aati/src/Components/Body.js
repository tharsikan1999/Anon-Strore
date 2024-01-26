// Body.js

import React from 'react';
import leftArrow from '../Svg/left.svg';
import '../Css/Body.css';

function Body() {
  return (
    <div className='main-box bg-gradient-to-r from-black via-transparent to-black bg-cover flex flex-col justify-center px-50 h-642'>
      <p className='main-box-mainpara text-white text-shadow-montserrat text-6xl font-bold leading-tight tracking-wide mb-50'>
        Ignite Your Automotive <br /> Career at <span style={{ color: 'var(--Logo-Red, #BF202F)' }} className='text-logo-red font-extrabold text-7xl'>AATTI</span>

      </p>
      <div className='main-box-subbox-two flex'>
        <p className='flex-1 text-white text-justify font-raleway text-lg mt-10' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo erat. <br /> In auctor felis id libero dictum, nec congue nulla luctus. Fusce convallis velit <br /> at varius rhoncus. Vestibulum tristique semper tortor, non congue elit viverra non.
        </p>
      </div>
      <div className='explore-button  rounded-lg bg-custom-blue flex items-center justify-center my-10 text-white font-semibold cursor-pointer'>
        <p>EXPLORE MORE</p>
        <img src={leftArrow} alt="" />
      </div>
    </div>
  );
}

export default Body;
