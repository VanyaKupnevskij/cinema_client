import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

function CinemaPage() {
  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={`${styles.block} ${styles.block_head}`}>Block List cinemas</div>
          <div className={styles.block}>Block info cinemas</div>
          <div className={styles.block}>Block list sessions</div>
        </div>
      </div>
    </div>
  );
}

export default CinemaPage;
