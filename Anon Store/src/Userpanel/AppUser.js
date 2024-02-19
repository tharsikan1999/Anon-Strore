import React from 'react'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Popular from './Popular'
import Bestdeals from './Bestdeals'
import Allproducts from './Allproducts'
import Newarivals from './Newarivals'
import Featured from './Featured'
import Nopage from './Nopage'
import Home from './Home'
import Admin from '../Adminpanel/Admin'
import Navbar from './Navbar'
import Promition from './Promition'
import Footer from '../Footer'
import { useState } from 'react'
import Productpage from './Productpage'



function AppUser() {

  const [showNvaebar,setShowNavbar] = useState(true);
  return (
    <div className='home-main-box'>
    <BrowserRouter>
    {showNvaebar && <Navbar/>}
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Popular' element={<Popular />} />
          <Route path='/Allproducts' element={<Allproducts />} />
          <Route path='/Newarivals' element={<Newarivals />} />
          <Route path='/Bestdeals' element={<Bestdeals />} />
          <Route path='/Featured'  element={<Featured />} />       
          <Route path='*' element={<Nopage />} /> 
          <Route path='/products/:producetId' element={<Productpage/>}/>
          <Route path='/Adminpanel/Admin' element={ <Admin setShowNavbar={setShowNavbar}/>}/> 
      </Routes>
      {showNvaebar && <Promition/>}
      <Footer/>   
    </BrowserRouter>    
  </div>
)
}

export default AppUser