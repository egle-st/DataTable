import React, { FC, ChangeEvent } from 'react';
import { DataFetch } from '@/types/datafetch';

interface InputProps {
  className: string;
  placeholder: string;
  label?: string;
  type: string;
  inputInitialValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  initialData: DataFetch[];
  setSortedCountries: React.Dispatch<React.SetStateAction<DataFetch[]>>;
  ariaLabel: string;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  className,
  placeholder,
  label,
  type,
  inputInitialValue,
  setInputValue,
  initialData,
  setSortedCountries,
  ariaLabel,
  onFocus,
}): JSX.Element => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);

    const filteredDataFromSearchBar = initialData.filter((country) => {
      const searchValue = value.toLowerCase();

      return (
        country.name.toLowerCase().includes(searchValue) ||
        String(country.area).toLowerCase().includes(searchValue) ||
        country.region.toLowerCase().includes(searchValue)
      );
    });

    setSortedCountries(filteredDataFromSearchBar);
  };
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        onFocus={onFocus}
        aria-label={ariaLabel}
        onChange={handleInputChange}
        className={className}
        placeholder={placeholder}
        type={type}
        value={inputInitialValue}
      />
    </div>
  );
};

export default Input;
