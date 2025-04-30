import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom'
import React, { Children } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const DashboardLayout = ({ children }) => {
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodedToken.id;
    //get user name from a server request using the decoded id
    const [userName, setUserName] = React.useState('');
    const [userRole, setUserRole] = React.useState(decodedToken.role);

    React.useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/users/profile/${userId}`, {
                headers: {'Authorization': `Bearer ${token}`,
                          'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setUserName(data.fullNames);
            setUserRole(data.role);
        }
        fetchUserData()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, [userId]);



    const handleLogout = () => {
        localStorage.removeItem('token');
        //redirecting the page to login page
        window.location.href = '/login';
    }
  return (
    <div className="flex h-screen">
    
    <aside className="bg-gray-100 shadow-sm fixed top-0 left-0 z-50 my-4 ml-4 mt-10 w-72 rounded-xl transition-transform" aria-label="Sidebar" style={{marginTop: '6%'}}>
        <div className="overflow-y-auto py-4 px-3 bg-gray-100 rounded mt-10">
            <ul className="space-y-2 font-medium">
                {(userRole === 'Admin' || userRole === 'Seller' || userRole === 'customer') && (
                    
                <li>
                    <a href="/dashboard" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">Home</span>
                    </a>
                </li>
                )}
                {(userRole === 'Admin' || userRole === 'Seller' || userRole === 'customer' || userRole === 'SuperUser') && (
                <li>
                    <a href="#" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">Profile</span>
                    </a>
                </li>
                )}
                {userRole === 'SuperUser' && (
                <li>
                    <a href="/dashboard/admin/manage-users" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">Manage Users</span>
                    </a>
                </li>
                )}
                { (userRole === 'Seller' || userRole === 'SuperUser') && (
                <li>
                    <a href="/dashboard/seller/my-products" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">My products</span>
                    </a>
                </li>
                )}
                {(userRole === 'Seller' || userRole === 'Admin') && (
                <li>
                    <Link href="/dashboard/seller/manage-orders" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">Manage Orders</span>
                    </Link>
                </li>
                )}
                {userRole === 'Seller' && (
                <li>
                    <a href="#" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">My Sales</span>
                    </a>
                </li>
                )}
                {userRole === 'customer' && (
                <li>
                    <a href="#" className="flex items-center p-2 text-black rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white group">
                        <span className="ml-3">My Orders</span>
                    </a>
                </li>
                )}
                {(userRole === 'customer' || userRole === 'Seller' || userRole === 'Admin' || userRole === 'SuperUser') && (
                <li>
                    <a href="#" className="flex items-center p-2 text-red-500 rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-red-400 group mt-10" style={{marginTop: '40%'}} onClick={handleLogout}>
                        <span className="ml-3">Log out</span>
                    </a>
                </li>
                )}
            </ul>
        </div>
    </aside>

    
    <div className="flex-1 flex flex-col p-4">
        
        <nav className="flex sticky justify-between items-center bg-gray-300 rounded-xl px-4 py-2 mb-4" style={{ width: '900px', marginLeft: '28%' }} >
            
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
          {userName}
          <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
        </MenuButton>
      </div>

      <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
        <div className="py-1">
          <MenuItem>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" 
              onClick={handleLogout}
            >
              Log out
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>

            
            <div className="relative w-80">
                <input type="text" placeholder="Search..." className="block w-full h-10 px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                <div className="absolute top-0 right-0 flex items-center h-full pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="7"/><line x1="21" y1="21" x2="15" y2="15"/></svg>
                </div>
            </div>
        </nav>
        
        {/* Main */}
        <main>{ children }</main>
    </div>
</div>
  )
}

export default DashboardLayout
