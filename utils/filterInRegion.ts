import { fetchData } from './fetchData';
import { DataFetch } from '../types/datafetch';
import React from 'react';

export const filterInRegion = <T>(
  state: DataFetch[],
  setState: React.Dispatch<React.SetStateAction<DataFetch[]>>,
  countryRegion: string
) => {
  const filterCountriesInRegion = [...state].filter((country) => {
    return country.region === countryRegion;
  });
  console.log(filterCountriesInRegion);
  // let countries: DataFetch[] | undefined;
  // countries = (await fetchData()) as DataFetch[];
  const newSort = [...filterCountriesInRegion].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setState(newSort);
};
