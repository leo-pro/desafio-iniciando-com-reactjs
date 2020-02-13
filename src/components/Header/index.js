import React from 'react';

import './style.css';
//import logoFacebook from './assets/logo-facebook.png';

function Header(){
  return(
    <div className="nav">
      <div className="nav-item">
        <p>Facebook</p>
      </div>
      <div className="nav-item">
        <p>Meu perfil</p>
      </div>
    </div>
  );
}

export default Header;