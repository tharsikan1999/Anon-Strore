import React, { useEffect } from "react";
import logo from './Images/logo.svg'
import man from './Images/man.png'
import { Link } from "react-router-dom";


export default function Navbar(){

    const handleUserIconMouseEnter = () => {
        let dropdownBox = document.getElementById('mainbox-dropdown');
        dropdownBox.style.display = "flex"

      };

    const showAddProduct = () => {
        let showProductBox = document.getElementById('mainbox-addproduct');
        
            showProductBox.style.display = "flex"

        let adminTable = document.getElementById('adminBody');

             adminTable.style.opacity = 0.4
               
    }

    const hideAddProduct = () => {
        
        let showProductBox = document.getElementById('mainbox-addproduct');
        showProductBox.style.display = "none"

        let adminTable = document.getElementById('adminBody');

             adminTable.style.opacity = 1.0

    }

    useEffect(()=>{
        

        const addProduct = document.getElementById('addItemButton');

        addProduct.addEventListener("click",showAddProduct);

        let closeButton = document.getElementById('faclose');
        
        closeButton.addEventListener('click',hideAddProduct);
        
    },[]);




    return(
        <div className="admin-navbar-MainBox">
            <div className="navbar-LeftBox" >
                <Link to='/'>
                <img className="logo" onClick={hideAddProduct} src={logo} alt="logo" />
                </Link>
                
                
            </div>
            <div className="admin-center-box">
                <button id="addItemButton">Add Item</button>
            </div>
            <div className="admin-Navbar-RightBox">
                <img className="user-logo" id="user-logo" onClick={handleUserIconMouseEnter} onMouseEnter={handleUserIconMouseEnter} src={man} alt="user logo" />
            </div>

        </div>
    )
}



