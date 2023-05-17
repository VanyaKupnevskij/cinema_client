import styles from './style.module.scss';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.block}>
            <span>Block Buttons</span>
          </div>
          <div className={`${styles.block} ${styles.block_component}`}>Block List cinemas</div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
