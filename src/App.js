// React
import React, { Component } from 'react';
import { Route, Link, Redirect} from 'react-router-dom';

//Style
import './App.css';

// Components
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import SingleArticle from './components/SingleArticle/SingleArticle';


// Main thing, woop
class App extends Component {
  render() {
    return (
      <div className="App page">
        <Header />
        {/* Routing, for front page & single article view*/}
        <Route exact path='/' component={ArticleList} />
        <Route path='/works/:id' component={SingleArticle} />
      </div>
    );
  }
}

export default App;
