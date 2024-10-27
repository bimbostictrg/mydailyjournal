import React from 'react';
import { Book, Calendar, LineChart, Settings, LucideIcon } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const Navbar = () => {
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

const NavItem: React.FC<NavItemProps> = ({ icon, text, active = false }) => (
  <button
    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors
      ${active 
        ? 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100' 
        : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
      }`}
  >
    {icon}
    <span className="text-sm font-medium">{text}</span>
  </button>
);

export default Navbar;