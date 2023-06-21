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
      <div>
        {menuVisible && (
          <div>
            <div className='border-solid border-b-blue-900 z-1 absolute border-b-8 border-x-transparent border-x-8 border-t-0  bottom-0 right-10'></div>
            <div className={className}>{children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionMenu;
