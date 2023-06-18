import { fetchData } from './fetchData';
import { DataFetch } from '../types/datafetch';
import React from 'react';

export const sortByPropertyAscending = <T>(
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>,
  property: keyof T
) => {
  // let countries: DataFetch[] | undefined;
  // countries = (await fetchData()) as DataFetch[];
  let newSort = [...state].sort((a, b) => {
    return String(a[property]).localeCompare(String(b[property]));
  });
  setState(newSort);
};
