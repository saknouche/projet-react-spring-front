import React, { useEffect, useState } from 'react';
import './TimeLine.css';
import Suggestions from './Suggestions.jsx';
import Post from './posts/Post.jsx';
import { data } from '../../data';

const TimeLine = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      setPosts(data);
   }, []);

   return (
      <div className='timeline row justify-content-center'>
         <div className='col-lg-9'>
            <div className='timeline_left'>
               <div className='timeline_posts d-flex flex-column align-items-center'>
                  {posts.map((post) => (
                     <Post key={post.id} post={post} setPosts={setPosts} posts={posts}/>
                  ))}
               </div>
            </div>
         </div>
         <div className='col-lg-3'>
            <div className='timeline_right'>
               <Suggestions />
            </div>
         </div>
      </div>
   );
};

export default TimeLine;
