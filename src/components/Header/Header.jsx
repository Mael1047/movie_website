import React from 'react';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css'

export const Header = () => {
  return <header className={styles.header}>
    <Logo />
    <h1 className={styles.title}>КиноРейтинг</h1>
    <img src="\public\user_test.png" alt="Иконка пользователя" width={50}/>
  </header>;
}
