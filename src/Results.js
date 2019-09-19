import React, { Component } from 'react'

export class Results extends Component {
  render(){
    return(
      <div>
        {this.props.totalArticles}
      </div>
    )
  }
}
