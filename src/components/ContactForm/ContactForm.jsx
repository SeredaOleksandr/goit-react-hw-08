import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Phone number must be in the format 111-111-1111'
      )
      .required('Required'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, options) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    options.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.error} name="name" component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
            <ErrorMessage className={s.error} name="number" component="div" />
          </label>
          <button type="submit">Add contacts</button>
        </Form>
      </Formik>
    </div>
  );
}
