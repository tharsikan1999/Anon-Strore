import React, { useState } from 'react'
import logo  from './images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser,faCartPlus,faHeart } from '@fortawesome/free-solid-svg-icons'
import './User.css'
import { Link,Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import DropDownuser from './DropDownuser'
import clothesone from './images/products/clothes-1.jpg'
import clothestwo from './images/products/clothes-2.jpg'
import two from './images/products/2.jpg'
import three from './images/products/3.jpg'
import four from './images/products/4.jpg'
import clothesthree from './images/products/clothes-3.jpg'
import clothesfour from './images/products/clothes-4.jpg'
import clothesfourone from './images/products/imgone.jpg'
import clothesfourtwo from './images/products/jacket-1.jpg'
import clothesfourthree from './images/products/jacket-2.jpg'
import clothesfourfour from './images/products/jewellery-1.jpg'
import clothesfourfive from './images/products/party-wear-1.jpg'
import clothesfoursix from './images/products/perfume.jpg'
import clothesfourseven from './images/products/shirt-1.jpg'
import clothesfoureight from './images/products/shoe-1.jpg'
import clothesfournine from './images/products/shorts-2.jpg'
import clothesfourten from './images/products/party-wear-2.jpg'
import clothesfoureleven from './images/products/watch-2.jpg'
import clothesfourtwel from './images/products/jewellery-3.jpg'
import belt from './images/products/belt.jpg';



function Navbar() {


  const handleUserIconMouseEnter = () => {
    const DropDownBar = document.getElementById('umainbox-dropdown');

       DropDownBar.style.display = "flex"
  };
  const handleUserIconMouseLeave = () => {

    const DropDownBar = document.getElementById('umainbox-dropdown');

       DropDownBar.style.display = "none"
  };
 
    const showLoginPage = () =>{
        const mainloginBox = document.getElementById('main-box-login');

        mainloginBox.style.display = 'flex'
        

    }

    useEffect(()=>{


        const usrProfile = document.getElementById('udropdownbox-box1');

        usrProfile.addEventListener("click",showLoginPage)

        
        
    },[]) ;

    const itemsData = [{
      productId : "7H7CnGo7pDkiooQWll",
      ProductName: " Women Fashion High  ",
      productIMG : [clothesone,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  } ,{ 
      productId : "7R0q1si0kSqUPU87P9",
      ProductName: "Exclusive  Fashion   ",
      productIMG : [clothesfoureleven,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],   
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "5t3hF0GP5kUH8T5zpU",
      ProductName: "  Fashion  ",
      productIMG: [clothesfoureight,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],     
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "2hYg28OM3dF6dQQaC7",
      ProductName: "shirt Women Fashion High Dress",
      productIMG: [clothesfourtwel,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "027deP69nXIsCGZH6M",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourseven,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "dD8e20VRcwZjdoara0",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfoursix,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "7j00IPXPwxFmqws6Xm",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothestwo,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "TJ5t7o5KNIPL28Z3BG",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourfive,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "5Q2m88jQDfIW6rO8FJ",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourten,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "56rA0Db3IVZcDQflwH",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourthree,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "c0aV99Sp9Fs6MiIYRq",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfournine,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "67xL3FNHGRd7if7n8j",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [belt,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },
  { 
      productId : "Q510yPhlD4SO7R9cmL",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourfour,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "67xL3FNHGRd7if7n8j",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourtwo,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "s5A08o6i52i5AzLZZ5",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [four,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "tLk76z9RXARV5P5E0D",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfour,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "tLk76z9RXARV5P5E0D",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesthree,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "6Zz79JGN9X7GVt6BZo",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [two,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "7H7CnGo7omki8oQWll",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [clothesfourone,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  },{ 
      productId : "7H7CnGo7pDkiooQWll",
      ProductName: "Exclusive Women Fashion High Dress",
      productIMG: [three,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour], 
      productPrice: '$10.00 - $15.00',
      productBought: "1434",
  } ];

  const [serachData ,setsearchData] = useState('')

  const [mainData, setMainData] = useState([])

  const searchProduct = () => {

    const Maindata = itemsData.filter((data)=>{
      return data.ProductName.toString().toLowerCase().includes(serachData.toLowerCase())
      
     })

     setMainData(Maindata);

     const serachBoxHide = document.querySelector('.serach-box')
  serachBoxHide.style.display = 'flex';
   
  }

const getvalues = (e) => {
  setsearchData(e.target.value);
}




const hidesearchBox = () => {
  const serachBoxHide = document.querySelector('.serach-box')
  serachBoxHide.style.display = 'none';
}

    


  return (
    <div className="mainbox">
        <div className="sub-box-one">
        <div className="navbar-right-box">
            <div className="main-logo">
               <Link to='/'><img src={logo} alt="" /></Link> 
            </div>
        </div>
        <div className="navbar-center-box">
            
            <input type="text"  onChange={getvalues} placeholder='What do you want find here?'/>
            <FontAwesomeIcon id='fasearch' icon={faSearch} onClick={searchProduct}/>
            

         

        </div>
        <div className="navbar-left-box" >
            <FontAwesomeIcon id='facartplus' icon={faCartPlus}/>
            
            <FontAwesomeIcon id='faheart' icon={faHeart}/>
            <FontAwesomeIcon id='fauser' onClick={handleUserIconMouseEnter}  onMouseEnter={handleUserIconMouseEnter} icon={faUser}/>

        </div>
        </div>
        <div className="sub-box-two" onMouseEnter={handleUserIconMouseLeave}>
            <ul>
                <li><Link id='Popular'  to='/Popular'>🔥 Popular</Link></li>
                 <li><Link id='Bestdeals' to='/Bestdeals'>👍 Best deals</Link></li>
                <li><Link id='Featured' to='/Featured'>⭐ Featured</Link></li>
                <li><Link id='Newarivals' to='/Newarivals'>⏱️ New arrivals</Link></li>
                <li><Link id='Allproducts' to='/Allproducts'>😍 All products</Link></li> 
                       
            </ul>
        </div>

        <div className="serach-box" onMouseLeave={hidesearchBox}>
  {mainData.map((data, index) => (
   
   
      <div key={index} className="sub-sub-box-search-box">
        
        <div className="sub-box-serach-box">
        <Link  to={`/products/${data.productId}`}><img src={data.productIMG[0]} alt="" /></Link>
          <div className="price-and-product-tititle-box">
            <p className="no-underline" style={{ textDecoration: 'none' }}>{data.ProductName}</p>
             <span>${data.productPrice}</span>
          </div>
        </div>
        </div>
        
        ))}
</div>

        
       
        <Outlet/>
       <DropDownuser/>
    </div>
  )
}



export default Navbar