import styles from './style.module.scss';

function GeneralInfo() {
  return (
    <div className={styles.root}>
      <dl className={styles.list}>
        <dt className={styles.list_title}>Зали:</dt>
        <dd className={styles.list_data}>1</dd>

        <dt className={styles.list_title}>Місця:</dt>
        <dd className={styles.list_data}>5 / 30</dd>

        <dt className={styles.list_title}>Ціна:</dt>
        <dd className={styles.list_data}>12 $</dd>
      </dl>
    </div>
  );
}

export default GeneralInfo;
