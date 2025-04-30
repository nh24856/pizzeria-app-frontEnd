import React, { useState } from 'react'
import DashboardLayout from './dashboardLayout';
import { jwtDecode } from 'jwt-decode';
const Dashboardhome = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userRole = decodedToken.role;
    const userId = decodedToken.id;

    //access an api to get the count of all products
    const [productsCount, setProductsCount] = useState(0);

    const [ordersCount, setOrdersCount] = useState(0);

    const [myOrdersCount, setMyOrdersCount] = useState(0);

    const [pendingOrderCount, setpendingOrderCount] = useState(0);

    const [selfOrdersCount, setSelfOrdersCount] = useState(0);

    const [usersCount, setUsersCount] = useState(0);

    //total products count
    React.useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3000/api/products/get-products-count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const newData = await response.json();
            setProductsCount(newData.count);
        }
        fetchProducts()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, [token]);

    //total system orders made
    React.useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch('http://localhost:3000/api/orders/get-order-count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const newData = await response.json();
            setOrdersCount(newData.count);
        }
        fetchOrders()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, []);

    //total users count
    React.useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch('http://localhost:3000/api/users/count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            const newData = await response.json();
            setUsersCount(newData.count);
        }
        fetchOrders()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, []);

    //total recieived orders count
    React.useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(`http://localhost:3000/api/orders/get-my-order-count/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${token}`
                },
            });
            const newData = await response.json();
            setMyOrdersCount(newData.count);
        }
        fetchOrders()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, [userId, token]);

    //total pending orders count
    React.useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(`http://localhost:3000/api/orders/get-pending-order-count/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const newData = await response.json();
            setpendingOrderCount(newData.count);
        }
        fetchOrders()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, [userId, token]);

    //to self made order by customer
    React.useEffect(() => {
        const fetchOrders = async () => {
            const response = await fetch(`http://localhost:3000/api/orders/get-self-orders/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const newData = await response.json();
            setSelfOrdersCount(newData.count);
        }
        fetchOrders()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
    }, [userId, token]);


  return (
    <DashboardLayout>
    <div className="grid grid-cols-4 gap-4" style={{ marginLeft: '23%' }} >
            {(userRole === 'Admin' || userRole === 'SuperUser') && (
                <div className="p-4 bg-red-400 rounded-xl shadow h-56 text-2xl">
                    <h2>Products</h2>
                    <p className="text-4xl font-bold">{productsCount}</p>
                    <p className="text-sm">Total Products</p>
                    <a href="/dashboard/products" className="text-white">View Products</a>
                </div> 
                )}

            {(userRole === 'Admin' || userRole === 'SuperUser') && (
                <div className="p-4 bg-green-400 rounded-xl shadow h-56 text-2xl">
                    <h2>Orders</h2>
                    <p className="text-4xl font-bold">{ordersCount}</p>
                    <p className="text-sm">Total Orders</p>
                    <a href="/dashboard/orders" className="text-white">View Orders</a>
                    </div>
            )}
            {(userRole === 'Admin' || userRole === 'SuperUser') && (
                <div className="p-4 bg-purple-400 rounded-xl shadow h-56 text-2xl">
                    <h2>Users</h2>
                    <p className="text-4xl font-bold">{usersCount}</p>
                    <p className="text-sm">Total Users</p>
                    <a href="/dashboard/manage-users" className="text-white">View Users</a>
                </div>
            )}

            {(userRole === 'Seller') && (
                <div className="p-4 bg-green-400 rounded-xl shadow h-56 text-2xl">
                    <h2>Total Received Orders</h2>
                    <p className="text-4xl font-bold">{myOrdersCount}</p>
                    <p className="text-sm">Total Received Orders</p>
                    </div>
            )}

            {(userRole === 'Seller') && (
                <div className="p-4 bg-blue-400 rounded-xl shadow h-56 text-2xl">
                    <h2>Pending Received Orders</h2>
                    <p className="text-4xl font-bold">{pendingOrderCount}</p>
                    <p className="text-sm">Total Pending Received Orders</p>
                    </div>
            )}

            {(userRole === 'customer') && (
                <div className="p-4 bg-green-400 rounded-xl shadow h-56 text-2xl">
                    <h2>My Orders</h2>
                    <p className="text-4xl font-bold">{selfOrdersCount}</p>
                    <p className="text-sm">Total My Orders</p>
                    </div>
            )}
        </div>
        </DashboardLayout>
  )
}

export default Dashboardhome
