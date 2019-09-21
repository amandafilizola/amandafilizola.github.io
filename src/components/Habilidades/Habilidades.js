import React from 'react';
import './Habilidades.css';
import Habilidade from './Habilidade';

class Habilidades extends React.Component{

    render() {
        return(
            <div className="habilidades-container">
                <div id="habilidades" className="title-habilidades">
                    <h1>Habilidades</h1>
                </div>
                <div className="barrinhas-container">
                    <Habilidade nome="React" porcentagem={25}></Habilidade>
                    <Habilidade nome="Javascript" porcentagem={55}></Habilidade>
                    <Habilidade nome="Angular" porcentagem={80}></Habilidade>
                    <Habilidade nome="Arduino" porcentagem={65}></Habilidade>
                    <Habilidade nome="PHP" porcentagem={10}></Habilidade>
                </div>
            </div>
        )
    }
}
export default Habilidades