import React, { Component } from 'react'
import { Article } from './Article.js'

export function ArticleContainer({articles}) {

  const displayArticles = () => {
    return articles.map((article) => {
      return <Article article={article}/>
    })
  }

  return (
    <div>
        <ul>
        {displayArticles()}
        </ul>
    </div>
  )
}
