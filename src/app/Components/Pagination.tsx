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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handlePreviousPageButton = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const handleNextPageButton = () => {
    if (currentPage !== pages.length) {
      scrollToTop();
      setCurrentPage(currentPage + 1);
    }
  };

  const handleButtonClick = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div>
      <Button
        onClick={handlePreviousPageButton}
        ariaLabel='Previous page button'
        className={`${currentPage === 1 ? 'hidden' : ''}  m-1 p-1  `}
      >
        <Text content='<' className='text-white text-lg p-1' />
      </Button>
      {pages.map((page) => {
        return (
          <Button
            onClick={() => handleButtonClick(page)}
            ariaLabel={`Page number is ${page}`}
            className={`
               m-1   rounded-full w-8`}
            key={`1${page}`}
          >
            <Text
              className={`${
                page === currentPage ? 'bg-blue-700' : ''
              }  text-s rounded-full p-1 text-white`}
              content={`${page}`}
            />
          </Button>
        );
      })}

      <Button
        onClick={handleNextPageButton}
        ariaLabel='Next page button'
        className={`${currentPage === pages.length ? 'hidden' : ''} m-1 p-1  `}
      >
        <Text content='>' className='text-white text-lg p-1' />
      </Button>
    </div>
  );
};

export default Pagination;
