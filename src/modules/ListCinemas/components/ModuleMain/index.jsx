import { useEffect, useState } from 'react';
import ListCards from '../../../../components/ListCards';
import styles from './style.module.scss';

function ModuleMain() {
  const [cinemas, setCinemas] = useState([]);

  useEffect(() => {
    const mockCinemas = [
      {
        linkPath: '/cinema/348ljskd',
        title: 'Назва Кінотеатру №1',
        subtitle: 'вул. Мозаїка',
      },
      {
        linkPath: '/cinema/348ljskd',
        title: 'Назва Кінотеатру',
        subtitle: 'вул. Гвоздарьова',
      },
      {
        linkPath: '/cinema/348ljskd',
        title: 'Супер Кіно',
        subtitle: 'вул. Бажана',
      },
    ];

    setCinemas(mockCinemas);
  }, []);

  return (
    <div className={styles.root}>
      <ListCards datas={cinemas} />
    </div>
  );
}

export default ModuleMain;
