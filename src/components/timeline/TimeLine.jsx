import React from 'react';
import './TimeLine.css'
import Suggestions from './Suggestions.jsx';

const TimeLine = () => {
    return (
        <div className='d-flex'>
            <div className="timeline_left col-9">
                Timeline
            </div>
            <div className="timeline_right col-3">
                <Suggestions/>
            </div>
        </div>
    );
};

export default TimeLine;