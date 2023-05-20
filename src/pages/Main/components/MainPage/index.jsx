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
        title: 'Назва Кінотеатру №1',
        subtitle: 'вул. Мозаїка',
        info_1: 'Місця: 4/30',
        info_2: (
          <>
            Ціна: <b>{15} $</b>
          </>
        ),
      },
      {
        title: 'Назва Кінотеатру',
        subtitle: 'вул. Гвоздарьова',
        info_1: 'Місця: 10/15',
        info_2: (
          <>
            Ціна: <b>{12} $</b>
          </>
        ),
      },
      {
        title: 'Супер Кіно',
        subtitle: 'вул. Бажана',
        info_1: 'Місця: 1/20',
        info_2: (
          <>
            Ціна: <b>{10} $</b>
          </>
        ),
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
