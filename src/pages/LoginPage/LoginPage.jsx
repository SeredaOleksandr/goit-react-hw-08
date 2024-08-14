import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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

export default LoginPage;
