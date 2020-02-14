import React from 'react';

import './style.css';
import userFacebook from '../../assets/user-facebook.png';

function Comment(){
  return(
    <div className="comment">
      <div className="comment-header">
        <img src={userFacebook} alt="" id="user-facebook"/>
      </div>
      <div className="comment-content">
        <p><b>Diego Fernandes</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error facere doloremque facilis corrupti, vero nostrum itaque pariatur dolorum, possimus quos tempore maiores sint. Repudiandae officiis impedit reprehenderit, esse consectetur eius?</p>
      </div>
    </div>
  );
}

export default Comment;