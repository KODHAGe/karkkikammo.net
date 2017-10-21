import React, { Component } from 'react';
import './Article.css';

class Article extends React.Component {
  render() {
    return (
      <a className="Article" href={this.props.url}>
          <div className="image">
            <img src={this.props.img + '/?sig=' + this.props.id} />
          </div>
          <div className="text">
            <p>{this.props.title}</p>
          </div>
      </a>
    );
  }
}

export default Article;
