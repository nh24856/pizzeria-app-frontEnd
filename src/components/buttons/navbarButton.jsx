import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { jwtDecode } from 'jwt-decode';

const NavbarButton = () => {
  const [userName, setUserName] = useState('');
  const isLoggedIn = localStorage.getItem('token') !== null;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token && isLoggedIn) {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;
          const response = await fetch(`http://localhost:3000/api/users/profile/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUserName(data.fullNames);
          } else {
            // Handle potential errors from the server (e.g., invalid token)
            console.error('Failed to fetch user data:', response.status);
            setUserName('');
            // Optionally clear the token if it's likely invalid
            // localStorage.removeItem('token');
          }
        } catch (error) {
          console.error('Error decoding or fetching user data:', error);
          setUserName('');
          // Optionally clear the token if decoding failed
          // localStorage.removeItem('token');
        }
      } else {
        setUserName('');
      }
    };

    fetchUserData().catch((error) => {
      console.error('Error during initial fetch:', error);
    });
  }, [isLoggedIn]); // Re-run effect when login status changes

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      {!isLoggedIn ? (
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="text-white bg-red-400 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Sign up
        </button>
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
              {userName || 'User'} {/* Display "User" as a fallback */}
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  Log out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      )}
    </>
  );
};

export default NavbarButton;