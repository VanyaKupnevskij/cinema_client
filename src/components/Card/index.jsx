import { SecondaryButton } from '../../ui/Button';
import styles from './style.module.scss';

import deleteImage from '../images/delete.svg';

function Card({ title, subtitle, info_1, info_2, handleDelete, handleClick }) {
  return (
    <div className={styles.root}>
      <div className={styles.main_info} onClick={handleClick}>
        <h3>{title}</h3>
        <span>{subtitle}</span>
      </div>
      <div className={styles.info}>
        <span>{info_1}</span>
        <span>{info_2}</span>
      </div>
      <SecondaryButton className={styles.delete} handleClick={handleDelete}>
        <img className={styles.delete_icon} src={deleteImage} alt="delete" />
        <span className={styles.delete_caption}>Видалити</span>
      </SecondaryButton>
    </div>
  );
}

export default Card;
