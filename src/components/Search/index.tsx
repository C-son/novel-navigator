import { searchBooks } from '@/service/api-services';
import { iSearchResult } from '@/types';
import Result from '@components/Result';
import useClassList from '@hooks/useClasslist';
import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import Loader from '../Loader';
import styles from './search.module.scss';

const Search = () => {
  const style = useClassList(styles);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<iSearchResult>(localStorage.getItem('result') ? JSON.parse(localStorage.getItem('result')!) : {});
  const [inputValue, setInputValue] = useState(localStorage.getItem('search') || '');
  const [error, setError] = useState('');

  const getBooks = async () => {
    setLoading(true);
    setError('');

    searchBooks(encodeURIComponent(inputValue))
      .then(response => {
        setResult(response as iSearchResult);
      })
      .catch(() => {
        setError('Error fetching book');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    getBooks();
  };

  return (
    <>
      <div className={style('search')}>
        <label htmlFor="search" className={style('search-label')}>
          Search for books
        </label>
        <form className={style('search-form')} onSubmit={submitHandler}>
          <input
            id="search"
            type="text"
            className={style('search-input')}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button type="submit" className={style('search-btn', loading && 'search-btn-loading')} disabled={!inputValue} aria-label="Search">
            {loading ? <Loader /> : <SearchIcon />}
          </button>
        </form>
      </div>
      {error && !loading && <div className={style('search-error')}>{error}</div>}
      {Object.keys(result).length && !loading ? <Result result={result} /> : null}
    </>
  );
};

export default Search;
