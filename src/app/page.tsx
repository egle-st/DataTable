'use client';

import { useState, useEffect } from 'react';
import { Text, Input, Fetch, Pagination } from '@/Components/index';
import { DataFetch } from '@/types/datafetch';
import { fetchData } from '@/utils/fetchData';

export default function Home() {
  useEffect(() => {
    const fetchDataInfo = async () => {
      const response = await fetchData();
      const sortedCountries = response as DataFetch[];
      setSortedCountries(sortedCountries);
    };

    fetchDataInfo();
  }, []);

  useEffect(() => {
    const fetchDataInfo2 = async () => {
      const response2 = await fetchData();
      const initialData = response2 as DataFetch[];
      setInitialData(initialData);
    };

    fetchDataInfo2();
  }, []);

  const [sortedCountries, setSortedCountries] = useState<DataFetch[]>([]);
  const [initialData, setInitialData] = useState<DataFetch[]>([]);
  const [optionMenuVisible, setOptionMenu] = useState(false);
  const [inputInitialValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(12);
  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountries = sortedCountries.slice(
    firstCountryIndex,
    lastCountryIndex
  );
  const fetchDataLength = initialData.length;
  const resetDataOnInputFocus = () => {
    setInputValue('');
    setSortedCountries(initialData);
    setCurrentPage(1);
  };

  return (
    <main className='flex flex-col items-center justify-start  min-h-screen bg-main-abstract bg-cover min-h-100 bg-no-repeat bg-center'>
      <div className='flex flex-col items-center justify-center mt-12 h-127 md:h-128 bg-slate-400  w-5/6 sm:w-3/4 bg-opacity-40 backdrop-blur-sm rounded-3xl shadow-2xl'>
        <div className='flex flex-col items-center text-white p-6 h-full w-full overflow-hidden'>
          <div className='flex justify-center lg:justify-start self-center md:self-start m-4 w-full'>
            <Input
              ariaLabel='Search Bar'
              placeholder='Search countries by name, region or area'
              className=' w-52 sm:w-64 sm:text-s md:text-sm md:w-72 text-xxs rounded-3xl shadow-2xl p-2 focus text-black  '
              type='text'
              inputInitialValue={inputInitialValue}
              setInputValue={setInputValue}
              initialData={initialData}
              setSortedCountries={setSortedCountries}
              onFocus={resetDataOnInputFocus}
            />
          </div>
          <div className='flex flex-col justify-center md:justify-start md:w-full'>
            <Fetch
              countriesData={currentCountries}
              // countriesData={sortedCountries}
              setUpdatedCountries={setSortedCountries}
              menuVisible={optionMenuVisible}
              changeOptionMenuToVisible={setOptionMenu}
              initialData={initialData}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div>
          <Pagination
            fetchDataLength={fetchDataLength}
            countriesPerPage={countriesPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <Text
        className='mt-5 text-white w-full flex justify-end p-5 text-xs italic'
        content='Photo by Bilal O. on Unsplash'
      />
    </main>
  );
}
