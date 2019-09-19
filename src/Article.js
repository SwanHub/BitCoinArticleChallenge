import React, { Component } from 'react'


export function Article({article}){
  return(
    <div>
      <li>{article.source.name}</li>
    </div>
  )
}
