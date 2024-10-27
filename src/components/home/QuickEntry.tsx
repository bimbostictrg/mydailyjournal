import React, { useState, useCallback } from 'react';
import { useJournal } from '../../context/JournalContext';

const QuickEntry: React.FC = () => {
  const [content, setContent] = useState('');
  const { addEntry, isLoading, error } = useJournal();

  const handleSubmit = useCallback(() => {
    if (!content.trim()) return;
    
    try {
      addEntry(content);
      setContent('');
    } catch (err) {
      console.error('Failed to add entry:', err);
    }
  }, [content, addEntry]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Quick Entry</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
        className="w-full h-32 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none disabled:opacity-50"
        placeholder="How are you feeling today?"
      />
      {error && (
        <p className="text-red-600 text-sm">{error.message}</p>
      )}
      <button 
        onClick={handleSubmit}
        disabled={isLoading || !content.trim()}
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Saving...' : 'Save Entry'}
      </button>
    </div>
  );
};

export default QuickEntry;