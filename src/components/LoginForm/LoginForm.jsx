import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginUser } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as Yup from 'yup';

const LoginForm = () => {
  const isLoadIng = useSelector(selectIsLoggedIn);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .required('Required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginUser(values));
    options.resetForm();
  };

  if (isLoadIng) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
          <p>
            You don't have an account?
            <span>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
