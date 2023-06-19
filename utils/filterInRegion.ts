import React from 'react';
import { DataFetch } from '@/types/datafetch';

export const filterInRegion = <T>(
  state: DataFetch[],
  setState: React.Dispatch<React.SetStateAction<DataFetch[]>>,
  countryRegion: string
) => {
  const filterCountriesInRegion = [...state].filter((country) => {
    return country.region === countryRegion;
  });
  const newSort = [...filterCountriesInRegion].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setState(newSort);
};
