import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import About from "./About";
import PostPage from "./PostPage";
import Missing404 from "./Missing404";
import { Route, Routes, useNavigate } from "react-router-dom";
//react-router-dom is used to route and not fetch from the server every time
//instead routes within the app
import { useState, useEffect } from "react";
import {format} from 'date-fns'

function App() {
  //set the state for posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
  ]);
  const [search, setSearch] = useState(""); //get the search results
  const [searchResults, setSearchResults] = useState([]); //get an array of results
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();
  //lets use the useeffect to handle search results whenever changes in post and search dependencies
  useEffect(() => {
    const filterResults = posts.filter((post) => {
      return post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase());
    });
    setSearchResults(filterResults.reverse());
  }, [posts, search]);
  //form to create new post
  const handelSubmit = (e) => {
    e.preventDefault();
    //2 things will be assigned automatically
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    //new post object appended using ...
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    //after submission set everything to empty
    setPostBody("");
    setPostTitle("");
    //navigate to the main page
    navigate("/");
  };

  const handelDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        {/**Home route */}
        <Route index element={<Home posts={searchResults} />} />
        {/**post routes habe 2 more route -new post and post page with delete functionality */}
        <Route path='post'>
         <Route index element={<NewPost
          handelSubmit={handelSubmit}
          postTitle={postTitle}
          postBody={postBody}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
         />}/>
         <Route path=":id" element={<PostPage
          posts={posts}
          handelDelete={handelDelete}
         />}/>
         <Route/>
         <Route path="about" element={<About />} />
         <Route path="*" element={<Missing404 />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
