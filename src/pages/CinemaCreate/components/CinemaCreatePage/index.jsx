import styles from './style.module.scss';
import globalStyles from '../../../../styles/global.module.scss';
import DatePicker from '../../../../ui/DatePicker';
import SelectInput from '../../../../ui/SelectInput';
import TextInput from '../../../../ui/TextInput';
import { useEffect, useState } from 'react';

function FilmCreatePage() {
  const [films, setFilms] = useState([]);
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const listFilms = [
      { key: 'lsfe8i8rj', value: 'Avatar' },
      { key: 'sefsee4hy', value: 'Story Toy 3' },
      { key: 'Jl45ie1fe', value: 'Super car' },
    ];

    setFilms(listFilms);

    const date = new Date(Date.now());
    const dateFormated =
      date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate();
    setMinDate(dateFormated);
  }, []);

  return (
    <div className={globalStyles.wrapper}>
      <div className={globalStyles.container}>
        <div className={globalStyles.inner}>
          <div className={`${styles.block} ${styles.block_component}`}>
            <DatePicker min={minDate} init={minDate} name={'date'} label={'Date'} />
            <SelectInput
              options={films}
              name={'Film'}
              placeholder={'Select film...'}
              label={'Film'}
            />
            <TextInput name={'name'} placeholder={'Enter name cinema...'} label={'Name cinema'} />
            <TextInput name={'ganre'} placeholder={'Enter ganre cinema...'} label={'Ganre'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmCreatePage;
