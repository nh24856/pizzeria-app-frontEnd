import { useState } from 'react';
import ProductImage from "../images/productImage";
import ProductDetails from "../details/productDetails";
import OrderNow from "../buttons/orderNowButton";
import ProductOrderModal from "../modals/productOrderModal";
import { useNavigate } from 'react-router-dom';
import SuccessAuth from '../notications/successAuth';
import FailedAuth from '../notications/failedAuth';
import { jwtDecode } from 'jwt-decode';

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isError, setIsError]= useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
  const handleOrderNowClick = () => {
      const isLoggedIn = localStorage.getItem('token');
      if (isLoggedIn) {
        setIsModalOpen(true);
      } else {
          // User is not logged in, redirect to login
          localStorage.setItem('previousUrl', window.location.pathname); // Store current path
          navigate('/login');
      }

  };

  const handleSubmit = async (orderData) => {
    setIsModalOpen(false);
    const decodedToken = jwtDecode(localStorage.getItem('token'));
    const customerId = decodedToken.id;
    const isLoggedIn = localStorage.getItem('token');
    
    if (!customerId) {
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }
    }

    try {
      const response = await fetch('http://localhost:3000/api/orders/register', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Include token if needed
        },
        body: JSON.stringify({
          customerId: customerId, // Assuming you have a customer ID stored in local storage
          products: [{ productId: product.id, quantity: orderData.quantity }],
          paymentMethod: orderData.paymentMethod,
          note: orderData.note,
          deliveryAddress: orderData.deliveryAddress,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order placed successfully:', data);
        // Optionally, redirect to an order confirmation page or show a success message
      } else {
        const errorData = await response.json();
        console.error('Error placing order:', errorData);
        // Handle error (e.g., display an error message to the user)
      }
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductDetails title={product.name} price={product.price} store={product.description} />
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-lg font-bold leading-tight text-gray-900">fr {product.price}</p>
        <OrderNow label="Order Now" onClick={handleOrderNowClick} />
      </div>

      {isModalOpen && (
        <ProductOrderModal
          product={product}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
        
      )}
      <SuccessAuth open={isSuccess} onclose={() => setIsSuccess(false)} text="Order Made Successfully" />
      <FailedAuth open={isError} onclose={ () => setIsError(false) } text="Order was not made, Try again" />
    </div>
  );
};

export default ProductCard;