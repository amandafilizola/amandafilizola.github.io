import React from 'react';
import './Navbar.css';
class NavbarItem extends React.Component{
    render() {
        return(
            <div className="navbar-item">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}
export default NavbarItem