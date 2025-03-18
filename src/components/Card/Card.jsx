import React from 'react';
import styles from './Card.module.css'

export const Card = (props) => {
  return <div className={styles.card}>
          <h3>{props.title}</h3>
          <img src={props.img} alt={`${props.title}`} className={styles.imgf} />
          <p>Year: {props.year}</p>
          <p>Genre: {props.genre}</p>
          <p>Rating: {props.rating}</p>
      </div>
}