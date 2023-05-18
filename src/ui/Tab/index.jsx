import { useState } from 'react';
import styles from './style.module.scss';

function Tab({ titles, contents }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(id) {
    setActiveIndex(id);
  }

  return (
    <div className={styles.tab}>
      <nav className={styles.tab_controls}>
        {titles.map((title, id) => {
          const _className =
            styles.tab_link + ' ' + (id === activeIndex ? styles.tab_link__active : '');
          return (
            <button key={title} className={_className} onClick={() => handleClick(id)}>
              {title}
            </button>
          );
        })}
      </nav>
      <div className={styles.tab_inner}>
        {contents.map((content, id) => {
          const _className =
            styles.tab_content + ' ' + (id === activeIndex ? styles.tab_content__active : '');
          return (
            <div key={id} className={_className}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tab;
