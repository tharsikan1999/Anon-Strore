import React, { useState } from 'react'
import belt from './images/products/belt.jpg';
import clothesone from './images/products/clothes-1.jpg'
import clothestwo from './images/products/clothes-2.jpg'
import two from './images/products/2.jpg'
import three from './images/products/3.jpg'
import star from './images/star.png'
import clock from './images/stopwatch-spp.gif'
import fire from './images/fire.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import plane from './images/plane.png';
import returnimg from './images/return.png'
import safe from './images/safe.png'
import { useParams } from 'react-router-dom';
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
import four from './images/products/4.jpg'




function Productpage() {


  
  const hideDiv = () => {
    const spanOne = document.querySelector(".span-one");
    const spanTwo = document.querySelector(".span-two");
    const detailsBox = document.getElementById('deatils-about-product');
    const prodcutdetails = document.querySelector('.h1-prodcut-details');

    const isrotate = spanOne.style.rotate === '-45deg'

    if(isrotate){
      spanOne.style.rotate = '0deg';
      spanTwo.style.rotate = '-90deg';
      spanOne.style.transform = 'translate(128%,1%)';
    spanOne.style.border= '2px solid #684aeff5'
    spanTwo.style.border= '2px solid #684aeff5'
    detailsBox.style.height = '0px'
    detailsBox.style.overflow = 'none'
    prodcutdetails.style.background = '#fff'
    
    }
    else{
      spanOne.style.rotate = '-45deg';
    spanTwo.style.rotate = '45deg';
    spanOne.style.transform = 'translate(40%,10%)';
    spanOne.style.border= '2px solid #ef584a'
    spanTwo.style.border= '2px solid #ef584a'
    detailsBox.style.height = '100%'
    detailsBox.style.overflow = 'flex'
    prodcutdetails.style.background = '#56565610'
    prodcutdetails.style.background = '#56565610'
    }    
  }



  const hideDiv1 = () => {
    const spanOne = document.querySelector(".span-one1");
    const spanTwo = document.querySelector(".span-two1");
    const detailsBox = document.getElementById('deatils-about-product1');
    const prodcutdetails = document.querySelector('.h1-prodcut-details1');

    const isrotate = spanOne.style.rotate === '-45deg'

    if(isrotate){
      spanOne.style.rotate = '0deg';
      spanTwo.style.rotate = '-90deg';
      spanOne.style.transform = 'translate(128%,1%)';
    spanOne.style.border= '2px solid #684aeff5'
    spanTwo.style.border= '2px solid #684aeff5'
    detailsBox.style.height = '0px'
    detailsBox.style.overflow = 'none'
    prodcutdetails.style.background = '#fff'

    }
    else{
      spanOne.style.rotate = '-45deg';
    spanTwo.style.rotate = '45deg';
    spanOne.style.transform = 'translate(40%,10%)';
    spanOne.style.border= '2px solid #ef584a'
    spanTwo.style.border= '2px solid #ef584a'
    detailsBox.style.height = '100%'
    detailsBox.style.overflow = 'flex'
    prodcutdetails.style.background = '#56565610'
    }    
  }


  const hideDiv2 = () => {
    const spanOne = document.querySelector(".span-one2");
    const spanTwo = document.querySelector(".span-two2");
    const detailsBox = document.getElementById('deatils-about-product2');
    const prodcutdetails = document.querySelector('.h1-prodcut-details2');

    const isrotate = spanOne.style.rotate === '-45deg'

    if(isrotate){
      spanOne.style.rotate = '0deg';
      spanTwo.style.rotate = '-90deg';
      spanOne.style.transform = 'translate(128%,1%)';
    spanOne.style.border= '2px solid #684aeff5'
    spanTwo.style.border= '2px solid #684aeff5'
    detailsBox.style.height = '0px'
    detailsBox.style.overflow = 'none'
    prodcutdetails.style.background = '#fff'

    }
    else{
      spanOne.style.rotate = '-45deg';
    spanTwo.style.rotate = '45deg';
    spanOne.style.transform = 'translate(40%,10%)';
    spanOne.style.border= '2px solid #ef584a'
    spanTwo.style.border= '2px solid #ef584a'
    detailsBox.style.height = '100%'
    detailsBox.style.overflow = 'flex'
    prodcutdetails.style.background = '#56565610'
    }    
  }

  const hideDiv3 = () => {
    const spanOne = document.querySelector(".span-one3");
    const spanTwo = document.querySelector(".span-two3");
    const detailsBox = document.getElementById('deatils-about-product3');
    const prodcutdetails = document.querySelector('.h1-prodcut-details3');

    const isrotate = spanOne.style.rotate === '-45deg'

    if(isrotate){
      spanOne.style.rotate = '0deg';
      spanTwo.style.rotate = '-90deg';
      spanOne.style.transform = 'translate(128%,1%)';
    spanOne.style.border= '2px solid #684aeff5'
    spanTwo.style.border= '2px solid #684aeff5'
    detailsBox.style.height = '0px'
    detailsBox.style.overflow = 'none'
    prodcutdetails.style.background = '#fff'

    }
    else{
      spanOne.style.rotate = '-45deg';
    spanTwo.style.rotate = '45deg';
    spanOne.style.transform = 'translate(40%,10%)';
    spanOne.style.border= '2px solid #ef584a'
    spanTwo.style.border= '2px solid #ef584a'
    detailsBox.style.height = '100%'
    detailsBox.style.overflow = 'flex'
    prodcutdetails.style.background = '#56565610'
    }    
  }


  const itemsData = [{
    productId : "7H7CnGo7pDkiooQWll",
    ProductName: "Exclusive Women Fashion High  ",
    productIMG : [clothesone,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],
    productPrice: '$10.00 - $15.00',
    productBought: "1434",
} ,{ 
    productId : "7R0q1si0kSqUPU87P9",
    ProductName: "Exclusive Women Fashion High  ",
    productIMG : [clothesfoureleven,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],   
    productPrice: '$10.00 - $15.00',
    productBought: "1434",
},{ 
    productId : "5t3hF0GP5kUH8T5zpU",
    ProductName: "Exclusive Women Fashion High Dress",
    productIMG: [clothesfoureight,clothesfourtwel,clothestwo,clothesfourten,clothesfournine,clothesfour],     
    productPrice: '$10.00 - $15.00',
    productBought: "1434",
},{ 
    productId : "2hYg28OM3dF6dQQaC7",
    ProductName: "Exclusive Women Fashion High Dress",
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


const zoomInImg = () => {
  const mainImg = document.querySelector('.main-img img');

  mainImg.style.scale = "1.5";

}

const zoomOutImg = () => {
  const mainImg = document.querySelector('.main-img img');

  mainImg.style.scale = "1";
}


 
  const {producetId} = useParams()

  

  

  const productData = itemsData.find((data)=>{
   return data.productId === producetId
  })

  const [mainimage ,setmainIMage] = useState(productData.productIMG[0])

  const chnageImg = (image) => {
    setmainIMage(image);
  }


  

  return (
    <div className='main-box-product'>
      <div className="sub-box-product">
        <div className="box-one-img-addcart">
         <div className="left-box-product">
         <div className="sub-box-img-set">
          <div className="clone-img">
            <div className="clone-img-one">
              <img onClick={()=>chnageImg(productData.productIMG[5])} src={productData.productIMG[5]} alt="" />
            </div>
            <div className="clone-img-two">
            <img onClick={()=>chnageImg(productData.productIMG[4])} src={productData.productIMG[4]} alt="" />
            </div>
            <div className="clone-img-three">
            <img onClick={()=>chnageImg(productData.productIMG[3])} src={productData.productIMG[3]} alt="" />
            </div>
            <div className="clone-img-four">
            <img onClick={()=>chnageImg(productData.productIMG[2])} src={productData.productIMG[2]} alt="" />
            </div>
            <div className="clone-img-five">
              <img onClick={()=>chnageImg(productData.productIMG[1])} src={productData.productIMG[1]} alt="" />
            </div>
          </div>
          <div className="main-img">
            <img onMouseEnter={zoomInImg} onMouseLeave={zoomOutImg} src={mainimage} alt="" />
          </div>
          
          </div>
          <div className="verify-by-shoppers">
            <div className="verify-by-shoppers-box-one">
              <FontAwesomeIcon className='faThumbsUp' icon={faThumbsUp}/>
              <p className='Verified'> Verified by shoppers </p>
            </div>
            <p className='product-always'> Product always receives high satisfaction ratings from our customers </p>
          </div>
          <div className="prodcut-details">
            <div className="h1-prodcut-details">
              <h2>Product Details</h2>
              <div className="faplus" onClick={hideDiv}>
                <span className='span-one'></span>
                <span className='span-two'></span>
              </div> 
            </div>
            <div className="deatils-about-product" id='deatils-about-product'>
                <ul>
                  <li>Item Type: Phone Cases</li>
                  <li>Material: TPU</li>
                  <li>Compatibility: iPhone 6, 6 Plus, 6S, 6S Plus, 7, 7 Plus, 8, 8 Plus, X, XR, XS, XS Max</li>
                </ul>
                <p>Package Includes:</p>
                <ul>
                  <li>1 x Phone Case</li>
                </ul>
              </div>
          </div>
          <div className="prodcut-details1">
            <div className="h1-prodcut-details1">
              <h2>Item Specifics</h2>
              <div className="faplus1" onClick={hideDiv1}>
                <span className='span-one1'></span>
                <span className='span-two1'></span>
              </div> 
            </div>
            <div className="deatils-about-product1" id='deatils-about-product1'>
                <ul>
                  <li>Item Type: Phone Cases</li>
                  <li>Material: TPU</li>
                  <li>Compatibility: iPhone 6, 6 Plus, 6S, 6S Plus, 7, 7 Plus, 8, 8 Plus, X, XR, XS, XS Max</li>
                </ul>
                <p>Package Includes:</p>
                <ul>
                  <li>1 x Phone Case</li>
                </ul>
              </div>
          </div>
          <div className="prodcut-details2">
            <div className="h1-prodcut-details2">
              <h2>Shipping & Payments</h2>
              <div className="faplus2" onClick={hideDiv2}>
                <span className='span-one2'></span>
                <span className='span-two2'></span>
              </div> 
            </div>
            <div className="deatils-about-product2" id='deatils-about-product2'>
                <h6>Shipping and delivery</h6>
                <p>
We are proud to offer international shipping services that currently operate in over 200 countries and islands worldwide. Nothing means more to us than bringing our customers great value and service. We will continue to grow to meet the needs of all our customers, delivering a service beyond all expectation anywhere in the world.
                </p>
                <h6>How do you ship packages?</h6>
                <p>Packages from our warehouse in China will be shipped by ePacket or EMS depending on the weight and size of the product. Packages shipped from our US warehouse are shipped through USPS.</p>
                <h6>Do you ship worldwide?</h6>
                <p>Yes. We provide free shipping to over 200 countries around the world. However, there are some locations we are unable to ship to. If you happen to be located in one of those countries we will contact you.</p>
                <h6>What about customs?</h6>
                <p>We are not responsible for any custom fees once the items have shipped. By purchasing our products, you consent that one or more packages may be shipped to you and may get custom fees when they arrive to your country.</p>
              </div>
          </div>
          <div className="prodcut-details3" id='paragraph11'>
            <div className="h1-prodcut-details3">
              <div className='reviews-box'>
              <h2>Customers Reviews </h2>
              <div className="start-cutomer-reviews">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <p >8 review</p>
              
              </div>
              </div>
              <div className="faplus3" onClick={hideDiv3}>
                <span className='span-one3'></span>
                <span className='span-two3'></span>
              </div> 
            </div>
            <div className="deatils-about-product3" id='deatils-about-product3'>
                <ul>
                  <li>Item Type: Phone Cases</li>
                  <li>Material: TPU</li>
                  <li>Compatibility: iPhone 6, 6 Plus, 6S, 6S Plus, 7, 7 Plus, 8, 8 Plus, X, XR, XS, XS Max</li>
                </ul>
                <p>Package Includes:</p>
                <ul>
                  <li>1 x Phone Case</li>
                </ul>
              </div>
          </div>
          
         </div>
          <div className="right-box-product">
          <div className="img-addcart">
            <h5 className='product-title'>{productData.ProductName}</h5>
            <div className="review-each-product">
              <div className="img-start">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              </div>
              <p >8 reviews</p>
            </div>
            <h2 className='each-product-price'>{productData.productPrice}</h2>
            <p className='free-shipping'>Free Shipping & Returns</p>
            <div className="selling-fast">
              <img src={clock} alt="" />
              <p> Selling fast: get yours before it’s gone!</p>
            </div>
            <p className='Material'>Color</p>
            <div className='matirial-img-box'>
              <span  style={{background:"red"}}></span>
              <span  style={{background:"blue"}}></span>
              <span  style={{background:"yellow"}}></span>
              <span  style={{background:"green"}}></span>
              <span  style={{background:"black"}}></span>
              <span  style={{background:"gray"}}></span>
              <span  style={{background:"purple"}}></span>
              <span  style={{background:"rgb(0, 255, 242)"}}></span>


            </div>
              <p className='Material'>Size</p>
              <div className="product-size-select">
                <span>Extra Small</span>
                <span>Small</span>
                <span>Large</span>
                <span>Extra Large</span>
              </div>


              
            <h2 className='each-product-price'>$13.83</h2>
            <div className="high-demand">
              <img src={fire} alt="" />
              <p> In high demand - only 8 items left!</p>
            </div>
            <button className='add-to-cart-button'>Add To Cart</button>
            
          </div>
          </div>
        </div>
        <div className="sub-box-two-product">
          <div className="left-box-sub-box-two-product">
            <div className="left-box-sub-box-two-product-img">
            <img className='faplane' src={plane} alt="" />
            </div>
            <div className="left-box-sub-box-two-product-paragraph">
            <p className='heading-left-box-sub-box-two-product-paragraph'>Worldwide Shipping</p>
            <p id='heading-left-box-sub-box-two-product-paragraph'>Enjoy flexible international shipping services that currently operate in over 200 countries across the world</p>
            </div>
          </div>
          <div className="left-box-sub-box-two-product">
            <div className="left-box-sub-box-two-product-img">
            <img className='faplane' src={returnimg} alt="" />
            </div>
            <div className="left-box-sub-box-two-product-paragraph">
            <p className='heading-left-box-sub-box-two-product-paragraph'>Free Returns</p>
            <p id='heading-left-box-sub-box-two-product-paragraph'>Arrange your return for a full refund, we've got you covered with our full Buyer protection</p>
            </div>
          </div>
          <div className="left-box-sub-box-two-product">
            <div className="left-box-sub-box-two-product-img">
            <img className='faplane' src={safe} alt="" />
            </div>
            <div className="left-box-sub-box-two-product-paragraph">
            <p className='heading-left-box-sub-box-two-product-paragraph'>Safe Payment</p>
            <p id='heading-left-box-sub-box-two-product-paragraph'>Buy with confidence using the world’s most popular and secure payment methods</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Productpage