import { ReactNode } from 'react';

export interface iSearchResult {
  docs: IBook[];
  numFound: number;
  numFoundExact: boolean;
  q: string;
  start: number;
  offset: number | null;
}

export interface IBook {
  key?: string;
  title: string;
  author_name: string[];
  first_publish_year: number;
  cover_i: number;
}

export interface IBookListItemProps {
  children: ReactNode;
  isLink: boolean;
  to: string;
}

export interface IWork {
  title: string;
  key: string;
  description?: string;
  first_publish_date: string;
  covers: number[];
  links: IBookLink[];
}

export interface IBookLink {
  title: string;
  url: string;
}
