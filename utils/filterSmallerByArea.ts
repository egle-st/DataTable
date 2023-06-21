import React from 'react';
import { DataFetch } from '@/types/datafetch';

export const filterSmallerByArea = <T>(
  state: DataFetch[],
  setState: React.Dispatch<React.SetStateAction<DataFetch[]>>,
  countryName: string,
  setState2: React.Dispatch<React.SetStateAction<number>>
) => {
  const filterCountryArea = [...state]
    .filter((country) => {
      return country.name === countryName;
    })
    .map((country) => {
      return country.area;
    });
  const filterSmallerThanCountry = [...state].filter((country) => {
    return country.area < filterCountryArea[0];
  });
  const newSort = [...filterSmallerThanCountry].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setState(newSort);
  setState2(newSort.length);
};
