import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';

function FilmCreatePage() {
  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={`${styles.block} ${styles.block_component}`}>
            Block Input data Session
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmCreatePage;
