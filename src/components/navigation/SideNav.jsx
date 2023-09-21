import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import './SideNav.css';
import { Link } from 'react-router-dom';

const SideNav = () => {
   return (
      <div className='sideNav'>
         <img
            className='sideNav_logo'
            src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png'
            alt='instagram logo'
         />
         <div className='d-flex flex-column'>
            <Link className='sideNav_button text-decoration-none' to={'/'}>
               <HomeIcon />
               <span>Home</span>
            </Link>
            <button className='sideNav_button'>
               <SearchIcon />
               <span>Search</span>
            </button>
            <button className='sideNav_button'>
               <ExploreIcon />
               <span>Explore</span>
            </button>
            <button className='sideNav_button'>
               <SlideshowIcon />
               <span>Reels</span>
            </button>
            <button className='sideNav_button'>
               <ChatIcon />
               <span>Message</span>
            </button>
            <button className='sideNav_button'>
               <FavoriteBorderIcon />
               <span>Notifications</span>
            </button>
            <Link className='sideNav_button text-decoration-none'>
               <AddCircleOutlineIcon />
               <span>Create</span>
            </Link>
         </div>
         <div className='sideNav_more'>
            <button className='sideNav_button'>
               <MenuIcon />
               <span>More</span>
            </button>
         </div>
      </div>
   );
};

export default SideNav;
