import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChartPieIcon, CashIcon, StarIcon, XIcon } from '@heroicons/react/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
    <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-10 p-2 bg-gray-800 text-white rounded-lg md:hidden"
      >
        <XIcon className="w-6 h-6" />
      </button>
    <aside className={`fixed top-0 left-0 z-20 w-64 h-full bg-gray-800 text-white p-4 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:w-64 md:translate-x-0`}>
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <p className="text-lg font-bold">John Doe</p>
      </div>
      <ul>
        <li className={`mb-4 ${location.pathname === '/dashboard' ? 'text-yellow-400' : ''}`}>
          <a href="#dashboard" className="flex items-center hover:text-gray-400">
            <ChartPieIcon className="w-5 h-5 mr-2" />
            Dashboard
          </a>
        </li>
        <li className={`mb-4 ${location.pathname === '/pos' ? 'text-yellow-400' : ''}`}>
          <a href="#pos" className="flex items-center hover:text-gray-400">
            <CashIcon className="w-5 h-5 mr-2" />
            POS
          </a>
        </li>
        <li className={`mb-4 ${location.pathname === '/loyalty' ? 'text-yellow-400' : ''}`}>
          <a href="#loyalty" className="flex items-center hover:text-gray-400">
            <StarIcon className="w-5 h-5 mr-2" />
            Loyalty Program
          </a>
        </li>
      </ul>
    </aside>
    </>
  );
};

export default Sidebar;
