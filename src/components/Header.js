import React, { useState, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 1000);
  };

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white flex items-center justify-between px-8 py-4 shadow sticky top-0 z-50">
      <div className="flex items-center">
        <img src="/logo.png" alt="Trusted Loan Network Logo" className="h-10 w-10 mr-3" />
        <span className="text-xl font-bold text-primary">TRUSTED LOAN NETWORK</span>
      </div>
      <div className="flex items-center space-x-8">
        <nav>
          <ul className="flex space-x-8 font-medium">
            <li>
              <RouterLink to="/" className="hover:text-primary transition duration-300 ease-in-out">HOME</RouterLink>
            </li>
            <li>
              {location.pathname === "/" ? (
                <a href="#about" className="hover:text-primary transition duration-300 ease-in-out">ABOUT US</a>
              ) : (
                <RouterLink to="/#about" className="hover:text-primary transition duration-300 ease-in-out">ABOUT US</RouterLink>
              )}
            </li>
            <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <span className="cursor-pointer hover:text-primary transition duration-300 ease-in-out" onClick={handleClick}>APPLY NOW</span>
              {isDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <li>
                    <RouterLink
                      to="/coming-soon"
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-primary whitespace-nowrap text-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Apply for Loan Specialist
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/personal-loan"
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 hover:text-primary text-center"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Apply for Loan
                    </RouterLink>
                  </li>
                </ul>
              )}
            </li>
            <li><a href="#reviews" className="hover:text-primary transition duration-300 ease-in-out">REVIEWS</a></li>
          </ul>
        </nav>
        <RouterLink to="/login">
          <ProfileIcon size="md" />
        </RouterLink>
      </div>
    </header>
  );
};

export default Header;
