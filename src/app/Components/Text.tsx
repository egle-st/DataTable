import React, { FC } from 'react';

interface TextProps {
  content: string;
  className: string;
}

const Text: FC<TextProps> = ({ content, className }): JSX.Element => {
  return <p className={className}>{content}</p>;
};

export default Text;
