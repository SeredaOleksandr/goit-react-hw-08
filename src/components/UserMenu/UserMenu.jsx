import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operations';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  console.log(token);
  return (
    <div className={s.nav_item}>
      <p>Welcome, {user.name}!</p>
      <button onClick={() => dispatch(logoutUser(token))}>Signout</button>
    </div>
  );
};

export default UserMenu;
