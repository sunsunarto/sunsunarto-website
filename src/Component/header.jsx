import React from "react"; 
import '../ComponentStyle/header.css'

function Header (){
    return(
        <div className="header">
            <div className="leftWord">
                <h6>Sunsun<span className="headerTitle">arto</span></h6>
            </div>
            <div className="navigation">
                <ul className="navList">
                    <li className="home"> Home </li>
                    <li className="about"> About </li>
                    <li className="contact"> contact </li>
                </ul>
            </div>
        </div>
    )
}

export default Header 