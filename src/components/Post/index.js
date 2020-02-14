import React from 'react';

import Comment from '../Comment';

import './style.css';
import userFacebook from '../../assets/user-facebook.png';

function Post(){
  return(
    <div className="post">
      <div className="post-header">
        <img src={userFacebook} alt="" id="user-facebook"/>
        <div className="post-perfil-user">
          <h4>Leonardo Alves</h4>
          <span>14 Fev 2020</span>
        </div>
      </div>
      <div className="post-content">
        <p>
          Pessoal, alguem sabe se a Rocketseat está contratando?
        </p>
      </div>
      <Comment/>
      <Comment/>
      <Comment/>
    </div>
  );
}

export default Post;