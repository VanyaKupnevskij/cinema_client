import Button from '../../../../ui/Button';
import styles from './style.module.scss';

function GeneralInfo() {
  function handleBuy() {
    alert('buy session');
  }

  return (
    <div className={styles.root}>
      <dl className={styles.list}>
        <div className={styles.list_item}>
          <dt className={styles.list_title}>Зала:</dt>
          <dd className={styles.list_data}>1</dd>
        </div>

        <div className={styles.list_item}>
          <dt className={styles.list_title}>Місця:</dt>
          <dd className={styles.list_data}>5 / 30</dd>
        </div>

        <div className={styles.list_item}>
          <dt className={styles.list_title}>Ціна:</dt>
          <dd className={styles.list_data}>
            <b>12 $</b>
          </dd>
        </div>
      </dl>

      <Button className={styles.button_buy} handleClick={handleBuy}>
        Купити
      </Button>
    </div>
  );
}

export default GeneralInfo;
