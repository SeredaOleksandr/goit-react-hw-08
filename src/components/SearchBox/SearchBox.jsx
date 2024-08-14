import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const currentInput = useSelector(selectNameFilter);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        type="text"
        value={currentInput || ''}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
