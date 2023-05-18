import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Tab from '../../../../ui/Tab';
import { useEffect, useState } from 'react';

function CinemaPage() {
  const [defenitionList, setDefenitionList] = useState({ titles: [], contents: [] });

  useEffect(() => {
    setDefenitionList({
      titles: ['Прибутки', 'Зали'],
      contents: [<button>Income</button>, 'Halls'],
    });
  }, []);

  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={`${styles.block} ${styles.block_head}`}>Block Title cinema</div>
          <div className={styles.block}>
            <Tab titles={defenitionList.titles} contents={defenitionList.contents} />
          </div>
          <div className={styles.block}>Block list sessions</div>
        </div>
      </div>
    </div>
  );
}

export default CinemaPage;
