import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { registerUser } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as Yup from 'yup';
import s from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const isLoadIng = useSelector(selectIsLoggedIn);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(registerUser(userData));
    options.resetForm();
  };

  if (isLoadIng) {
    return <Navigate to="/" />;
  }

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            className={s.input}
            name="name"
            placeholder="Enter your name"
          />
          <Field
            className={s.input}
            name="email"
            placeholder="Enter your email"
          />
          <Field
            className={s.input}
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Register</button>
          <p className={s.text}>
            Do you already have an account?
            <span>
              <Link to="/login">Sign in</Link>
            </span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
