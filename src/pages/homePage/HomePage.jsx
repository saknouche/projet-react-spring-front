import React from 'react';
import SideNav from '../../components/navigation/SideNav.jsx';
import TimeLine from '../../components/timeline/TimeLine.jsx';
import './HomePage.css'
import Post from '../../components/Post.jsx';


const HomePage = () => {
    return (
        <div className='homePage d-flex'>
            <div className="homePage_nav col-2">
                <SideNav/>
            </div>
            <div className="homePage_timeline col-10">
                <TimeLine/>
                {/* <Post/> */}
            </div>
        </div>
    );
};

export default HomePage;