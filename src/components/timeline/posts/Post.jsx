import React, { useState } from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Post = ({post}) => {

   return (
      <div className='post'>
         <div className='post_header'>
            <div className='post_headerAuthor'>
               <Avatar>{post.user.charAt(0).toUpperCase()}</Avatar>
               {post.user}<span>{post.timestamp}</span>
            </div>
            <MoreHorizIcon />
         </div>
         <div className='post_image'>
            <img
               src={post.postImage}
               alt={`image-${post.user}`}
            />
         </div>
         <div className='post_footer'>
            <div className='post_footerIcons'>
               <div className='post_iconsMain'>
                  <FavoriteBorderIcon className='postIcon' />
                  <ChatBubbleOutlineIcon className='postIcon' />
                  <TelegramIcon className='postIcon' />
               </div>
               <div className='post_iconsSave'>
                  <BookmarkBorderIcon className='postIcon' />
               </div>
            </div>
            Liked by {post.likes} people
         </div>
      </div>
   );
};

export default Post;
