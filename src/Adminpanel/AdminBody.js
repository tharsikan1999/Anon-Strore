import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import sendData from '../SendData'
import { useContext } from 'react'
import { useEffect } from 'react'

function AdminBody() {

  const handleUserIconMouseLeave = () => {

    const DropDownBar = document.getElementById('mainbox-dropdown');

       DropDownBar.style.display = "none"
  };
  
  const { fullInputs, imglinks } = useContext(sendData);

  const [imag , setImag] = useState([]);

 

    const [data , setData] = useState([
        
    ])

   
    useEffect (()=>{
        setData(fullInputs)

    },[fullInputs]) 

    useEffect(()=>{
      setImag(imglinks)
    },[imglinks])

     const deleteRowTabel = (idDeleterow) => {

         const updatedata = data.filter((item,index)=>{ return index !== idDeleterow
        })

        const updatedataImg = imag.filter((imggg,index)=>{
          return index !== idDeleterow
        })

        setData(updatedata)
        
        setImag(updatedataImg)

    } 

   

  return (
    <div className='adminBody' id='adminBody' onMouseEnter={handleUserIconMouseLeave}>
        <table id='admintabel'>
            
           <thead>
           <tr>
                <th>Product no</th>
                <th>Product name</th>
                <th>Product Price</th>       
                <th>Product quantity</th>
                <th>product size</th>
                <th>product color</th>
                <th>Product image</th>
            </tr>
           </thead>
            <tbody id='tabelBodyAdmin'>
            {data.map((row,index) => (
              
            <tr key={index}>
              <td>{row.ProductNo}</td>
              <td>{row.productName}</td>
              <td>{row.productPrice}</td>
              <td>{row.productQuantity}</td>
              <td>{row.productSize}</td>
              <td><div id='testtd' style={{background : `${row.productcolorselect}`}}></div></td>
              {imag.map((imge,imgindex)=>{
                if(imgindex === index){
                 return( <td key={imgindex} id='tabeleye'><img id='productIMG' src={imge} alt="" /></td>)
                }
                else{
                  return null
                }
              }                
              )}
              <td id='tableEdit'><FontAwesomeIcon icon={faEdit}/></td>
              <td id='tabletrash'><FontAwesomeIcon icon={faTrash} onClick={()=>{deleteRowTabel(index)}}/></td>
            </tr>
            
          ))}
            
            
            </tbody>
            
        </table> 
    </div>
  )
}

export default AdminBody