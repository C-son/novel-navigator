import Book from '@/components/Book';
import Error from '@components/Error';
import Search from '@components/Search';
import { createHashRouter } from 'react-router-dom';

export const routes = createHashRouter([
  {
    path: '/',
    element: <Search />,
    errorElement: <Error />,
  },
  {
    path: '/book/:id',
    element: <Book />,
    errorElement: <Error />,
  },
]);
