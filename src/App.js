import React, { Component } from 'react';
import './App.css';
import { AllNews } from './AllNews'
import { Results } from './Results'

class App extends Component {

  state = {
    articles: []
  }

  componentDidMount(){
  fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-19&sortBy=publishedAt&apiKey=673f3f5241b64daa84e1bd2f1e46e704')
    .then(response => response.json())
    .then(result => {
        this.setState({ articles: result.articles })
      }
    )
  }

  render(){
    return (
      <div className="App">
        <AllNews articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;

//  App => AllNew => Articles => IndArticles
//                => ResultNumber
