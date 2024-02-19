import React from 'react'
import './App.css'
import facebook from './Userpanel/images/rfacebook.png'
import github from './Userpanel/images/github.png'
import google from './Userpanel/images/google.png'
import logo from './Adminpanel/Images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { useEffect , useState} from 'react'


function Signup() {

  

  const hideSign = () => {
    const SignupMainBox = document.getElementById('main-box-Signup');
  
    SignupMainBox.style.display = "none";
  }
  
  
    useEffect(()=>{
      const signBox = document.getElementById('Signup-faclose');

      signBox.addEventListener("click",hideSign)
    
    })

    const [signupData ,setSignupData] = useState({
      firstName : '',
      lastName : '',
      emailaddress : '',
      Passwords : '',
    })

    const getvaluesUsers = (e) => {
      const name = e.target.name;

      const values = e.target.value;

      setSignupData(()=>{
        return{
          ...signupData,[name]:values
        }
      })

      

    }

    const submitUserDetails = (e) => {
      e.preventDefault();
      console.log(signupData)

      setSignupData({
        firstName : '',
        lastName : '',
        emailaddress : '',
        Passwords : '',
      })
    }

  return (
    <div className='main-box-Signup'
    id='main-box-Signup'>
      <img className='logo-for-social-Signup' src={logo} alt="" />
      <div className="sub-box-social-Signup">
      <div className='Signup-close-button-box'>
      <h4 className='Signup-to '>Signup to account</h4> 
      <FontAwesomeIcon id='Signup-faclose' icon={faClose}/> 
      </div>
      <form action="" onSubmit={(e)=>{
        submitUserDetails(e)
      }}>
      <input required type="text" name='firstName' id='firstName' value={signupData.firstName} onChange={(e)=>{
        getvaluesUsers(e)
      }} placeholder='First name' /><br />
      <input required id='lastName' name='lastName' type="text" value={signupData.lastName} onChange={(e)=>{
        getvaluesUsers(e)
      }} placeholder='Last name' />
      <input required id='emailaddress' name='emailaddress' value={signupData.emailaddress} onChange={(e)=>{
        getvaluesUsers(e)
      }} type="email" placeholder='E-mail Address' /> <br />
      <input required id='Passwords' name='Passwords'  type="password" value={signupData.Passwords} onChange={(e)=>{
        getvaluesUsers(e)
      }} placeholder='Password' /> <br />
      <button id='Signupbutton' type='submit' >Signup</button> <span>Forgot Password?</span>
      </form>
      <p id='paragraph-Signup'>Or Signup With</p>
      <div className="social-Signup-box">
        <div className="facebook-Signup">
          <img src={facebook} alt="" />
          <p>Facebook</p>
        </div>
        <div className="Google-Signup">
          <img src={google} alt="" />
          <p>Google</p>
        </div>
        <div className="github-Signup">
          <img src={github} alt="" />
          <p>Github</p>
        </div>
      </div>
      <h4 id='Signup-your-account'>Login your account</h4>
      </div>
    </div>
  )
}

export default Signup