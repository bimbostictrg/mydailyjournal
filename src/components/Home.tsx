import React from 'react';
import { useJournal } from '../context/JournalContext';
import { PenLine, Calendar, Sparkles } from 'lucide-react';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const Home = () => {
  const { entries } = useJournal();
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-lg text-gray-600">Continue your journey of self-reflection</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <QuickEntry />
        <TodayOverview />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <StatsCard
          icon={<PenLine className="h-6 w-6 text-indigo-600" />}
          title="Total Entries"
          value={entries.length}
        />
        <StatsCard
          icon={<Calendar className="h-6 w-6 text-green-600" />}
          title="Current Streak"
          value="7 days"
        />
        <StatsCard
          icon={<Sparkles className="h-6 w-6 text-amber-600" />}
          title="Mood Average"
          value="Positive"
        />
      </div>
    </div>
  );
};

const QuickEntry: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Quick Entry</h2>
    <textarea
      className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
      placeholder="How are you feeling today?"
    />
    <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
      Save Entry
    </button>
  </div>
);

const TodayOverview: React.FC = () => (
  <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
    <h2 className="text-xl font-semibold text-gray-800">Today's Overview</h2>
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Date</span>
        <span className="font-medium">{new Date().toLocaleDateString()}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Entries Today</span>
        <span className="font-medium">2</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Mood</span>
        <span className="font-medium">😊 Happy</span>
      </div>
    </div>
  </div>
);

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

export default Home;