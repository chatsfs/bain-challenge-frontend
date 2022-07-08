import React, { FC } from 'react';

const CommonLayout: FC = ({ children }) => {
  return <div className="w-full h-screen flex justify-center items-center">{children}</div>;
};

export default CommonLayout;
