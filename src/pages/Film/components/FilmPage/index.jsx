import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

function FilmPage() {
  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={styles.block}>
            <span>Block Buttons</span>
          </div>
          <div className={`${styles.block} ${styles.block_component}`}>Block Info Film</div>
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
