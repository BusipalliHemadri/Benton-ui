import React, { useState } from 'react';
import Logout from './ui/logout';
import { BiLink } from 'react-icons/bi';

interface HeaderProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsAuthenticated }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const navigate = useNavigate();

  const handleToggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // const handleNavigateToProfile = () => {
  //   setIsDropdownOpen(false);
  //   navigate('/profile'); 
  // };

  // const handleNavigateToSettings = () => {
  //   setIsDropdownOpen(false);
  //   navigate('/settings'); 
  // };

  return (
    <header className="bg-[#fff] text-black  top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex items-center">
          <BiLink className="w-8 h-8 text-[#2eaef0] mr-2" />
          <span className="text-xl">Mackeco Properties</span>
        </div>
        <div className="relative">
          <button
            onClick={handleToggleDropdown}
            className="bg-[#2eaef0] hover:bg-[#1c8bce] text-white py-2 px-4 rounded flex items-center"
          >
            <span className="text-sm">Admin</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded shadow-md">
              <button
                // onClick={handleNavigateToProfile}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Profile
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
