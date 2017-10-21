// React
import React, { Component } from 'react';

//Style
import './App.css';

// Components
import Article from './components/Article';
import Header from './components/Header';

// Some mock data
import mockdata from './data/mock.js';

// Main thing, woop
class App extends Component {
  render() {
    const articles = mockdata.map((article) => (
      <Article
        id={article.id}
        title={article.title}
        description={article.description}
        img={article.img}
        url={article.url}
      />
    ));
    return (
      <div className="App page">
        <Header />
        <main>
          {articles}
        </main>
      </div>
    );
  }
}

export default App;
