import React from 'react'
import Feed from './Feed'
//this home comp will show the search results of the posts as well as normal posts
const Home = ({posts}) => {
  return (
    <main className='Home'>
     {posts.length?(
      <Feed posts={posts}/>
     ):(
      <p style={{marginTop:"2rem"}}>
        No posts on display
      </p>
     )}
    </main>
  )
}

export default Home
