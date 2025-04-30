import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import DashboardLayout from '../dashboardLayout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserOrderView = () => {

    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodedToken.id;

    const [selfOrders, setSelfOrders] = useState([]);

    //handle cancel order BY changing status to cancelled
    const handleCancel = async (orderId) => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3000/api/orders/update-order-status/${orderId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        const data = await response.json();
        if (response.ok) {
            toast.success('Order cancelled successfully', {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
            });
             setSelfOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order.id === orderId ? { ...order, status: 'cancelled' } : order
            )
        );
        } else {
            toast.error(data.message, {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 2000,
            });
        }
    }

    //view of self made order by customer
        React.useEffect(() => {
            const token = localStorage.getItem('token');
            const fetchOrders = async () => {
                const response = await fetch(`http://localhost:3000/api/orders/get-self-orders/${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                });
                const newData = await response.json();
                setSelfOrders(newData);
            }
            fetchOrders()
            .catch((error) => {
                console.error('Error while fetching:', error);
            });
        }, [userId]);
  return (
    <DashboardLayout>
    <div className="relative overflow-x-auto sm:rounded-lg mt-10" style={{ marginLeft: '23%' }}>
            <h1 className="text-2xl font-bold text-center">My Orders</h1>
            <table className="w-full text-sm text-black shadow-md rounded-lg text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        {/* reorder the columns headers to (products, quantity, note, total amount, payment method, status) */}

                        <th scope="col" className="px-6 py-3">Products</th>
                        <th scope="col" className="px-6 py-3"> Quantity</th>
                        <th scope="col" className="px-6 py-3">Note</th>
                        <th scope="col" className="px-6 py-3">Total Amount</th>
                        <th scope="col" className="px-6 py-3">Payment Method</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope='col' className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selfOrders.map((order) => (
                        <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-black">
                                {order.OrderProducts.map((orderProduct) => orderProduct.Product.name).join(', ')}
                                </td>
                            <td className="px-6 py-4 text-sm text-black">
                                {order.OrderProducts.map((orderProduct) => orderProduct.quantity).join(', ')}
                                </td>
                            <td className="px-6 py-4 text-sm text-black">
                                {order.note || 'N/A'}
                            </td>
                            <td className="px-6 py-4 text-sm text-black">
                                Rwf {order.totalAmount}
                            </td>
                            <td className="px-6 py-4 text-sm text-black">
                                {order.paymentMethod}
                            </td>
                            <td className="px-6 py-4 text-sm text-black">
                                {order.status}
                            </td>
                            <td className="px-6 py-4 text-sm text-black">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                 value={order.id} onClick={() => handleCancel(order.id)}>Cancel</button>
                            </td>
                            
                            
                            {/* <td className="px-6 py-4 text-sm text-black">
                                {new Date(order.createdAt).toLocaleDateString()}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
</DashboardLayout>
  )
}

export default UserOrderView
