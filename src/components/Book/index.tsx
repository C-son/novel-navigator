import useClassList from '@/hooks/useClasslist';
import { getBook } from '@/service/api-services';
import { IWork } from '@/types';
import Error from '@components/Error';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import styles from './book.module.scss';

const Book = () => {
  const style = useClassList(styles);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const bookKey = useParams<{ id: string }>();
  const [book, setBook] = useState<IWork>({} as IWork);

  useEffect(() => {
    if (!bookKey.id) return;

    getBook(bookKey.id)
      .then(response => {
        setBook(response as IWork);
      })
      .catch(() => {
        setError('Error fetching book');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [bookKey.id]);

  if (loading) {
    return (
      <div className={style('book')}>
        <div className={style('book-loading')}>
          <Loader /> Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={style('book')}>
      <header className={style('book-header')}>
        <button className={style('book-back')} onClick={() => window.history.back()} aria-label="Back">
          <ChevronLeft />
        </button>
        {book.title && <h1 className={style('book-title')}>{book.title}</h1>}
      </header>
      <div className={style('book-content')}>
        {book.covers?.length && (
          <div className={style('book-cover')}>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`}
              alt={book.title}
              loading="lazy"
              className={style('book-poster')}
            />
          </div>
        )}
        <div className={style('book-data')}>
          {book.description && typeof book.description === 'string' && <div>{book.description}</div>}
          {book.first_publish_date && (
            <div>
              <span className={style('book-label')}>Published:</span> {book.first_publish_date}
            </div>
          )}
          {book.links?.length && (
            <div>
              <span className={style('book-label')}>Links:</span>
              {book.links.map(link => (
                <div className={style('book-link')}>
                  <a key={link.title} href={link.url}>
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
