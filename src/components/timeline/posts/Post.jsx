import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TelegramIcon from '@mui/icons-material/Telegram';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { PostService } from '../../../services/Api.js';

const Post = ({ post, setPosts, posts }) => {
   const service = new PostService();
   const [liked, setLiked] = useState(true);
   const [dispalyChat, setDisplayChat] = useState(false);
   const [message, setMessage] = useState('');

   const handleLikedClick = (id) => {
      setLiked(!liked);
      const filtredPost = posts.filter((post) => post.id === id);
      if (liked) {
         filtredPost[0].likes++;
      } else {
         filtredPost[0].likes--;
      }
   };

   const handleChatChange = (e) => {
      setMessage(e.target.value);
   };

   const handleChatSubmit = (id) => {
      // e.preventDefault();
      //Js en dur
      // if (message) {
      //    const filtredPost = posts.filter((post) => post.id === id);
      //    filtredPost[0].comments.push(message);
      //    setPosts([...posts]);
      // }
      if (message) {
         const filtredPost = posts.filter((post) => post.id === id);
         filtredPost[0].comments.push(message);
         setPosts([...posts]);
         service
            .addComment({ message: message, postId: id })
            .then((res) => {
               console.log(res.data);
            })
            .catch((e) => console.log(e.message));
      }
   };

   const handleDelete = (id) => {
      const isTrue = confirm('Are you sûr?');
      if (isTrue) {
         const filtredPosts = posts.filter((post) => post.id !== id);
         setPosts([...filtredPosts]);
      }
   };

   return (
      <div className='post'>
         <div className='post_header'>
            <div className='post_headerAuthor'>
               <Avatar>{post.username.charAt(0).toUpperCase()}</Avatar>
               {post.username}
               <span>{post.createdAt}</span>
            </div>
            <MoreHorizIcon />
         </div>
         <div className='post_image'>
            <img
               src={post.imageUrl}
               alt={`image-${post.username}`}
               className='img-fluid w-100'
            />
         </div>
         <div className='post_footer'>
            <div className='post_footerIcons'>
               <div className='post_iconsMain'>
                  <FavoriteBorderIcon
                     className={`postIcon ${!liked && 'text-danger'}`}
                     onClick={() => handleLikedClick(post.id)}
                  />
                  <ChatBubbleOutlineIcon
                     className='postIcon position-relative'
                     onClick={() => setDisplayChat(!dispalyChat)}
                  />
                  {post.comments.length > 0 && (
                     <span
                        className='me-1 bg-success rounded-2 p-1'
                     >
                        {post.comments.length}
                     </span>
                  )}
                  <TelegramIcon className='postIcon' />
               </div>
               <div className='post_iconsSave'>
                  <DeleteIcon
                     className='postIcon text-danger'
                     onClick={() => handleDelete(post.id)}
                  />
               </div>
            </div>
            Liked by {post.likes} people
            {dispalyChat && (
               <>
                  <textarea
                     className='form-control mt-2'
                     onChange={(e) => handleChatChange(e)}
                     defaultValue='Comment this post ...'
                  ></textarea>
                  <SendIcon onClick={(e) => handleChatSubmit(post.id)} />
               </>
            )}
            {post.comments.length > 0 &&
               post.comments.length < 4 &&
               post.comments.map((comment, index) => (
                  <div
                     key={index}
                     className='bg-dark-subtle rounded p-2 mt-2 text-dark'
                  >
                     {comment.message}
                  </div>
               ))}
         </div>
      </div>
   );
};

export default Post;
