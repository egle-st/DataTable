'use client';

import Text from './Components/Text';
import Input from './Components/Input';
import Fetch from './Components/Fetch';
import { useState } from 'react';
import { DataFetch } from '../../types/datafetch';
import { fetchData } from '../../utils/fetchData';
import Fetch2Test from './Components/Fetch2Test';

interface DataFetch2 {
  season: string;
  number: number;
}
export default function Home() {
  const object1: DataFetch[] = [
    { name: 'Led Tasso', area: 30, region: 'hello' },
    {
      name: 'Ted Lasso',
      area: 256,
      region: 'goodbye',
    },
    { name: 'Coach Beard', area: 122, region: 'hey' },
    { name: 'abc', area: 45, region: 'hey' },
    { name: 'jk', area: 6, region: 'goodbye' },
  ];

  const object2: DataFetch2[] = [
    { season: 'summer', number: 125 },
    { season: 'autumn', number: 3 },
  ];
  // const initialData = (await fetchData()) as DataFetch[];
  const [sortedCountries, setSortedCountries] = useState<DataFetch[]>(object1);
  const initialData: DataFetch[] = object1;
  useState<DataFetch[]>(object1);
  const [sortedCountries2, setSortedCountries2] =
    useState<DataFetch2[]>(object2);
  const [optionMenuVisible, setOptionMenu] = useState(false);

  const [inputInitialValue, setInputValue] = useState('');

  return (
    <main className='flex flex-col items-center justify-start  min-h-screen bg-main-abstract bg-cover min-h-100 bg-no-repeat bg-center'>
      <div className='flex flex-col items-center justify-center mt-12 h-128 bg-slate-400  w-5/6 sm:w-3/4 bg-opacity-40 backdrop-blur-sm rounded-3xl shadow-2xl'>
        <div className='flex flex-col items-center text-white p-6 h-full w-full overflow-hidden'>
          <div className='flex justify-center lg:justify-start self-center md:self-start m-4 w-full'>
            <Input
              placeholder='Search countries by name, region or area'
              className=' w-52 sm:w-64 sm:text-s md:text-sm md:w-72 text-xxs rounded-3xl shadow-2xl p-2 focus text-black '
              type='text'
              inputInitialValue={inputInitialValue}
              setInputValue={setInputValue}
              initialData={initialData}
              setSortedCountries={setSortedCountries}
            />
          </div>
          <div className='flex flex-col justify-center md:justify-start md:w-full'>
            <Fetch
              countriesData={sortedCountries}
              setUpdatedCountries={setSortedCountries}
              menuVisible={optionMenuVisible}
              changeOptionMenuToVisible={setOptionMenu}
              initialData={initialData}
            />
            <Fetch2Test
              countriesData={sortedCountries2}
              setUpdatedCountries={setSortedCountries2}
            />
          </div>
        </div>
      </div>
      <Text
        className='mt-5 text-white w-full flex justify-end p-5 text-xs italic'
        content='Photo by Bilal O. on Unsplash'
      />
    </main>
  );
}
