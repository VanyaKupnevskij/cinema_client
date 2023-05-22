import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Button from '../../../../ui/Button';
import ListCinemas from '../../../../modules/ListCinemas';

function MainPage() {
  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={styles.block}>
            <Button isLink linkPath="/cinema/create">
              Додати кінотеатр
            </Button>
          </div>
          <div className={`${styles.block} ${styles.block_component}`}>
            <ListCinemas />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
