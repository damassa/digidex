import React from 'react';
import './digimonStyles.css';

const Digimons = props => {
    const {name, img, level} = props;
  
    return(
        <div className="card-container">
          <div className="card">
            <div className="imagem">
              <img src={img} alt={name} title={name} />
            </div>
            <div className="infos">
              <div className="nome">Nome: {name}</div>
              <div className="level">Level: {level}</div>
            </div>
          </div>
        </div>
    );
};

export default Digimons;