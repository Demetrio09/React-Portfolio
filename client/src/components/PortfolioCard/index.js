import React from "react";
import cards from "../../utils/cards";

const Card = () => {
  console.log(cards);

  const cardsEl = cards.map((card) => (
    <div className="col mb-4" key={card.id}>
      <div className="card">
        <img
          className="card-img-top"
          width="150px"
          height="250px"
          src={card.src}
          alt={card.appName}
        />
        <div className="card-body">
          <h5 className="card-title">
            <a href={card.href} target="_blank" rel="noopener noreferrer">
              {card.appName}
            </a>
          </h5>
          <p className="card-text">{card.text}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <main className="col-12 col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
      <div className="row row-cols-1 row-cols-md-3">{cardsEl}</div>
    </main>
  );
};

export default Card;
