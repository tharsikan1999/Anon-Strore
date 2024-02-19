import React from 'react'
import Login from '../Login'
import Signup from '../Signup'
import superSale from './images/Footer/superSale.jpg'
import './User.css'
import Items from './Items'

function Home() {

  return (
    <div>   
        <Login/>
        <Signup/>
        <div className="sale-image-box">
          <img src={superSale} alt="" />
        </div>
        <Items/>
    </div>
  )
}

export default Home