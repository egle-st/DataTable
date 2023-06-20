import React, { FC, LegacyRef, MutableRefObject } from 'react';

interface ButtonProps {
  className: string;
  children?: React.ReactNode;
  onClick(): void;
  ariaLabel: string;
  ariaExpanded?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  onClick,
  ariaLabel,
  ariaExpanded,
}): JSX.Element => {
  return (
    <button
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
