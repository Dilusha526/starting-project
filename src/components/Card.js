import React from "react";
import "./Card.css";

function Card(props) {
  const classesFull = "card " + props.className;

  return <div className={classesFull}>{props.children}</div>;
}

export default Card;
