// Footer.js

import React from 'react';
import logo from '../img/Logo.png'
import "../Css/Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="  " style={{backgroundColor:'#6B3CC9',color:"#fff",paddingTop:"10px"}}>
    
      <section className="main-footer">
        <div className=" text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <Link to='/'  className="text-reset">
            <img src={logo} alt="" id='logoFooter' />
                </Link>
              
              <p>
              Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
              Our Technologies
              </h5>
              <p>
                <a href="#!" className="text-reset">ReactJS</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Gatsby</a>
              </p>
              <p>
                <a href="#!" className="text-reset">NextJS</a>
              </p>
              <p>
                <a href="#!" className="text-reset">NodeJS</a>
              </p>
              <p>
                <a href="#!" className="text-reset">GraphQL</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Laravel</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h5 className="text-uppercase fw-bold mb-4">
              Our Services
              </h5>
              <p> 
                <Link to='service'  className="text-reset">
                  Social media Marketing
                </Link>
              </p>
              <p>
                <Link to='service'  className="text-reset">
                   Web & Mobile App Development
                </Link>
              </p>
              <p>
                <Link to='service'  className="text-reset">
                   Data & Analytics
                </Link>
              </p>
              <p>
                <Link to='service'  className="text-reset">
                   Google Marketing solutions
                </Link>
              </p>
              <p>
  
                <Link to='service'  className="text-reset">
                   Search Engine Optimization
                </Link>
              </p>
            </div>

            
          </div>
        </div>
      </section>

     <div className="policy">
      <div className="sub-policy-terms">
         <Link to='privacy'  className="text-reset">
             <p>Privacy Policy</p>
          </Link>
        
        <span>|</span>
        <Link to='terms'  className="text-reset">
              <p>Terms & Conditions</p>
        </Link>
        
      </div>
     </div>
    </footer>
  );
}

export default Footer;
