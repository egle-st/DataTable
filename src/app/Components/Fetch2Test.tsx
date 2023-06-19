import { FC } from 'react';
import {
  sortByPropertyAscending,
  sortByPropertyDescending,
} from '@/utils/index';
import { Button, Text } from '@/Components/index';

interface DataFetch2 {
  season: string;
  number: number;
}
interface FetchedData {
  countriesData: DataFetch2[];
  setUpdatedCountries: React.Dispatch<React.SetStateAction<DataFetch2[]>>;
}
const Fetch2Test: FC<FetchedData> = ({
  countriesData,
  setUpdatedCountries,
}) => {
  const handleSortAscending2 = () =>
    sortByPropertyAscending(countriesData, setUpdatedCountries, 'number');
  const handleSortDescending2 = () =>
    sortByPropertyDescending(countriesData, setUpdatedCountries, 'number');

  return (
    <div>
      <div className='flex flex-row w-full justify-between  m-4'>
        <div className='flex flex-row '>
          <Button
            onClick={handleSortAscending2}
            className=' active:bg-blue-900 transition-colors duration-100 text-xxs sm:text-sm m-2 bg-blue-900  py-1 px-1 sm:py-2 sm:px-2 rounded-3xl  cursor-pointer hover:bg-blue-800'
          >
            <Text content='Sort Ascending' className='text-white text-xs' />
          </Button>
          <Button
            onClick={handleSortDescending2}
            className=' active:bg-blue-900 transition-colors duration-100 text-xxs sm:text-sm m-2 bg-blue-900  py-1 px-1 sm:py-2 sm:px-2 rounded-3xl  cursor-pointer hover:bg-blue-800'
          >
            <Text content='Sort Descending' className='text-white text-xs' />
          </Button>
        </div>
      </div>
      <div className='flex flex-col align-center justify-center '>
        {countriesData && countriesData.length > 0 ? (
          <ul className='flex flex-col align-center justify-center gap-y-5 '>
            {countriesData.map((country, name) => (
              <li
                key={name}
                className='flex flex-col align-center justify-center bg-slate-400 bg-opacity-30 rounded-3xl shadow-2xl p-2'
              >
                <Text
                  content={`Number: ${country.number}`}
                  className='bg-blue-900  rounded-xl mb-1 py-1.5 px-2 bg-opacity-25 border border-solid border-indigo-300 justify-center md:justify-start flex  '
                />
                <Text
                  content={`Season: ${country.season}`}
                  className='bg-blue-900 rounded-xl mb-1  py-1.5 px-2 bg-opacity-25 border border-solid border-indigo-300 justify-center md:justify-start flex  '
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Fetch2Test;
