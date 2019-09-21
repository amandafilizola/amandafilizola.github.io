import React from 'react';

class Habilidade extends React.Component{

    render() {
        return(
            <div className="habilidade-container">
                <div className="space"></div>
                <div className="title-hab"><h3>{this.props.nome}</h3></div>

                {/* barrinha total */}
                <div className="barra">

                    {/* parte pintada */}
                    <div className="preenchimento-barrinha" style={{flex: this.props.porcentagem}}/>
                    {/* parte vazia */}
                    <div style={{flex: 100-this.props.porcentagem}}/>
                </div>
                <div className="space"></div>

            </div>
        )
    }
}
export default Habilidade