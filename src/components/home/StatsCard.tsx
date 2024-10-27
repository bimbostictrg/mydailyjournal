import React from 'react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value }) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

export default StatsCard;