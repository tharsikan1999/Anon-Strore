import React from "react";
import "./Admin.css"
import DropDownBox from "./dropDownBox";
import AdminBody from "./AdminBody";
import { useEffect } from "react";
import Navbar from "./Navbar";




export default function Admin({setShowNavbar}){
    useEffect(() => {
        setShowNavbar(false); 
    
        return () => {
          setShowNavbar(true);
        };
      }, [setShowNavbar]);
    return(
        <div className="admin-Main-Bbox"> 
        <Navbar/>  
            <DropDownBox/>
            <AdminBody/>  
        </div>
    )
}

