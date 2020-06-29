import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './digimonStyles.css';

const Digimons = props => {
    const {name, img, level} = props;
  
    return(
      <div className="card-container">
        <Tooltip title={level} arrow>
          <div className="card">
            <div className="nome">{name}</div>
              <div className="imagem">
                <img src={img} alt={name} />
              </div>
          </div>
        </Tooltip>
      </div>
    );
};

export default Digimons;