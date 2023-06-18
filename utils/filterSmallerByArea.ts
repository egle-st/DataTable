import { fetchData } from './fetchData';
import { DataFetch } from '../types/datafetch';
import React from 'react';

export const filterSmallerByArea = <T>(
  state: DataFetch[],
  setState: React.Dispatch<React.SetStateAction<DataFetch[]>>,
  countryName: string
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
  // let countries: DataFetch[] | undefined;
  // countries = (await fetchData()) as DataFetch[];
  const newSort = [...filterSmallerThanCountry].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  setState(newSort);
};
