import { useEffect, useState } from 'react';
import styles from './style.module.scss';

import Tab from '../../../../ui/Tab';
import Table from '../../../../ui/Table';

function ModuleMain() {
  const [titles, setTitles] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const titlesIncome = ['Дата', 'Прибуток'];
    const listIncome = [
      ['20.09.2023', '1 300 $'],
      ['22.09.2023', '2 100 $'],
      ['23.09.2023', '950 $'],
      ['26.09.2023', '9 150 $'],
      ['26.09.2023', '3 800 $'],
    ];

    const titlesHalls = ['№', 'Статус', 'Місць'];
    const listHalls = [
      ['1', 'BUDGET', '30'],
      ['2', 'STANDART', '40'],
      ['3', 'PREMIUM', '15'],
    ];

    setContents([
      <Table style={{ marginTop: '1.5rem' }} titles={titlesIncome} contents={listIncome} />,
      <Table style={{ marginTop: '1.5rem' }} titles={titlesHalls} contents={listHalls} />,
    ]);

    setTitles(['Прибутки', 'Зали']);
  }, []);

  return (
    <div className={styles.root}>
      <Tab titles={titles} contents={contents} />
    </div>
  );
}

export default ModuleMain;
