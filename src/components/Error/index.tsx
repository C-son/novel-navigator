import useClassList from '@/hooks/useClasslist';
import styles from './error.module.scss';

const Error = () => {
  const style = useClassList(styles);
  localStorage.removeItem('result');
  localStorage.removeItem('search');

  return (
    <div className={style('error')}>
      <h1>Error</h1>
      <p>Something went wrong, we will take a look at this</p>
    </div>
  );
};

export default Error;
