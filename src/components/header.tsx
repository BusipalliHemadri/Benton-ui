import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './ui/logout';
// import Logout from './logout';

interface HeaderProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsAuthenticated }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleNavigateToProfile = () => {
    setIsDropdownOpen(false);
    navigate('/profile'); // Navigate to profile page
  };

  const handleNavigateToSettings = () => {
    setIsDropdownOpen(false);
    navigate('/settings'); // Navigate to settings page
  };

  return (
    <header className="bg-[#fff] text-black top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex items-center justify-end p-2">
        {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
        <div className="relative">
          <button
            onClick={handleToggleDropdown}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded flex items-center"
          >
            <span className="text-sm">Admin</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded">
              {/* Profile Button */}
              <button
                onClick={handleNavigateToProfile}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </button>
              {/* Settings Button */}
              <button
                onClick={handleNavigateToSettings}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Settings
              </button>
              <Logout setIsAuthenticated={setIsAuthenticated} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
