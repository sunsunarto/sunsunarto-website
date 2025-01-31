import {useState} from "react"; 
import '../ComponentStyle/header.css'

const [home, setHome] = useState(false)
const [about, setAbout] = useState(false)
const [contact, setContact] = useState(false)
const homeOnClick = () => {
    setHome(true)
    setAbout(false)
    setContact(false)
}
const aboutOnClick = () => {
    setHome(false)
    setAbout(true)
    setContact(false)
}
const contactOnClick = () => {
    setHome(false)
    setAbout(false)
    setContact(true)
}
function Header (){
    return(
        <div className="header">
            <div className="leftWord">
                <h6>Sunsun<span className="headerTitle">arto</span></h6>
            </div>
            <div className="navigation">
                <ul className="navList">
                    <li className="home"> {homeOnClick? "Home" : "Home"}<button> Home </button> </li>
                    <li className="about"> About </li>
                    <li className="contact"> contact </li>
                </ul>
            </div>
        </div>
    )
}

export default Header 