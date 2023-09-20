import React from 'react';
import './Suggestion.css';
import { Avatar } from '@mui/material';

const Suggestions = () => {
   return (
      <div className='suggestions'>
         <div className='suggestions__title'>Suggestions for you</div>
         <div className='suggestions__usernames'>
            <div className='suggestions__username'>
               <div className='username__left'>
                  <span className='avatar'>
                     <Avatar>S</Avatar>
                  </span>
                  <div className='username__info'>
                     <span className='username'>Sadev_</span>
                     <span className='relation'>New to Instagram</span>
                  </div>
               </div>
               <button className='follow__button'>Follow</button>
            </div>
         </div>
      </div>
   );
};

export default Suggestions;
