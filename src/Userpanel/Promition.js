import React from 'react'
import send from './images/send.png'
import './User.css'
import { useState } from 'react'

function Promition() {

    const [inputData,setInputData] = useState("");

    const getvaluesUser = (e) => {
    setInputData(e.target.value)
    }

    const getFinalValue = (e) => {
        e.preventDefault()
        setInputData(" ")
        console.log(inputData)
    }
        
    
  return (
    <div className='promotion-main-box'>
        <div className="box-one-promotion">
            <img src={send} alt="Paper-Plane" />
            <h2> Stay up to date</h2>
        </div>
        <div className="box-two-promotion">
            <p>Register now to get updates on promotions and coupons.</p>
        </div>
        <div className="box-three-promotion">
            <form action="" onSubmit={(e)=>{
                getFinalValue(e)
            }}>
            <input required type="email" id='promotionemail' onChange={(e)=>{
                getvaluesUser(e)
            }} placeholder='Please Enter Your Email' />
            <button type='submit' id='promotionsubmit' > SUBSCRIBE</button>
            </form>
        </div>

    </div>
  )
}

export default Promition