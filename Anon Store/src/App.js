import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import sendData from './SendData';
import AppUser from './Userpanel/AppUser';


function App() {

  const [fullInputs,setFullinputs] = useState([]);

  const[imglinks,setImglinks] = useState([]);

  const [imageURL, setImageURL] = useState([]);



  const [inputs,setInputs] = useState({
    
    ProductNo : "",
    productName : "",
    productPrice : "",
    productQuantity : "",
    productSize : "",
    productcolorselect : "",
    
  
  });
  
  const getValues = (e) => {
  const name = e.target.name;
  const value = e.target.value
  
  setInputs((val)=>{
    return{...val,[name]:value}
  })
  
  }
  
  const sumbitValues = (e) => {
  e.preventDefault();

  setFullinputs([...fullInputs,inputs])

  setInputs(
    {
    
      ProductNo : "",
      productName : "",
      productPrice : "",
      productQuantity : "",
      productSize : "",
      productcolorselect : "",
        
    }
  )

  setImageURL("")

  setImglinks([...imglinks,imageURL]);


  console.log(fullInputs)








  }

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageURL(imageUrl)
    }
    else{
      setImageURL(null)
    }

    
    
    
  };

 




  
  
  return (
    <div>
       <div className='mainbox-addproduct' id='mainbox-addproduct'>
        <form action="" className='form-addProduct' id='formaddProduct' onSubmit={sumbitValues}>
        <FontAwesomeIcon id='faclose' icon={faClose}/>
        <label htmlFor="ProductNo">Product No <span id='addproduct-span-0'> : </span> </label>
        <input type="number" placeholder='Enter product number' id='ProductNo' required onChange={getValues} value={inputs.ProductNo} name='ProductNo'/><br />
        <label htmlFor="product-name" id='l'>Product Name  <span id='addproduct-span-1'>:</span> </label>
        <input required type="text" placeholder='Enter product name' id='productName' onChange={getValues} value={inputs.productName}  name='productName'/><br />
        <label htmlFor="product-price" id='product-price'>Product Price <span id='addproduct-span-22'> : </span> </label>
        <input required type="number" placeholder='Enter product price' id='productPrice'onChange={getValues} value={inputs.productPrice} name='productPrice'/><br />
        <label htmlFor="product-quantity" id='product-quantity'>Product Quantity <span id='addproduct-span-4'> :</span> </label>
        <input required type="number" placeholder='Enter product quantity' id='productQuantity' onChange={getValues} value={inputs.productQuantity} name='productQuantity' /><br />
        <label htmlFor="product-size" id='product-size'>Product Size <span id='addproduct-span-3'> :</span> </label>
        <input required type="text" placeholder='Enter product size' id='productSize' onChange={getValues} value={inputs.productSize} name='productSize' /><br />
        <label htmlFor="Product-Image" id='product-color-select-label'>Product Color <span id='addproduct-span-6'>:</span> </label>
        <select name="productcolorselect" id="productcolorselect" onChange={getValues}>
          <option value="">-- Select Color --</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
          <option value="black">black</option>
          <option value="green">green</option>
          <option value="ornage">orange</option>
          <option value="gray">gray</option>

        </select><br />
        <label htmlFor="Product-Image" id='Product-Image'>Product Image <span id='addproduct-span-5'>:</span> </label>
        <input required type="file" accept='image/jpeg,image/png' name='ProductImage' onChange={handleImageUpload} value={imageURL.ProductImage} id='ProductImage'/><br /> 
        <button type='submit' id='Submit'>Submit</button>       
        </form>

    </div>
    <sendData.Provider value={{fullInputs,imglinks}}>
    <AppUser/>
    
    </sendData.Provider>
    
    </div>
  );
}

export default App;
