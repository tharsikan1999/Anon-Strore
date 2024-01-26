import React from 'react';
import '../../Css/Home.css';
import Consultation from '../consultation'; 
import imgOne from '../../img/image 2.png'
import imgTwo from '../../img/image 1.png'
import background from '../../img/background.png'

function Home() {
  return (
    <section>
      <div className="home-main">
        <img src={background} id='mainImg' alt="" />
          <div className="main-heading">
          <h1 className='original-h1'>We crush your <br/> competitors, goals, and <br/> sales records - without <br/> the B.S.</h1>
          <h1 className='clone-h1'> We crush your  competitors, goals, and sales records - without the B.S.</h1>
          <Consultation />
        </div>   
    </div>
    <div className='home-content'>
      <div className="sub-box-one">
        <img src={imgOne} alt="" id='imgOne' />
        <div className="web-app">
          <h6>Web & Mobile App Development</h6>
          <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <div className="learn-more">
          LEARN MORE
          </div>
        </div>
      </div>
      <div className="sub-box-two">
        
        <div className="web-app">
          <h6>Web & Mobile App Development</h6>
          <p>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
          <div className="learn-more">
          LEARN MORE
          </div>
        </div>
        <img src={imgTwo} alt="" id='imgTwo' />
      </div>
    </div>
    </section>
  );
}

export default Home;
