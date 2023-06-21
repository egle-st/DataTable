import React from 'react';

export const sortByPropertyAscending = <T>(
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>,
  property: keyof T,
  setState2: React.Dispatch<React.SetStateAction<number>>
) => {
  let newSort = [...state].sort((a, b) => {
    return String(a[property]).localeCompare(String(b[property]));
  });
  setState(newSort);
  setState2(newSort.length);
};
