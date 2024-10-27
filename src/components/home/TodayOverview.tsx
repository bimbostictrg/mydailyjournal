import React from 'react';
import { useJournal } from '../../context/JournalContext';

const TodayOverview: React.FC = () => {
  const { entries, isLoading, error } = useJournal();
  
  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-red-600">Failed to load overview: {error.message}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-600">Loading overview...</p>
      </div>
    );
  }

  const todayEntries = entries.filter(entry => 
    entry.date.toDateString() === new Date().toDateString()
  );

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Today's Overview</h2>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Date</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Entries Today</span>
          <span className="font-medium">{todayEntries.length}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Mood</span>
          <span className="font-medium">😊 Happy</span>
        </div>
      </div>
    </div>
  );
};

export default TodayOverview;