import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
const ProductList = ({products,searchItem,selectedCategory,user}) => {  
  
   const filteredProducts = products.filter(product => {

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.title.toLowerCase().includes(searchItem.toLowerCase())

    return matchesCategory && matchesSearch;
   }
  );

  
  return (
  <>
   <div className="flex justify-around flex-col items-center relative z-1">
    <h2 className='text-[#802c6e] text-3xl font-[600] mt-4 bg-white'>ProductList</h2>
      {/* Responsive Grid */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-10 pb-10">
        {products.length === 0 ? (
          // Loading Spinner
          <div className="flex items-center justify-center h-screen">
            <div className="w-10 h-10 border-4 border-[rgb(159,32,137)] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          // No products found
          <p>No products found</p>
        ) : (
          // Show filtered products
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>


    </div>
    
  </>
  )
}

export default ProductList