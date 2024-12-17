import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LogoutProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Logout: React.FC<LogoutProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/'); 
  };

  return (
    <button
      onClick={handleLogout}
      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800"
    >
      Logout
    </button>
  );
};

export default Logout;
