import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faSignOut} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useEffect } from "react";



export default function DropDownBox(){

    const handleUserIconMouseLeave = () => {

        const DropDownBar = document.getElementById('mainbox-dropdown');
    
           DropDownBar.style.display = "none"
      };

      const hideAddProduct1 = () => {
        
        const showProductBox1 = document.getElementById('mainbox-addproduct');
        showProductBox1.style.display = "none"     

    }

      useEffect(()=>{

        const DropDownBox = document.getElementById('DropDownBox-Logout');

        DropDownBox.addEventListener("click",hideAddProduct1)
        
      },[])

      


    return(
        <div className="mainbox-dropdown" id="mainbox-dropdown" onMouseLeave={handleUserIconMouseLeave}>
            <div className="dropdownbox-box1">
            <FontAwesomeIcon icon={faUser} />
            <div className="DropDownBox-Profile"><p>Profile</p></div>
            </div>
            <Link id="Link-dropdownbox-box3" to='/'>
            <div className="dropdownbox-box3">
            <FontAwesomeIcon icon={faSignOut} />
            <div className="DropDownBox-Logout" id="DropDownBox-Logout" ><p>Logout</p></div>
            </div>
            </Link>
            
            
        </div>
    )
}