import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='Card'>
      <img src={props.avatar_url} width='125' alt='placeholder image'/>
      <div className='name'>
        {props.name}
      </div>
      <div>
        {props.company}
      </div>
    </div>
  );
};

export default Card;
