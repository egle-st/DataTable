import React from 'react';
import Text from './Text';
import { FC } from 'react';

interface InputProps {
  className: string;
  placeholder: string;
  label?: string;
  type: string;
}

const Input: FC<InputProps> = ({
  className,
  placeholder,
  label,
  type,
}): JSX.Element => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input className={className} placeholder={placeholder} type={type} />
    </div>
  );
};

export default Input;
