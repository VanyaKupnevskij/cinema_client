import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Button from '../../../../ui/Button';

import InfoSession from '../../../../modules/InfoSession';

function FilmPage() {
  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={styles.block}>
            <Button isLink linkPath="/film/create">
              Додати фільм
            </Button>
          </div>
          <div className={`${styles.block} ${styles.block_component}`}>
            <InfoSession />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmPage;
