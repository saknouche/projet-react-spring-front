import React from 'react';
import './Post.css'
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = () => {


    return (
        <div className='post'>
            <div className="post_header">
                <div className="post_headerAuthor">
                    <Avatar>S</Avatar>
                    SaDev <span> 12h</span>
                </div>
                <MoreHorizIcon/>
            </div>
            <div className="post_image">
                <img src="https://images.unsplash.com/photo-1695131402412-e342cbccae53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80" alt="" />
            </div>
            <div className="post_footer">
                <div className="post_footerIcons">
                    <div className="post_iconsMain">
                        <FavoriteBorderIcon className='postIcon'/>
                        <ChatBubbleOutlineIcon className='postIcon'/>
                        <TelegramIcon className='postIcon'/>
                    </div>
                    <div className="post_iconsSave">
                        <BookmarkBorderIcon className='postIcon'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;