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
          avatar: 'https://avatars0.githubusercontent.com/u/14790547?s=460&v=4'
        },
        date: '14 Fev 2020',
        content: 'Salve galera! Testando aqui o app que desenvolvi com ReactJS.',
        comments: [
          {
            id: 1,
            author: {
            name: 'Lucas Tangi',
            avatar: 'https://avatars1.githubusercontent.com/u/42376741?s=100&v=4'
            },
            content: 'Ficou brabo!',
          },
          {
            id: 2,
            author: {
            name: 'Vinicius Cesar',
            avatar: 'https://avatars0.githubusercontent.com/u/31235308?s=100&v=4'
            },
            content: 'Sensacional!',
          },
        ]
      }
    ]
  }

  render(){
    console.log(this.state.posts[0]);

    return(
      <div className="post-list">
        { 
          this.state.posts.map(post => <Post key={post.id} post={post}/>)
        }
      </div>
    );
  }
}

export default TechList;