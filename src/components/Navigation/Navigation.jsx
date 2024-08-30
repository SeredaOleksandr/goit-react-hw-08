// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  // const user = useSelector(selectUser);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();

  return (
    <>
      <ul className={s.nav}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
