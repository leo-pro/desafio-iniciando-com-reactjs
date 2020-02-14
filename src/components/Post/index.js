import React from 'react';

import Comment from '../Comment';

import './style.css';
import userFacebook from '../../assets/user-facebook.png';

function Post({ post }){
  return(
    <div className="post">
      <div className="post-header">
        <img src={post.author.avatar == ''? userFacebook : post.author.avatar} alt="" id="user-facebook"/>
        <div className="post-perfil-user">
          <h4>{post.author.name}</h4>
          <span>{post.date}</span>
        </div>
      </div>
      <div className="post-content">
        <p>
          { post.content }
        </p>
      </div>
      { post.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
    </div>
  );
}

export default Post;