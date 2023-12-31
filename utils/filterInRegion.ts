import React from 'react';
import { DataFetch } from '@/types/datafetch';

export const filterInRegion = <T>(
  state: DataFetch[],
  setState: React.Dispatch<React.SetStateAction<DataFetch[]>>,
  countryRegion: string,
  setState2: React.Dispatch<React.SetStateAction<number>>
) => {
  const filterCountriesInRegion = [...state].filter((country) => {
    return country.region === countryRegion;
  });
  const newSort = [...filterCountriesInRegion].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setState(newSort);
  setState2(newSort.length);
};
