import React, { Component } from 'react';

import Post from '../Post';

import './style.css'

class TechList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Leonardo Alves',
          avatar: 'http://localhost:8080/tmp/foto-perfil.png'
        },
        date: '14 Fev 2020',
        content: 'Pessoal, alguem sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
            name: 'Diego Fernandes',
            avatar: 'http://localhost:8080/tmp/foto-perfil.png'
            },
            content: 'Conteúdo do Comentário',
          },
          
        ]
      }
    ]
  }

  render(){
    console.log(this.state.posts[0]);

    return(
      <div className="post-list">
        <Post />
      </div>
    );
  }
}

export default TechList;