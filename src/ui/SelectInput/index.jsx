import styles from './style.module.scss';
import arrowImage from '../images/Arrow.svg';

function SelectInput({ style, className, options = [], name, placeholder = '', label }) {
  return (
    <div className={styles.root}>
      <select className={styles.input} id={name} name={name} placeholder={placeholder}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <img className={styles.arrow} src={arrowImage} alt="arrow" />
    </div>
  );
}

export default SelectInput;
