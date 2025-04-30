import React, { useState } from 'react';

const ProductOrderModal = ({ product, onClose, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('MOMO'); // default payment method

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    if (!deliveryAddress) {
      alert('Please enter your delivery address.');
      return;
    }
    onSubmit({
      productId: product.id, // Assuming your product object has an 'id'
      quantity,
      note,
      paymentMethod,
      deliveryAddress,
    });
  };

  const subtotal = (product.price * quantity).toFixed(2);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50" style={{ opacity: 0.95 }}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-150 max-w-md">
        <h1 className='justify-center text-black text-xl'>Order Form</h1>
        <div className="">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="productname" value={product.name} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" disabled/>
          </div>
        
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="productname" value={product.description} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" disabled/>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="productname" value={product.price} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" disabled/>
          </div>

          <div className="flex items-center mb-4 justify-center">
            <button onClick={handleDecrease} className="px-3 py-1 bg-gray-300 rounded-l">-</button>
            <span className="px-4">{quantity}</span>
            <button onClick={handleIncrease} className="px-3 py-1 bg-gray-300 rounded-r">+</button>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <textarea name="note" rows={2} value={note} onChange={handleNoteChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer">Write a note</textarea>
          </div>

          <div class="relative z-0 w-full mb-5 group">
              <input type="text" name="deliveryAddress" value={deliveryAddress} onChange={handleDeliveryAddressChange} placeholder="your address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
          </div>
        <div className="">
          {/* payment method */}
          <h2 className="text-lg font-bold mb-2">Payment Method</h2>
          <div className="flex items-center mb-4">
            <input type="radio" id="MOMO" name="paymentMethod" value="MOMO" onChange={handlePaymentMethodChange} className="mr-2" />
            <label class="form-check-label" for="MOMO">
              📱 Mobile Money 
            </label>
            <input type="radio" id="AirtelMoney" name="paymentMethod" value="AirtelMoney" onChange={handlePaymentMethodChange} className="mr-2" />
            <label class="form-check-label" for="AirtelMoney">
              📱 AirtelMoney 
            </label>
            <input type="radio" id="CreditCard" name="paymentMethod" value="CreditCard" onChange={handlePaymentMethodChange} className="mr-2" />
            <label class="form-check-label" for="CreditCard">
              💳 Credit Card 
            </label>
          </div>
        </div>


        <p className="text-lg font-bold mb-4">Subtotal: fr {subtotal}</p>

        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-red-500 text-white rounded">Proceed to Checkout</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderModal;
