import Card from '../Card';
import styles from './style.module.scss';

function ListCards({ datas }) {
  function handleDelete() {
    alert('delete');
  }

  function handleClick() {}

  return (
    <div className={styles.root}>
      {datas.map((data, id) => (
        <Card
          key={id}
          linkPath={data.linkPath}
          title={data.title}
          subtitle={data.subtitle}
          info_1={data.info_1}
          info_2={data.info_2}
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default ListCards;
