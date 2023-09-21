import React, { useEffect, useState } from 'react';
import './TimeLine.css';
import Suggestions from './Suggestions.jsx';
import Post from './posts/Post.jsx';
import { PostService } from '../../services/Api.js';

const TimeLine = () => {
   const service = new PostService();
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      service
         .getPosts()
         .then((res) => setPosts(res.data))
         .catch((e) => console.log(e));
   }, [posts]);

   return (
      <>
         <div className='timeline row justify-content-center'>
            <div className='col-lg-9'>
               <div className='timeline_left'>
                  <div className='timeline_posts d-flex flex-column align-items-center'>
                     {posts.length > 0 ? (
                        posts.map((post) => (
                           <Post
                              key={post.id}
                              post={post}
                              setPosts={setPosts}
                              posts={posts}
                           />
                        ))
                     ) : (
                        <div className='text-white fw-bold mt-5'>No result ....</div>
                     )}
                  </div>
               </div>
            </div>
            <div className='col-lg-3'>
               <div className='timeline_right'>
                  <Suggestions />
               </div>
            </div>
         </div>
      </>
   );
};

export default TimeLine;
