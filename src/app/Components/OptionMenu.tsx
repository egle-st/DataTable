import React, { FC } from 'react';

interface OptionsProps {
  className: string;
  children: React.ReactNode | React.ReactNode[];
  menuVisible: boolean;
}

const OptionMenu: FC<OptionsProps> = ({
  className,
  children,
  menuVisible,
}): JSX.Element => {
  return (
    <div role='Dropdown menu' aria-label='menu'>
      <div></div>
      <div>{menuVisible && <div className={className}>{children}</div>}</div>
    </div>
  );
};

export default OptionMenu;
