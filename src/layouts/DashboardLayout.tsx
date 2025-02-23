import React from 'react';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="">
      {children}
    </div>
  );
};

export default DashboardLayout;