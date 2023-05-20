import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import DatePicker from '../../../../ui/DatePicker';
import Button from '../../../../ui/Button';

function GeneralInfo({ onChangeDate }) {
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const date = new Date(Date.now());
    const dateFormated =
      date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
    setMinDate(dateFormated);
  }, []);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Сеанси</h2>
      <div className={styles.control}>
        <div className={styles.control_date}>
          <span>Дата:</span>
          <DatePicker
            min={minDate}
            init={minDate}
            name={'date'}
            label={'Date'}
            onChange={onChangeDate}
          />
        </div>
        <Button isLink linkPath="/session/create" className={styles.control_create}>
          Додати сеанс
        </Button>
      </div>
    </div>
  );
}

export default GeneralInfo;
