import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = (props) => {
  return (
    <div className='CardList'>
      {props.cards.map((card, index) => {
        return <Card key={index} {...card}/>
      })}
    </div>
  )
}

export default CardList;
