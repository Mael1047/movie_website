import React from 'react';
import styles from './Main.module.css'
import { Card } from '../Card/Card';
import { movies } from '../../constants/movies';

export const Main = () => {
  return <main className={styles.main}>
    {movies.map((movie) => <Card title=
    {movie.title} rating={movie.rating} img={movie.img}
    year={movie.year} genre={movie.genre}/>)}
  </main>
}
