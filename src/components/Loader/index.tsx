import useClassList from '@hooks/useClasslist';
import { LoaderCircle } from 'lucide-react';
import styles from './loader.module.scss';

const Loader = () => {
  const style = useClassList(styles);

  return <LoaderCircle className={style('loader')} />;
};

export default Loader;
