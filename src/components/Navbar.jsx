import React from "react";
import "../assets/css/Navbar.css"


class Navbar extends React.Component{
    render(){
        return(
            <div className="flex navbar-1">
                <h1>Salman</h1>
                <ul className="flex ul-1" >
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar