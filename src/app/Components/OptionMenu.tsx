import React from 'react';

import { FC } from 'react';

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
    <div>{menuVisible && <div className={className}>{children}</div>}</div>
  );
};

export default OptionMenu;
