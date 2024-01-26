import React from 'react'
import '../Css/Navigation.css'
import fb from '../Svg/fb.svg'
import linkedin from '../Svg/linkedin.svg'
import youtube from '../Svg/twitter.svg'
import twitter from '../Svg/youtube.svg'

function Navigation() {
  return (
    <div className='mainbox'>
     <div className='subbox-one'>
        <p>Welcome to Advanced Automobile and Technical Training Institute</p>
     </div>
     <div className='subbox-two'>
        <div className="subbox-two-left-box">
        </div>
        <div className="subbox-two-right-box">
            <div className="email">
                <p className='email-p'>Email:</p>
                <p className='email-main'>support@aatti.com</p>
            </div>
            <div className='bar'></div>
            <div className="phone">
                <p className='phone-p'>Phone:</p>
                <p className='phone-main'>+94 716 049 740</p>
            </div>
            <div className='bar'></div>
            <div className="social">
                <img src={fb} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
            </div>
            
        </div>
     </div>
     <div className='subbox-three'></div>
    </div>
  )
}

export default Navigation