import styles from './style.module.scss';

function TextInput({ style, className, name, placeholder = '', label }) {
  return (
    <div className={styles.root}>
      <input className={styles.input} type="text" id={name} name={name} placeholder={placeholder} />
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}

export default TextInput;
