import { useEffect, useState } from 'react';
import styles from './style.module.scss';

function ModuleMain() {
  const [title, setTitle] = useState('');
  const [adress, setAdress] = useState('');

  useEffect(() => {
    setTitle('Назва Кінотеатру');
    setAdress('вул. Адреса');
  }, []);

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.adress}>{adress}</span>
    </div>
  );
}

export default ModuleMain;
