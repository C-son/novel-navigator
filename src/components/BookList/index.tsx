import useClassList from '@/hooks/useClasslist';
import { IBook, IBookListItemProps } from '@/types';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './booklist.module.scss';

const BookListItem = ({ children, isLink, to }: IBookListItemProps) => {
  const style = useClassList(styles);

  return isLink ? (
    <Link to={to} className={style('booklist')}>
      {children}
    </Link>
  ) : (
    <div className={style('booklist')}>{children}</div>
  );
};

const BookList = ({ book }: { book: IBook }) => {
  const style = useClassList(styles);
  const key = book.key?.split('/').pop();

  return (
    <BookListItem to={`/book/${key}`} isLink={!!book.key}>
      <div className={style('booklist-cover')}>
        <img
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`}
          alt={book.title}
          loading="lazy"
          className={style('booklist-poster')}
        />
      </div>
      <div className={style('booklist-data')}>
        <div>{book.title}</div>
        <div className={style('booklist-right')}>
          <div>{book.author_name?.join(', ') ?? '-'}</div>
          <div>{book.first_publish_year ?? '-'}</div>
        </div>
      </div>
      <ChevronRight className={style('booklist-arrow')} />
    </BookListItem>
  );
};

export default BookList;
