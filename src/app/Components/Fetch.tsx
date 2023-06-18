import React, { FC } from 'react';
import { fetchData } from '../../../utils/fetchData';
import { DataFetch } from '../../../types/datafetch';
import Text from '../Components/Text';
import { useEffect, useState } from 'react';
import Button from './Button';
import { BsSortAlphaDown, BsSortAlphaDownAlt } from 'react-icons/bs';
import { AiOutlineControl } from 'react-icons/ai';
import { sortByPropertyAscending } from '../../../utils/sortAscending';
import { sortByPropertyDescending } from '../../../utils/sortDescending';

interface FetchedData {
  countriesData: DataFetch[];
  setUpdatedCountries: React.Dispatch<React.SetStateAction<DataFetch[]>>;
}
// let countriesData: DataFetch[] | undefined;
const Fetch: FC<FetchedData> = ({ countriesData, setUpdatedCountries }) => {
  const handleSortAscending = () =>
    sortByPropertyAscending(countriesData, setUpdatedCountries, 'name');

  const handleSortDescending = () =>
    sortByPropertyDescending(countriesData, setUpdatedCountries, 'name');

  return (
    <div>
      <div className='flex flex-row w-full justify-between  m-4'>
        <div className='flex flex-row '>
          <Button
            onClick={handleSortAscending}
            className=' active:bg-blue-900 transition-colors duration-100 text-xxs sm:text-sm m-2 bg-blue-900  py-1 px-1 sm:py-2 sm:px-2 rounded-3xl  cursor-pointer hover:bg-blue-800'
          >
            <BsSortAlphaDown className='text-3xl flex justify-center' />
          </Button>
          <Button
            onClick={handleSortDescending}
            className=' active:bg-blue-900 transition-colors duration-100 text-xxs sm:text-sm m-2 bg-blue-900  py-1 px-1 sm:py-2 sm:px-2 rounded-3xl cursor-pointer hover:bg-blue-800'
          >
            <BsSortAlphaDownAlt className='text-3xl flex justify-center' />
          </Button>
        </div>
        <div>
          <Button
            // onClick={handleOptionMenu}
            className=' active:bg-blue-900 transition-colors duration-100 flex justify-self-center text-xxs sm:text-sm m-2 bg-blue-900  py-1 px-1 sm:py-2 sm:px-2 rounded-3xl cursor-pointer hover:bg-blue-800'
          >
            <AiOutlineControl className='text-3xl rotate-90 flex justify-center' />
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
                  content={`Name: ${country.name}`}
                  className='bg-blue-900  rounded-xl mb-1 py-1.5 px-2 bg-opacity-25 border border-solid border-indigo-300 justify-center md:justify-start flex  '
                />
                <Text
                  content={`Region: ${country.region}`}
                  className='bg-blue-900 rounded-xl mb-1  py-1.5 px-2 bg-opacity-25 border border-solid border-indigo-300 justify-center md:justify-start flex  '
                />
                <Text
                  content={`Area: ${country.area}`}
                  className='bg-blue-900 rounded-xl mb-1 py-1.5 px-2 bg-opacity-25 border border-solid border-indigo-300 justify-center md:justify-start flex  '
                />
              </li>
            ))}
          </ul>
        ) : (
          <Text
            content='Loading...'
            className='text-xl md:text-3xl flex justify-center '
          />
        )}
      </div>
    </div>
  );
};

export default Fetch;
