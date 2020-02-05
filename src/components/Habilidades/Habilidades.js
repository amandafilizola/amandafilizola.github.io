import React from 'react';
import './Habilidades.css';
import Habilidade from './Habilidade';

class Habilidades extends React.Component{

    render() {
        return(
            <div className="habilidades-container">
                <div id="habilidades" className="title-habilidades">
                    <h1>Skills</h1>
                </div>
                <div className="barrinhas-container">
                    <Habilidade nome="React" porcentagem={30}></Habilidade>
                    <Habilidade nome="Javascript" porcentagem={65}></Habilidade>
                    <Habilidade nome="Angular" porcentagem={80}></Habilidade>
                    <Habilidade nome="Arduino" porcentagem={65}></Habilidade>
                    <Habilidade nome="Git" porcentagem={85}></Habilidade>
                    <Habilidade nome="Node.js" porcentagem={45}></Habilidade>
                    <Habilidade nome="MongoDB" porcentagem={20}></Habilidade>
                </div>
            </div>
        )
    }
}
export default Habilidades