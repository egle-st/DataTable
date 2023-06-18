import React from 'react';

import { FC, ReactElement } from 'react';

interface ButtonProps {
  className: string;
  children?: ReactElement;
  onClick(): void;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  onClick,
}): JSX.Element => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
