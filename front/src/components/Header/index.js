import React from 'react';
import './headerStyles.css';
import logo from '../../assets/digimon-logo.png';

const Header = () => {
    return(
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Digimon" title="Digidex - A pokédex, for Digimon!"/>
            </div>
        </header>
    );
}

export default Header;  