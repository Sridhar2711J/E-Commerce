import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails({addToCart,addToWishlist}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div class="flex items-center justify-center mt-20">
      <div class="w-10 h-10 border-4 border-[rgb(159,32,137)] border-t-transparent rounded-full animate-spin"></div>
      </div>;
  if (!product) return <p className='flex items-center justify-center h-screen text-red-600 text-3xl'>Error: {error}</p>;

  return (
    
    <div className="flex flex-col items-center pb-10 px-10 sm:px-0">
      <h2 className='text-[#802c6e] text-3xl font-[600] mt-4 bg-white'>ProductDetails</h2>
      <div className="grid md:grid-cols-2 gap-6 border-0 mt-10 p-10 max-w-4xl rounded-3xl shadow-[0_0_5px_#656565] animate-fade-up">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 sm:w-full sm:h-96 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500 mb-4">{product.category}</p>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-[#802c6e] text-2xl font-bold mb-4">₹{product.price}</p>
    
      <div className='flex gap-10'>
        <button
            onClick={() => {alert("Added to cart!"); addToCart(product)}}
            className="border-0 px-5 py-2 rounded-[5px] bg-[rgb(159,32,137)] text-[#ffffff] cursor-pointer hover:scale-102 transition duration-300 ease-in-out"
          >
            Add to Cart
          </button>

          <button
            onClick={() => {alert("Added to wishlist!"); addToWishlist(product)}}
            className="border-2 border-[rgb(159,32,137)] px-5 py-2 rounded-[5px] bg-[#ffffff] text-[rgb(159,32,137)] cursor-pointer hover:scale-102 transition duration-300 ease-in-out"
          >
            WishList
          </button>

      </div>
          
        </div>
    </div>
    </div>
  );
}

export default ProductDetails