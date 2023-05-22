import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

import ListSessions from '../../../../modules/ListSessions';
import InfoCinema from '../../../../modules/InfoCinema';
import TitleCinema from '../../../../modules/TitleCinema';

function CinemaPage() {
  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={`${styles.block} ${styles.block_head}`}>
            <TitleCinema />
          </div>
          <div className={styles.block}>
            <InfoCinema />
          </div>
          <div className={styles.block}>
            <ListSessions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CinemaPage;
