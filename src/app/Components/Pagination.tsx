import React, { FC } from 'react';
import { Button, Text } from '@/Components/index';

interface PaginationProps {
  fetchDataLength: number;
  countriesPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

const Pagination: FC<PaginationProps> = ({
  fetchDataLength,
  countriesPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(fetchDataLength / countriesPerPage); i++) {
    pages.push(i);
  }

  const handlePreviousPageButton = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageButton = () => {
    if (currentPage !== pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Button
        onClick={handlePreviousPageButton}
        ariaLabel='Previous page button'
        className='bg-blue-900 m-1 p-1 rounded-full active:bg-blue-800'
      >
        <Text content='<< Previous' className='text-white text-xs p-1' />
      </Button>
      {pages.map((page) => {
        return (
          <Button
            onClick={() => setCurrentPage(page)}
            ariaLabel={`Page number is ${page}`}
            className={`${
              page === currentPage ? 'bg-blue-700' : 'bg-blue-900'
            } m-1 px-1 py-2  rounded-full w-8`}
            key={`1${page}`}
          >
            <Text className='text-white text-xs' content={`${page}`} />
          </Button>
        );
      })}
      <Button
        onClick={handleNextPageButton}
        ariaLabel='Next page button'
        className='bg-blue-900 m-1 p-1 rounded-full active:bg-blue-800'
      >
        <Text content='Next >>' className='text-white text-xs p-1' />
      </Button>
    </div>
  );
};

export default Pagination;
