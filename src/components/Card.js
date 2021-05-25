import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.item}>
      <img src={props.image} />
      <p>{props.title}</p>
    </div>
  );
}

export default Card;
