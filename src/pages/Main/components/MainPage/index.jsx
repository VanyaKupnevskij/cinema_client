import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Button from '../../../../ui/Button';
import ListCards from '../../../../components/ListCards';
import { useEffect, useState } from 'react';

function MainPage() {
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
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={styles.block}>
            <Button isLink linkPath="/cinema/create">
              Додати кінотеатр
            </Button>
          </div>
          <div className={`${styles.block} ${styles.block_component}`}>
            <ListCards datas={cinemas} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
