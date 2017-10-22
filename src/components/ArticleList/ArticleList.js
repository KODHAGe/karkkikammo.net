import React, { Component } from 'react';
import './ArticleList.css';

import Article from './Article';

// Some mock data
import mockdata from '../../data/mock.js';

class ArticleList extends React.Component {
  handleClick(id){
    console.log(id + ' was clicked');
  }
  render() {
    const articles = mockdata.map((article) => (
      <Article
        key={article.id}
        id={article.id}
        title={article.title}
        description={article.description}
        img={article.img}
        url={article.url}
        click={this.handleClick}
      />
    ));
    return (
      <div className="ArticleList">
          {articles}
      </div>
    );
  }
}

export default ArticleList;
