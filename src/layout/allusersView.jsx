import React from 'react'
import DashboardLayout from './dashboardLayout';

const AllusersView = () => {
    const [users, setUsers] = React.useState([]);
    // by using useEffect to fetch data from the server
    React.useEffect(() => {
        const fetchProducts = async () => {
            localStorage.getItem('token');
            const token = (localStorage.getItem('token'));
            const response = await fetch('http://localhost:3000/api/users/superuser/all-users', {
            Headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
            const newData = await response.json();
            setUsers(newData);
        }
        fetchProducts()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, []);
  return (
    <DashboardLayout>
    <div className="relative overflow-x-auto sm:rounded-lg mt-10 " style={{marginLeft: '23%'}}>
        <button className='text-black bg-green-400 p-3 rounded-lg hover:text-black hover:bg-red-600' style={{marginLeft: '89%'}}>Add Users</button>
        <h1 className='text-2xl font-bold text-center'>User List</h1>
        <table className="w-full text-sm text-black shadow-md rounded-lg text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Full names
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Telephone
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Role
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Created At
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-black">{user.fullNames}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{user.telephone}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{user.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-black">{user.createdAt}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <a href='#' className='text-blue-400 hover:underline'>Remove</a>
                            </td>
                        </tr>
                    ))}
                
            </tbody>
        </table>
    </div>
</DashboardLayout>


  )
}

export default AllusersView
