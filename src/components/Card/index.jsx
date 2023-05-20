import { SecondaryButton } from '../../ui/Button';
import styles from './style.module.scss';

function Card() {
  function handleDelete() {
    alert('delete');
  }

  return (
    <div className={styles.root}>
      <div className={styles.main_info}>
        <h3>Назва Кінотеатру №1</h3>
        <span>вул. Адреса</span>
      </div>
      <span>Місця: 4/30</span>
      <span>
        Ціна: <b>12 $</b>
      </span>
      <SecondaryButton handleClick={handleDelete}>Видалити</SecondaryButton>
    </div>
  );
}

export default Card;
