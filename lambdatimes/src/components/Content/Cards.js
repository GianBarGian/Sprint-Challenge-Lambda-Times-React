import React, { Component } from 'react';
import Card from './Card';
import PT from 'prop-types';

const Cards = ({ cards }) => {
  return (
    <div className="cards-container">
      {
        cards.map(card => <Card key={card.headline} card={card}/>)
      }
    </div>
  )
}

Cards.propTypes = {
  cards: PT.arrayOf(PT.shape({
    headline: PT.string.isRequired,
    tab: PT.string.isRequired,
    img: PT.string.isRequired,
    author: PT.string.isRequired,
  }).isRequired).isRequired
}
export default Cards;