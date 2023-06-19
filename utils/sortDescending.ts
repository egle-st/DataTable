import React from 'react';

export const sortByPropertyDescending = <T>(
  state: T[],
  setState: React.Dispatch<React.SetStateAction<T[]>>,
  property: keyof T
) => {
  let newSort = [...state]
    .sort((a, b) => {
      return String(a[property]).localeCompare(String(b[property]));
    })
    .reverse();
  setState(newSort);
};
