import React, { Component } from 'react';
import logo from "./components/images/logo.png"
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                <img src={logo} alt="logo" className="logo" />
                <p>&copy; Recipe 2020</p>
            </div>
         );
    }
}
 
export default Footer;