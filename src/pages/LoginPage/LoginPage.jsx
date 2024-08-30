import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import s from './Login.module.css';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    console.log(isLoggedIn);
    return <Navigate to="/" />;
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.registration_header}>Login form</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
