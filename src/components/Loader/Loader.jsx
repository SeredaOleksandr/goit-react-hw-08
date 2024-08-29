import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.wrap_loader}>
      <ThreeDots
        visible={true}
        wrapperClass={s.loader}
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
