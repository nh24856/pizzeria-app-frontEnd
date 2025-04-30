import axios from 'axios';
import React, { useState } from 'react'
import ProductAddModal from '../../components/modals/productAddModal';
import ProductInputFields from '../../components/inputFields/productInputFields'
import TextArea from '../../components/inputFields/textArea';
import ImageField from '../../components/inputFields/imageField';
import ProdButtons from '../../components/buttons/prodButtons'

const ProductAdd = ({isOpen, onClose}) => {
    const [formData, setformData] = useState({
        name: "",
        price: "",
        stock: "",
        description: "",
        file: null,
    });

    const token = localStorage.getItem('token');

    const handleChange = (e) => {
        setformData({...formData, [e.target.name]: e.target.value})
    };

    const handleFileChange = (e) => {
        setformData({...formData, file: e.target.files[0] })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const realFormData = new FormData();
            realFormData.append('name', formData.name);
            realFormData.append('price', formData.price);
            realFormData.append('stock', formData.stock);
            realFormData.append('description', formData.description);
            realFormData.append('file', formData.file);

            const response = await axios.post('http://localhost:3000/api/products/register' ,realFormData, 
                {headers: { 'Content-Type': 'multipart/form-data','Authorization': `Bearer ${token}` }});
            alert(response.data.message);
        }catch (error) { 
            console.error('Product Add Error: ', error.response?.data || error.message);
            // The issue might be here - error.response?.data?.error might be undefined
            alert('Product Adding Failed: ' + (error.response?.data?.error || error.message));
          }
    }
  return (
    <>
    <ProductAddModal isOpen={isOpen} onClose={onClose}>
        <h3 className="text-xl font-semibold text-gray-900">
          Add Product to Menu List
        </h3>
        <div className='p-4 md:p-5'>
            <form className="space-y-4" onSubmit={handleSubmit}>
            <ProductInputFields label="Product Name" type="text" name="name" placeholder=".... pizza" value={formData.name} onChange={handleChange} />
            <ProductInputFields label="Price" type="number" name="price" placeholder="ex: 20000" value={formData.price} onChange={handleChange} />
            <ProductInputFields label="Initial Stock" type="number" name="stock" placeholder="ex: 20" value={formData.stock} onChange={handleChange} />
            <TextArea label="Product Description" name="description" row="2" placeholder="Add your ingredients and other details..." value={formData.description} onChange={handleChange} />
            <ImageField onChange={handleFileChange} />
            <ProdButtons type="submit" label="Add Product" />
            </form>
        </div>
        
      </ProductAddModal>
      </>
  )
}

export default ProductAdd
