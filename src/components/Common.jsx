import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function Common(){
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Common;