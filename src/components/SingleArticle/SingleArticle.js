import React, { Component } from 'react';
import './SingleArticle.css';

// Some mock data
import mockdata from '../../data/mock.js';

class SingleArticle extends React.Component {
  render() {
    const id = this.props.match.params.id;    
    const article = mockdata.find(function(a){ return a.id == id });
    console.log(article);
    return (
      <div className="SingleArticle">
        <h1>{article.title}</h1>
        <img src={article.img + '/?sig=' + article.id}></img>
        <p>{article.description}</p>
      </div>
    );
  }
}

export default SingleArticle;
