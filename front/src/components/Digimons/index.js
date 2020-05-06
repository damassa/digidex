import React from 'react';
import './digimonStyles.css';

const Digimons = props => {
    const {name, img} = props;
  
    return(
        <div className="card-container">
          <div className="card">
            <div className="nome">{name}</div>
              <div className="imagem">
                <img src={img} alt={name} title={name} />
              </div>
          </div>
        </div>
    );
};

export default Digimons;