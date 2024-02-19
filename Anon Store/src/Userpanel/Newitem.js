import React from 'react'
import star from './images/star.png'
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


import belt from './images/products/belt.jpg';
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
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useContext } from 'react'
import sendData from '../SendData'

function NewItems() {

    const productDatas = useContext(sendData);

    const itemsData = [{
        productId : "7H7CnGo7pDki8oQWll",
        ProductName: "belt",
        productIMG: clothesone, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "7R0q1si0kSqUPU87P9",
        ProductName: "belt",
        productIMG: clothestwo, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "5t3hF0GP5kUH8T5zpU",
        ProductName: "belt",
        productIMG: two, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "2hYg28OM3dF6dQQaC7",
        ProductName: "belt",
        productIMG: three, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "027deP69nXIsCGZH6M",
        ProductName: "belt",
        productIMG: clothesthree, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "dD8e20VRcwZjdoara0",
        ProductName: "belt",
        productIMG: clothesfour, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "7j00IPXPwxFmqws6Xm",
        ProductName: "belt",
        productIMG: clothesfourone      , 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "TJ5t7o5KNIPL28Z3BG",
        ProductName: "belt",
        productIMG: clothesfourtwo, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "5Q2m88jQDfIW6rO8FJ",
        ProductName: "belt",
        productIMG: clothesfourthree, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "56rA0Db3IVZcDQflwH",
        ProductName: "belt",
        productIMG: clothesfourfour, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "c0aV99Sp9Fs6MiIYRq",
        ProductName: "belt",
        productIMG: clothesfourfive, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "67xL3FNHGRd7if7n8j",
        ProductName: "belt",
        productIMG: clothesfoursix, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },
    { 
        productId : "Q510yPhlD4SO7R9cmL",
        ProductName: "belt",
        productIMG: belt, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "67xL3FNHGRd7if7n8j",
        ProductName: "belt",
        productIMG: clothesfourseven, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "s5A08o6i52i5AzLZZ5",
        ProductName: "belt",
        productIMG: clothesfoureight  , 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "tLk76z9RXARV5P5E0D",
        ProductName: "belt",
        productIMG: clothesfournine, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "tLk76z9RXARV5P5E0D",
        ProductName: "belt",
        productIMG: clothesfourten, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "6Zz79JGN9X7GVt6BZo",
        ProductName: "belt",
        productIMG: clothesfoureleven, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "7H7CnGo7omki8oQWll",
        ProductName: "belt",
        productIMG: clothesfourtwel, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    },{ 
        productId : "7H7CnGo7pDkiooQWll",
        ProductName: "belt",
        productIMG: four, 
        productPrice: '$10.00 - $15.00',
        productBought: "1434",
    }];

    const [hoveredItem, setHoveredItem] = useState(null);

    const [heartItem,setHeratItem] = useState(false);

    const showHeart = (index) => {
        setHoveredItem(index);
    };

    const hideHeart = () => {
        setHoveredItem(null);
    
    };

    const scaleHeart = () => {
        setHeratItem(true)

     
    }

    const unsccaleHeart = () => {
        setHeratItem(false)
    }

    
    


  return (
    <div className='main-box-items'>
     <div className="sub-main-box-item">   
     

      {
        productDatas.fullInputs.map((details,index)=>
         (<div className="item-box" key={index} onMouseEnter={()=>{
            showHeart(index)
         }} onMouseLeave={hideHeart} >
         <div className="item-heart" id='item-heart' style={{display : hoveredItem=== index ? 'flex':'none'}} onMouseEnter={()=>{
            scaleHeart(index)
         }} onMouseLeave={unsccaleHeart} >
             <FontAwesomeIcon id='faHeart' style={{scale : heartItem === true ? '1.3' :'1'}} icon={faHeart}/>
         </div>
         
         {productDatas.imglinks.map((dats,ind)=>{
            if(index === ind){
                return(<img id='product-img' key={ind}  src={dats} alt="" />)
            }
            else{
                return null
            }
         }
            
         )}
         
         <h5>${details.productPrice - index - 6.11} - ${details.productPrice}</h5>
         <div className="sub-box-tem">
             <p>{details.productQuantity}</p>
             <div className="review-star-box">
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
             </div>
         </div>
      </div> )
        )
      }  
      {
        itemsData.map((details,index)=>
         (<div className="item-box" key={index} onMouseEnter={()=>{
            showHeart(index)
         }} onMouseLeave={hideHeart} >
         <div className="item-heart" id='item-heart' style={{display : hoveredItem=== index ? 'flex':'none'}} onMouseEnter={()=>{
            scaleHeart(index)
         }} onMouseLeave={unsccaleHeart} >
             <FontAwesomeIcon id='faHeart' style={{scale : heartItem === true ? '1.3' :'1'}} icon={faHeart}/>
         </div>
         <Link to={`/products/${details.productId}`}><img id='product-img' src={details.productIMG} alt="" /></Link>
         <h5>{details.productPrice}</h5>
         <div className="sub-box-tem">
             <p>{details.productBought}</p>
             <div className="review-star-box">
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
                 <img id='review-star' src={star} alt="" />
             </div>
         </div>
      </div> )
        )
      }      
    </div>
    </div>
  )
}

export default NewItems


