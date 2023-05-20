import styles from './style.module.scss';
import GeneralInfo from '../GeneralInfo';
import { useEffect, useState } from 'react';
import ListCards from '../../../../components/ListCards';

function ModuleMain() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const mockSessions = [
      {
        linkPath: '/film/348ljskd',
        title: 'Форсаж 10',
        subtitle: 'Жанр: Боевик',
        info_1: 'Місця: 4/30',
        info_2: (
          <>
            Ціна: <b>{15} $</b>
          </>
        ),
      },
      {
        linkPath: '/film/348ljskd',
        title: 'Історя іграшок 3',
        subtitle: 'Жанр: Пригоди',
        info_1: 'Місця: 10/15',
        info_2: (
          <>
            Ціна: <b>{12} $</b>
          </>
        ),
      },
      {
        linkPath: '/film/348ljskd',
        title: 'Аватар Шлях води',
        subtitle: 'Жанр: Научна фантастика',
        info_1: 'Місця: 1/20',
        info_2: (
          <>
            Ціна: <b>{10} $</b>
          </>
        ),
      },
    ];

    setSessions(mockSessions);
  }, []);

  function handleChangeDate(newDate) {
    alert(newDate);
  }

  return (
    <div className={styles.root}>
      <GeneralInfo onChangeDate={handleChangeDate} />
      <ListCards datas={sessions} />
    </div>
  );
}

export default ModuleMain;
