import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Button, { SecondaryButton } from '../../../../ui/Button';

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
          <div className={`${styles.block} ${styles.block_component}`}>Block List cinemas</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
