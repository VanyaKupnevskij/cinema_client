import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Tab from '../../../../ui/Tab';
import { useEffect, useState } from 'react';
import Table from '../../../../ui/Table';
import ModuleMain from '../../../../modules/InfoSession/components/ModuleMain';

function CinemaPage() {
  const [titles, setTitles] = useState([]);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const titlesIncome = ['Дата', 'Прибуток'];
    const listIncome = [
      ['20.09.2023', '1 300 $'],
      ['22.09.2023', '2 100 $'],
      ['22.09.2023', '950 $'],
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
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={`${styles.block} ${styles.block_head}`}>Block Title cinema</div>
          <div className={styles.block}>
            <Tab titles={titles} contents={contents} />
          </div>
          <div className={styles.block}>
            <ModuleMain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaPage;
