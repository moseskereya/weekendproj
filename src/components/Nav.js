import React, { Component } from 'react';
import images from "./images/logo.png"
import {Link} from 'react-router-dom'
class Nav extends Component {
    state = {
        datas: ''
    }

    render() { 
        return (
                <div>
                    
                <nav className="nav">
                    <div className="logo">
                        <img src={images} alt="logo" className="logo"/>
                    </div>
                    <ul className="nav-item">
                        <Link className="link" to="/">
                            <li>Home</li>
                        </Link>
                        <Link className="link" to="/Menu">
                            <li>Menu</li>
                        </Link>

                    </ul>
                </nav>
                </div>
           
         );
        }
    }

 
export default Nav;