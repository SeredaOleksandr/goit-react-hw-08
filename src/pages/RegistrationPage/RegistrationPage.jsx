import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const initialValues = {
    name: '',
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
          <Field name="name" placeholder="Enter your name" />
          <Field name="email" placeholder="Enter your email" />
          <Field
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <button type="submit">Register</button>
          <p>
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

export default RegistrationPage;
