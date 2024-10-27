import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, active = false, onClick }) => (
  <button
    onClick={onClick}
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

export default NavItem;