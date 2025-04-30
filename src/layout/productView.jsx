import React, { useState } from 'react'
import DashboardLayout from './dashboardLayout'
import ProductAdd from './dashboard/productAdd';
import { jwtDecode } from 'jwt-decode';

const ProductView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // get products by seller id
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const userId = decodedToken.id;
    const [products, setProducts] = useState([]);
    React.useEffect(() => {

        const fetchProducts = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/products/get-my-products/${userId}`,
                { method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }
            )
            const newData = await response.json();
            setProducts(newData);
        }
        fetchProducts()
        .catch((error) => {
            console.error('Error while fetching:', error);
        });
        fetchProducts();
    },  [userId]);
    
  return (
    
<DashboardLayout>
    <div className="relative overflow-x-auto sm:rounded-lg mt-10 " style={{marginLeft: '23%'}}>
        <button className='text-black bg-green-400 p-3 rounded-lg hover:text-black hover:bg-red-600' style={{marginLeft: '89%'}} onClick={ ()=> setIsModalOpen(true)}>Add Product</button>
        <ProductAdd isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <h1 className='text-2xl font-bold text-center'>Product List</h1>
        <table className="w-full text-sm text-black shadow-md rounded-lg text-left items-center border border-black">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">Product name</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">Current Stock</th>
                    <th scope="col" className="px-6 py-3">Description</th>
                    <th scope="col" className="px-6 py-3">Image</th>
                    <th scope="col" className="px-6 py-3">Action</th>
                </tr>
            </thead>
            <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.description}</td>
                            <td >
                                {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="w-10 h-10 rounded items-center" />}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium"><a href='#' className='text-blue-400 hover:underline'>Edit</a></td>
                        </tr>
                    ))}
                
            </tbody>
        </table>
    </div>
</DashboardLayout>

  )
}

export default ProductView
