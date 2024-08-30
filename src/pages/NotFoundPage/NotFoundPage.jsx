import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <h2 className={s.not_found_text}>
      Oops, look like this page doesn`t exist❌
    </h2>
  );
};

export default NotFound;
