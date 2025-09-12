import React,{useEffect,useState} from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductCard({product}) {
          
  return (
    <div>
      <ul>
         <Link to={`/product/${product.id}`} className="block">
         <li key={product.id} className='border-0 w-70 p-8 leading-7 rounded-2xl shadow-[0_0_5px_#656565] cursor-pointer hover:scale-106 transition duration-300 ease-in-out animate-fade-up'>
            <img src={product.image} alt={product.title} className='w-50 h-50 object-contain'/>
            <p className='font-[500] li mt-3'>{(product.title).slice(0,20)+"...."}</p>
            <p className='text-[#802c6e] font-[700]'>&#x20B9;{product.price}</p>
            <p className='text-zinc-400'>{product.category}</p>
            <p className='font-bold bg-green-700 text-[#ffffff] w-15 text-center rounded-2xl'>4.4⭐</p>

            {/* <div className='flex justify-between'>
              <FaRegHeart className=''/>
            </div>     */}
          </li>
         </Link>  
      </ul>
    </div>
  )
}

export default ProductCard