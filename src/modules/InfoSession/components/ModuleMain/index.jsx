import styles from './style.module.scss';
import GeneralInfo from '../GeneralInfo';

function ModuleMain() {
  return (
    <div className={styles.root}>
      <GeneralInfo />
    </div>
  );
}

export default ModuleMain;
