import consts from '@/consts';
import Logo from '@assets/logo.svg';
import useClassList from '@hooks/useClasslist';
import styles from './header.module.scss';

const Header = () => {
  const style = useClassList(styles);

  return (
    <header className={style('header')}>
      <img src={Logo} alt="Logo" className={style('header-logo')} />
      {consts.NAME}
    </header>
  );
};

export default Header;
