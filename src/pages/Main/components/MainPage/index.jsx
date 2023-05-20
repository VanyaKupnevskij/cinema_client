import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import Button, { SecondaryButton } from '../../../../ui/Button';
import Card from '../../../../components/Card';

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
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
