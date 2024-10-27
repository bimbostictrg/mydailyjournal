import React from 'react';
import { Book, Calendar, LineChart, Settings } from 'lucide-react';
import NavItem from './NavItem';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-semibold text-gray-800">My Daily Journal</span>
          </div>
          
          <div className="flex space-x-6">
            <NavItem icon={<Book className="h-5 w-5" />} text="Journal" active />
            <NavItem icon={<Calendar className="h-5 w-5" />} text="Calendar" />
            <NavItem icon={<LineChart className="h-5 w-5" />} text="Insights" />
            <NavItem icon={<Settings className="h-5 w-5" />} text="Settings" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;