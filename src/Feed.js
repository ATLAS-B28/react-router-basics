import React from 'react'
import Post from './Post'
const Feed = ({posts}) => {
  return (
    <>
     {posts.map(post=>(
        //here the element is each post
        <Post key={post.id} post={post}/>
     ))}
    </>
  )
}

export default Feed
