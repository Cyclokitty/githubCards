import React from 'react';
import Card from './Card';
import data from './data';
import './CardList.css';

const CardList = (props) => {
  return (
    <div className='CardList'>
      {props.cards.map(card => {
        return <Card {...card}/>
      })}
    </div>
  )
}

export default CardList;
