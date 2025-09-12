import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function FilterBar({products,selectedCategory,setSelectedCategory,categoryBar,CategoryBar}) {

    const categories = ["All", ...new Set(products.map(product => product.category))];

  return (
    <div>
    <ul className={`flex flex-col sm:flex-row border-b-2 border-zinc-500 justify-around py-3 absolute z-2 -translate-y-0 w-screen duration-initial bg-[#ffffff] ${categoryBar === true ? "-translate-y-200" : "-translate-y-0"} animate-fade-down transition duration-700 ease`}>
        {
            categories.map((category) =>(
              <Link to={'/'}>
                 <li key={category} onClick={() => {setSelectedCategory(category);CategoryBar()}} className={`px-4 py-2 rounded cursor-pointer ${selectedCategory === category? "bg-[rgb(159,32,137)] text-white": "bg-gray-200 hover:bg-gray-300"}`}>{category}</li>
                 </Link>
            ))
        }
    </ul>
    </div>
  )
}

export default FilterBar