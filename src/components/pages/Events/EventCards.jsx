import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import "./NewCards.css";

const EventCards = (...props) => {
  return (
    <>
      <Card className="newsP__card">
        <Card.Img
          variant="top"
          src={props[0].image}
          className="newsP__card__img"
        />
        <p className="newsText">{props[0].title}</p>
        <Card.Body className="newsP__card__body">
          <p>
            <Link to={`/newsPage/${props[0].idx}`} className="card__down">
              {" "}
            Davomi{" "}
            </Link>
          </p>
        </Card.Body>
      </Card>
    </>
  );
};
export default EventCards;
