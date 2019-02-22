import React from 'react';
import PT from 'prop-types';

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="headline">{card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={card.img} />
        </div>
        <span>By {card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PT.shape({
    headline: PT.string.isRequired,
    tab: PT.string.isRequired,
    img: PT.string.isRequired,
    author: PT.string.isRequired,
  }).isRequired
}
export default Card;
