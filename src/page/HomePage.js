import React from 'react'

import PostForm from '../components/PostForm'
import FetchedPosts from '../components/FetchedPosts'
import Posts from '../components/Posts'

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхроные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  )
}

export default HomePage
