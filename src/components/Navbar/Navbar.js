import React from 'react';
import NavbarItem from './NavbarItem';
import './Navbar.css';

class Navbar extends React.Component{

    render() {
        return(
            <div className="navbar">
                <NavbarItem title="Sobre mim"/>
                <NavbarItem title="Habilidades"/>
                <NavbarItem title="Projetos"/>
                <NavbarItem title="Contato"/>
            </div>
        )
    }
}
export default Navbar