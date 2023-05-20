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
        subtitle: 'Боевик',
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
        subtitle: 'Пригоди',
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
        subtitle: 'Научна фантастика',
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

  return (
    <div className={styles.root}>
      <GeneralInfo />
      <ListCards datas={sessions} />
    </div>
  );
}

export default ModuleMain;
