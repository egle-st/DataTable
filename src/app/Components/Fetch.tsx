import React, { FC } from 'react';
import { BsSortAlphaDown, BsSortAlphaDownAlt } from 'react-icons/bs';
import { AiOutlineControl } from 'react-icons/ai';
import { DataFetch } from '@/types/datafetch';
import { Text, Button, OptionMenu } from '@/Components/index';
import {
  sortByPropertyAscending,
  sortByPropertyDescending,
  filterInRegion,
  filterSmallerByArea,
} from '@/utils/index';

interface FetchedData {
  countriesData: DataFetch[];
  setUpdatedCountries: React.Dispatch<React.SetStateAction<DataFetch[]>>;
  menuVisible: boolean;
  changeOptionMenuToVisible: React.Dispatch<React.SetStateAction<boolean>>;
  initialData: DataFetch[];
}
const Fetch: FC<FetchedData> = ({
  countriesData,
  setUpdatedCountries,
  menuVisible,
  changeOptionMenuToVisible,
  initialData,
}) => {
  const handleSortAscending = () =>
    sortByPropertyAscending(countriesData, setUpdatedCountries, 'name');

  const handleSortDescending = () =>
    sortByPropertyDescending(countriesData, setUpdatedCountries, 'name');

  const handleOptionMenu = () => {
    changeOptionMenuToVisible(!menuVisible);
  };

  const handleOptionMenuButton1 = () => {
    filterSmallerByArea(initialData, setUpdatedCountries, 'Lithuania');
    changeOptionMenuToVisible(false);
  };

  const handleOptionMenuButton2 = () => {
    filterInRegion(initialData, setUpdatedCountries, 'Oceania');
    changeOptionMenuToVisible(false);
  };
  return (
    <div>
      <div className='flex flex-row justify-between  m-4'>
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
            onClick={handleOptionMenu}
            className=' active:bg-blue-900 transition-colors duration-100 flex justify-self-center text-xxs sm:text-sm m-2 bg-blue-900  py-1 px-1 sm:py-2 sm:px-2 rounded-3xl cursor-pointer hover:bg-blue-800'
          >
            <AiOutlineControl className='text-3xl rotate-90 flex justify-center' />
          </Button>
        </div>
      </div>
      <div className='w-full flex justify-end relative'>
        <OptionMenu
          menuVisible={menuVisible}
          className='  bg-blue-900 p-1 z-1  overflow-hidden box-border absolute right-0 top-0 rounded-3xl flex  flex-col justify-center align-center gap-2 w-full md:w-1/3 xl:w-1/5 '
        >
          <Button
            onClick={handleOptionMenuButton1}
            className=' active:bg-blue-900 p-2 truncate rounded-3xl cursor-pointer hover:bg-blue-800'
          >
            <Text
              content='Area smaller than Lithuania'
              className='text-white text-xs'
            />
          </Button>
          <Button
            onClick={handleOptionMenuButton2}
            className=' active:bg-blue-900 p-2 truncate rounded-3xl cursor-pointer hover:bg-blue-800'
          >
            <Text
              content='Countries in Oceania region'
              className='text-white text-xs  '
            />
          </Button>
        </OptionMenu>
      </div>
      <div className='flex flex-col align-center justify-center '>
        {countriesData && countriesData.length > 0 ? (
          <ul className='flex flex-col align-center justify-center gap-y-5 '>
            {countriesData.map((country, name) => (
              <li
                key={name}
                className='flex flex-col align-center justify-center text-xs md:text-sm bg-slate-400 bg-opacity-30 rounded-3xl shadow-2xl p-2'
              >
                <Text
                  content={`Name: ${country.name}`}
                  className='bg-blue-900   rounded-xl mb-1 py-1.5 px-2 bg-opacity-25 border border-solid border-indigo-300 justify-center md:justify-start flex  '
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
