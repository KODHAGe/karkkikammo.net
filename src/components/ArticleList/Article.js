import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';

import './Article.css';

import SingleArticle from '../SingleArticle/SingleArticle';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
    this.props.click(this.props.id);
  }
  render() {
    return (
      <Link to={"/works/" + this.props.id} className="Article" id={"article-" + this.props.id} onClick={this.handleClick}>
        <div className="image">
          <img src={this.props.img + '/?sig=' + this.props.id} />
        </div>
        <div className="text">
          <p>{this.props.title}</p>
        </div>
      </Link>
    );
  }
}

export default Article;
