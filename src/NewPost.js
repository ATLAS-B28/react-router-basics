import React from 'react'

const NewPost = ({handleSubmit,setPostTitle,setPostBody,postBody,postTitle}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title : </label>
        <input
         id='postTitle'
         type='text'
         required
         //set the true value
         value={postTitle}
         //enable us to change the state of the title
         onChange={e=>setPostTitle(e.target.value)}
        />
         <label htmlFor="postBody">Body : </label>
        <textarea
         id='postBody'
         required
         //set the true value
         value={postBody}
         //enable us to change the state of the title
         onChange={e=>setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

    </main>
  )
}

export default NewPost
