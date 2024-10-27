import React from 'react';
import { useJournal } from '../../context/JournalContext';
import { PenLine, Calendar, Sparkles } from 'lucide-react';
import QuickEntry from './QuickEntry';
import TodayOverview from './TodayOverview';
import StatsCard from './StatsCard';

const Home: React.FC = () => {
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

export default Home;