import React from 'react'
import './App.css'
import facebook from './Userpanel/images/rfacebook.png'
import github from './Userpanel/images/github.png'
import google from './Userpanel/images/google.png'
import logo from './Adminpanel/Images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useEffect,useState } from 'react'




function Login() {

  

  const hideSign = () => {
    const loginMainBox = document.getElementById('main-box-login');
  
    loginMainBox.style.display = "none";
  }
  

  const showSignUp = () =>{
    const signupBox = document.getElementById('main-box-Signup');

    signupBox.style.display = "flex"

    const loginMainBox = document.getElementById('main-box-login');
  
    loginMainBox.style.display = "none";
  }

  const showsign = () =>{
    const signupBox = document.getElementById('main-box-Signup');

    signupBox.style.display = "none"

    const loginMainBox = document.getElementById('main-box-login');
  
    loginMainBox.style.display = "flex";
  }


    useEffect(()=>{
      const signBox = document.getElementById('login-faclose');

      signBox.addEventListener("click",hideSign);

      const registerp = document.getElementById('Register-new-account');

      registerp.addEventListener("click",showSignUp)

      const loginacoount = document.getElementById('Signup-your-account');

      loginacoount.addEventListener("click",showsign)
    
    })

    const [singData ,setSignData] = useState({
      emailaddress : '',
      Passwords : '',
    });


    const submitdetaials = (e) => {

      e.preventDefault();

      setSignData(
        {
          emailaddress : '',
          Passwords : '',
        }
      )

      console.log(singData)

    }


    const getDetailsUser = (e) => {

      const name = e.target.name;

      const values = e.target.value;

      setSignData(()=>{
        return{
          ...singData,[name]:values
        }
      })
      
    }



  return (
    <div className='main-box-login'
    id='main-box-login'>
      <img className='logo-for-social-login' src={logo} alt="" />
      <div className="sub-box-social-login">
      <div className='login-close-button-box'>
      <h4 className='Login-to '>Login to account</h4> 
      <FontAwesomeIcon id='login-faclose' icon={faClose}/> 
      </div>
      <form action="" onSubmit={submitdetaials}>
      <input required name='emailaddress' id='emailaddress' type="email" placeholder='E-mail Address' value={singData.email} onChange={(e)=>{
        getDetailsUser(e)
      }} /> <br />
      <input required name='Passwords' id='Passwords' type="password" placeholder='Password' value={singData.Passwords} onChange={(e)=>{
        getDetailsUser(e)
      }} /> <br />
      <button name='loginbutton' id='loginbutton' type='submit'>Login</button> <span>Forgot Password?</span>
      </form> 
      <p id='paragraph-login'>Or Login With</p>
      <div className="social-login-box">
        <div className="facebook-login">
          <img src={facebook} alt="" />
          <p>Facebook</p>
        </div>
        <div className="Google-login">
          <img src={google} alt="" />
          <p>Google</p>
        </div>
        <div className="github-login">
          <img src={github} alt="" />
          <p>Github</p>
        </div>
      </div>
      <h4 id='Register-new-account'>Register new account</h4>
      </div>
    </div>
  )
}

export default Login