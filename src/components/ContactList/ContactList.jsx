import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectIsError, selectIsLoading } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { selectFilteredContacts } from '../../redux/filters/slice';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectToken } from '../../redux/auth/selectors';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (isLoading) {
      const notifyPromise = new Promise((resolve, reject) => {
        !isError ? resolve() : reject();
      });

      toast.promise(notifyPromise, {
        loading: 'Loading',
        success: 'Successfully completed!',
        error: 'Oops, please reload the page!',
      });
    }
  }, [isLoading, isError]);

  return (
    <>
      <ul className={s.contactList}>
        {contacts.length > 0
          ? contacts.map(contact => <Contact key={contact.id} {...contact} />)
          : !isLoading && !isError && <p>Contacts not found</p>}
      </ul>
      <Toaster />
    </>
  );
}
