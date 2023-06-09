import { useEffect, useState } from 'react';
import styles from './style.module.scss';

function DatePicker({ style, className, name, label, min, max, init, onChange }) {
  const [date, setDate] = useState(init);
  const _className = `${styles.root} ${className}`;

  useEffect(() => {
    setDate(init);
  }, [init]);

  function handleChange(e) {
    setDate(e.target.value);

    onChange(e.target.value);
  }

  return (
    <div style={style} className={_className}>
      <input
        className={styles.input}
        type="date"
        min={min}
        max={max}
        value={date}
        onChange={handleChange}
        id={name}
        name={name}
      />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default DatePicker;
