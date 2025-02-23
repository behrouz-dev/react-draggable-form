import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import Canvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="p-4 flex flex-col lg:flex-row">
        <Canvas />
        <Sidebar />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;