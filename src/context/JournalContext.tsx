import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Entry {
  id: string;
  content: string;
  date: Date;
  mood?: string;
}

interface JournalContextType {
  entries: Entry[];
  addEntry: (content: string, mood?: string) => void;
  isLoading: boolean;
  error: Error | null;
}

const JournalContext = createContext<JournalContextType | undefined>(undefined);

export const JournalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addEntry = useCallback((content: string, mood?: string) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const newEntry: Entry = {
        id: Date.now().toString(),
        content,
        date: new Date(),
        mood,
      };
      
      setEntries(prevEntries => [newEntry, ...prevEntries]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const value = {
    entries,
    addEntry,
    isLoading,
    error
  };

  return (
    <JournalContext.Provider value={value}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  const context = useContext(JournalContext);
  if (context === undefined) {
    throw new Error('useJournal must be used within a JournalProvider');
  }
  return context;
};