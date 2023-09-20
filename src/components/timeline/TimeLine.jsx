import React from 'react';
import './TimeLine.css'
import Suggestions from './Suggestions.jsx';
import Post from './posts/Post.jsx';

const TimeLine = () => {
    return (
        <div className='d-flex'>
            <div className="timeline_left col-9 justify-content-center">
                <div className="timeline_posts">
                    <Post/>
                </div>
            </div>
            <div className="timeline_right col-3">
                <Suggestions/>
            </div>
        </div>
    );
};

export default TimeLine;