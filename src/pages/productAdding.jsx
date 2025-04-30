import React, { useState } from 'react'
import ProductAdd from '../layout/dashboard/productAdd';
import ProdButtons from '../components/buttons/prodButtons';

const productAdding = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen">
        <ProdButtons label="Open Product Form" onClick={() => setIsModalOpen(true)} />
        <ProductAdd isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default productAdding
