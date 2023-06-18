import { DataFetch } from '../../countries/types/datafetch';

export const fetchData = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v2/all?fields=name,region,area',
      { cache: 'no-store' }
    );
    const data: DataFetch[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
