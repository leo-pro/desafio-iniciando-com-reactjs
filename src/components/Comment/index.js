import React from 'react';

import './style.css';
import userFacebook from '../../assets/user-facebook.png';

function Comment({comment}){
  return(
    <div className="comment">
      <div className="comment-header">
      <img src={comment.author.avatar == ''? userFacebook : comment.author.avatar} alt="" id="user-facebook"/>
      </div>
      <div className="comment-content">
        <p>
          <b>{comment.author.name}</b>
          {` ${comment.content}`}
        </p>
      </div>
    </div>
  );
}

export default Comment;