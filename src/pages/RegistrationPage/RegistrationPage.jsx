import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import s from './Register.module.css';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.wrapper}>
      <h2 className={s.registration_header}>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
