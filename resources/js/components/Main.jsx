import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import axios from 'axios';


const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)



  useEffect(() => {
    // Función para obtener los productos desde el endpoint
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/products?page=${currentPage}`);
        setProducts(response.data.data);
        setTotalPages(response.data.meta.last_page)
        setLoading(false);
        console.log("hola");
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  },[currentPage]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ProductList products={products} onPageChange={setCurrentPage} currentPage={currentPage} totalPages={totalPages}></ProductList>
  );
};

export default Main;