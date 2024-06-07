import useClassList from '@/hooks/useClasslist';
import { IBook, iSearchResult } from '@/types';
import BookList from '@components/BookList';
import styles from './result.module.scss';

const Result = ({ result }: { result: iSearchResult }) => {
  const style = useClassList(styles);

  return (
    <div className={style('result')}>
      <h2 className={style('result-title')}>Found {result.numFound} book</h2>
      {result.numFound > 0 && result.docs.map((book: IBook) => <BookList key={book.key} book={book} />)}
    </div>
  );
};

export default Result;
