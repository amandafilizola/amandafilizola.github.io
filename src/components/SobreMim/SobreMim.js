import React from 'react';
import './SobreMim.css';
import avatar from '../../images/avatar.jpg';
import avatar2 from '../../images/google_w_me.jpg';

class SobreMim extends React.Component {
    render(){
        return (
            <div className="sobremim" id="sobremim">
                <div className="avatar-space">
                    <img className="avatar" src={avatar} alt="Foto de perfil de Amanda"
                    onMouseOver={e => (e.currentTarget.src = avatar2)}
                    onMouseOut={e => (e.currentTarget.src = avatar)}
                    />
                </div>
                <div className="experiencias">
                    <h2>Sobre mim</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                    </p>
                </div>
            </div>
        );
    }
}

export default SobreMim;
