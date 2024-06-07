import useClassList from '@/hooks/useClasslist';
import Header from '@components/Header';
import React, { ReactNode } from 'react';
import styles from './layout.module.scss';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const style = useClassList(styles);

  return (
    <div className={style('layout')}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
