import './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from '../routes/PrivateRoute';
import { RestrictedRoute } from '../routes/RestrictedRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route intex element={<HomePage />} />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
