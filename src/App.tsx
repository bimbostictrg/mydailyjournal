import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { JournalProvider } from './context/JournalContext';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <JournalProvider>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Home />
          </main>
        </div>
      </JournalProvider>
    </ErrorBoundary>
  );
};

export default App;