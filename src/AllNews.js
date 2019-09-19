import React, { Component }from 'react'
import { Results } from './Results'
import { ArticleContainer } from './ArticleContainer'

export class AllNews extends Component {

  render(){
    return(
      <div>
        <Results totalArticles={this.props.articles.totalResults}/>
        <ArticleContainer articles={this.props.articles}/>
      </div>
    )
  }
}

// export default AllNews
