import React from 'react';

import './style.css';
import logoFacebook from '../../assets/logo-facebook.png';
import userFacebook from '../../assets/user-facebook.png';

function Header(){
  return(
    <div className="nav">
      <div className="nav-item">
        <img src={logoFacebook} alt="" id="logo"/>
      </div>
      <div className="nav-item">
        <div id="botao-perfil">
          <p>
            <b>Meu perfil</b>
          </p> 
          <img src={userFacebook} alt=""id="user-icon"/>
        </div>
      </div>
    </div>
  );
}

export default Header;